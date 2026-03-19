"use client";

import { useEffect, useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function leftRotate(value: number, amount: number) {
  return (value << amount) | (value >>> (32 - amount));
}

function md5(input: string) {
  const encoder = new TextEncoder();
  const bytes = Array.from(encoder.encode(input));
  const originalBitLength = bytes.length * 8;

  bytes.push(0x80);

  while ((bytes.length % 64) !== 56) {
    bytes.push(0);
  }

  for (let index = 0; index < 8; index += 1) {
    bytes.push((originalBitLength >>> (8 * index)) & 0xff);
  }

  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  const s = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
  ];

  const k = Array.from({ length: 64 }, (_, index) => Math.floor(Math.abs(Math.sin(index + 1)) * 2 ** 32) >>> 0);

  for (let offset = 0; offset < bytes.length; offset += 64) {
    const chunk = bytes.slice(offset, offset + 64);
    const words = Array.from({ length: 16 }, (_, index) => {
      const start = index * 4;
      return (
        chunk[start] |
        (chunk[start + 1] << 8) |
        (chunk[start + 2] << 16) |
        (chunk[start + 3] << 24)
      ) >>> 0;
    });

    let a = a0;
    let b = b0;
    let c = c0;
    let d = d0;

    for (let index = 0; index < 64; index += 1) {
      let f = 0;
      let g = 0;

      if (index < 16) {
        f = (b & c) | (~b & d);
        g = index;
      } else if (index < 32) {
        f = (d & b) | (~d & c);
        g = (5 * index + 1) % 16;
      } else if (index < 48) {
        f = b ^ c ^ d;
        g = (3 * index + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * index) % 16;
      }

      const temp = d;
      d = c;
      c = b;
      b = (b + leftRotate((a + f + k[index] + words[g]) >>> 0, s[index])) >>> 0;
      a = temp;
    }

    a0 = (a0 + a) >>> 0;
    b0 = (b0 + b) >>> 0;
    c0 = (c0 + c) >>> 0;
    d0 = (d0 + d) >>> 0;
  }

  return [a0, b0, c0, d0]
    .flatMap((word) => [word & 0xff, (word >>> 8) & 0xff, (word >>> 16) & 0xff, (word >>> 24) & 0xff])
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function digest(algorithm: "SHA-1" | "SHA-256" | "SHA-512", input: string) {
  const bytes = new TextEncoder().encode(input);
  const buffer = await crypto.subtle.digest(algorithm, bytes);
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function HashGeneratorTool() {
  const [input, setInput] = useState("teeny tiny web");
  const [hashes, setHashes] = useState({ md5: "", sha1: "", sha256: "", sha512: "" });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const next = {
        md5: md5(input),
        sha1: await digest("SHA-1", input),
        sha256: await digest("SHA-256", input),
        sha512: await digest("SHA-512", input)
      };

      if (!cancelled) {
        setHashes(next);
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [input]);

  const hashEntries = useMemo(
    () => [
      ["MD5", hashes.md5],
      ["SHA1", hashes.sha1],
      ["SHA256", hashes.sha256],
      ["SHA512", hashes.sha512]
    ] as const,
    [hashes]
  );

  return (
    <ToolShell
      title="Hash Generator"
      description="Generate MD5, SHA-1, SHA-256, and SHA-512 hashes entirely in the browser for quick comparisons and checksum checks."
    >
      <ToolPanel title="Input text">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="min-h-[180px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
          spellCheck={false}
        />
      </ToolPanel>

      <div className="grid gap-4 md:grid-cols-2">
        {hashEntries.map(([label, value]) => (
          <ToolPanel key={label} title={label} tone="green">
            <div className="mb-3 flex justify-end">
              <CopyButton value={value} label="Copy" />
            </div>
            <pre className="overflow-x-auto break-all rounded-2xl border border-[#16341d] bg-black/20 p-4 font-mono text-sm text-[#bbf7d0]">{value}</pre>
          </ToolPanel>
        ))}
      </div>
    </ToolShell>
  );
}
