"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function encodeHex(value: string) {
  const bytes = new TextEncoder().encode(value);

  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function decodeHex(value: string) {
  const normalized = value.replace(/\s+/g, "");

  if (normalized.length % 2 !== 0) {
    throw new Error("Hex input must contain an even number of characters.");
  }

  if (!/^[\da-fA-F]*$/.test(normalized)) {
    throw new Error("Hex input can only contain 0-9 and A-F characters.");
  }

  const bytes = new Uint8Array(normalized.length / 2);

  for (let index = 0; index < normalized.length; index += 2) {
    bytes[index / 2] = Number.parseInt(normalized.slice(index, index + 2), 16);
  }

  return new TextDecoder().decode(bytes);
}

export function HexEncoderDecoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("hello world");

  const result = useMemo(() => {
    try {
      return {
        output: mode === "encode" ? encodeHex(input) : decodeHex(input),
        error: ""
      };
    } catch (error) {
      return {
        output: "",
        error: error instanceof Error ? error.message : "Unable to convert value"
      };
    }
  }, [input, mode]);

  return (
    <ToolShell
      title="Hex Encoder/Decoder"
      description="Convert plain text into hexadecimal byte output or decode hex strings back into readable text directly in your browser."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMode("encode")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "encode" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Encode
        </button>
        <button
          type="button"
          onClick={() => setMode("decode")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "decode" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Decode
        </button>
        <CopyButton value={result.output} label="Copy result" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title={mode === "encode" ? "Plain text" : "Hex input"}>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-h-[260px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            spellCheck={false}
          />
        </ToolPanel>
        <ToolPanel title={mode === "encode" ? "Hex output" : "Decoded output"} tone={result.error ? "rose" : "green"}>
          <textarea
            readOnly
            value={result.error || result.output}
            className={`min-h-[260px] w-full rounded-2xl border bg-black/20 p-4 font-mono text-sm outline-none ${result.error ? "border-[#ef4444] text-[#fecaca]" : "border-[#27272a] text-[#d4d4d8]"}`}
            spellCheck={false}
          />
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
