"use client";

import { AlertTriangle, FileCode2, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

type ASN1Node = {
  id: string;
  tagClass: string;
  tagName: string;
  tagNumber: number;
  constructed: boolean;
  length: number;
  offset: number;
  headerLength: number;
  depth: number;
  valuePreview: string;
  children: ASN1Node[];
};

type PemBlock = {
  label: string;
  bytes: Uint8Array;
  base64: string;
  nodes: ASN1Node[];
};

const SAMPLE_PEM = `-----BEGIN ASN1 SAMPLE-----
MBMCASoMDnRlZW55IHRpbnkgd2Vi
-----END ASN1 SAMPLE-----`;

const UNIVERSAL_TAG_NAMES: Record<number, string> = {
  1: "BOOLEAN",
  2: "INTEGER",
  3: "BIT STRING",
  4: "OCTET STRING",
  5: "NULL",
  6: "OBJECT IDENTIFIER",
  12: "UTF8String",
  16: "SEQUENCE",
  17: "SET",
  19: "PrintableString",
  20: "T61String",
  22: "IA5String",
  23: "UTCTime",
  24: "GeneralizedTime",
  26: "VisibleString",
  28: "UniversalString",
  30: "BMPString"
};

function decodePemBody(value: string) {
  const normalized = value.replace(/\s+/g, "");

  if (!normalized) {
    throw new Error("PEM block is empty.");
  }

  const binary = atob(normalized);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function bytesToHex(bytes: Uint8Array, maxBytes = 16) {
  const preview = Array.from(bytes.slice(0, maxBytes), (byte) => byte.toString(16).padStart(2, "0")).join(" ");
  return bytes.length > maxBytes ? `${preview} ...` : preview;
}

function decodeOid(bytes: Uint8Array) {
  if (!bytes.length) {
    return "";
  }

  const values = [Math.floor(bytes[0] / 40), bytes[0] % 40];
  let current = 0;

  for (let index = 1; index < bytes.length; index += 1) {
    current = (current << 7) | (bytes[index] & 0x7f);

    if ((bytes[index] & 0x80) === 0) {
      values.push(current);
      current = 0;
    }
  }

  return values.join(".");
}

function decodeString(bytes: Uint8Array) {
  return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
}

function getValuePreview(tagClass: number, tagNumber: number, content: Uint8Array, constructed: boolean) {
  if (constructed) {
    return `${content.length} byte${content.length === 1 ? "" : "s"}`;
  }

  if (tagClass !== 0) {
    return bytesToHex(content);
  }

  switch (tagNumber) {
    case 1:
      return content[0] === 0 ? "false" : "true";
    case 2:
      return `0x${Array.from(content, (byte) => byte.toString(16).padStart(2, "0")).join("") || "00"}`;
    case 3:
      return content.length ? `${content[0]} unused bit${content[0] === 1 ? "" : "s"}, ${Math.max(content.length - 1, 0)} data byte${content.length - 1 === 1 ? "" : "s"}` : "empty bit string";
    case 4:
      return bytesToHex(content);
    case 5:
      return "NULL";
    case 6:
      return decodeOid(content);
    case 12:
    case 19:
    case 20:
    case 22:
    case 26:
      return decodeString(content);
    case 23:
    case 24:
      return decodeString(content);
    default:
      return bytesToHex(content);
  }
}

function readTag(bytes: Uint8Array, offset: number) {
  if (offset >= bytes.length) {
    throw new Error("Unexpected end of ASN.1 data while reading tag.");
  }

  const first = bytes[offset];
  const tagClass = first >> 6;
  const constructed = (first & 0x20) === 0x20;
  let tagNumber = first & 0x1f;
  let cursor = offset + 1;

  if (tagNumber === 0x1f) {
    tagNumber = 0;

    while (cursor < bytes.length) {
      tagNumber = (tagNumber << 7) | (bytes[cursor] & 0x7f);
      const done = (bytes[cursor] & 0x80) === 0;
      cursor += 1;

      if (done) {
        break;
      }
    }
  }

  return { tagClass, constructed, tagNumber, cursor };
}

function readLength(bytes: Uint8Array, offset: number) {
  if (offset >= bytes.length) {
    throw new Error("Unexpected end of ASN.1 data while reading length.");
  }

  const first = bytes[offset];

  if ((first & 0x80) === 0) {
    return { length: first, cursor: offset + 1 };
  }

  const lengthBytes = first & 0x7f;

  if (lengthBytes === 0) {
    throw new Error("Indefinite lengths are not supported in this viewer.");
  }

  if (offset + 1 + lengthBytes > bytes.length) {
    throw new Error("ASN.1 length extends past the available data.");
  }

  let length = 0;

  for (let index = 0; index < lengthBytes; index += 1) {
    length = (length << 8) | bytes[offset + 1 + index];
  }

  return { length, cursor: offset + 1 + lengthBytes };
}

function parseAsn1Node(bytes: Uint8Array, offset: number, depth: number, counter: { value: number }): { node: ASN1Node; nextOffset: number } {
  if (counter.value > 2000) {
    throw new Error("ASN.1 structure is too large to render safely.");
  }

  const tag = readTag(bytes, offset);
  const lengthInfo = readLength(bytes, tag.cursor);
  const contentStart = lengthInfo.cursor;
  const contentEnd = contentStart + lengthInfo.length;

  if (contentEnd > bytes.length) {
    throw new Error("ASN.1 content length exceeds the available bytes.");
  }

  const content = bytes.slice(contentStart, contentEnd);
  const classNames = ["Universal", "Application", "Context", "Private"];
  const tagName = tag.tagClass === 0 ? UNIVERSAL_TAG_NAMES[tag.tagNumber] ?? `Tag ${tag.tagNumber}` : `[${tag.tagNumber}]`;
  const node: ASN1Node = {
    id: `${offset}-${depth}-${counter.value}`,
    tagClass: classNames[tag.tagClass] ?? "Unknown",
    tagName,
    tagNumber: tag.tagNumber,
    constructed: tag.constructed,
    length: lengthInfo.length,
    offset,
    headerLength: contentStart - offset,
    depth,
    valuePreview: getValuePreview(tag.tagClass, tag.tagNumber, content, tag.constructed),
    children: []
  };

  counter.value += 1;

  if (tag.constructed) {
    let childOffset = contentStart;

    while (childOffset < contentEnd) {
      const child = parseAsn1Node(bytes, childOffset, depth + 1, counter);
      node.children.push(child.node);
      childOffset = child.nextOffset;
    }
  }

  return {
    node,
    nextOffset: contentEnd
  };
}

function parseAsn1(bytes: Uint8Array) {
  const nodes: ASN1Node[] = [];
  const counter = { value: 0 };
  let offset = 0;

  while (offset < bytes.length) {
    const parsed = parseAsn1Node(bytes, offset, 0, counter);
    nodes.push(parsed.node);
    offset = parsed.nextOffset;
  }

  return nodes;
}

function extractPemBlocks(input: string) {
  const blocks: Array<{ label: string; base64: string }> = [];
  const matches = input.matchAll(/-----BEGIN ([^-]+)-----([\s\S]*?)-----END \1-----/g);

  for (const match of matches) {
    blocks.push({
      label: match[1].trim(),
      base64: match[2]
    });
  }

  if (blocks.length) {
    return blocks;
  }

  const trimmed = input.trim();

  if (!trimmed) {
    return [];
  }

  return [{ label: "DER data", base64: trimmed }];
}

function parsePemInput(input: string) {
  const blocks = extractPemBlocks(input);

  return blocks.map((block) => {
    const bytes = decodePemBody(block.base64);

    return {
      label: block.label,
      bytes,
      base64: block.base64.replace(/\s+/g, ""),
      nodes: parseAsn1(bytes)
    } satisfies PemBlock;
  });
}

function ASN1Tree({ nodes }: { nodes: ASN1Node[] }) {
  return (
    <div className="space-y-3">
      {nodes.map((node) => (
        <ASN1TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}

function ASN1TreeNode({ node }: { node: ASN1Node }) {
  return (
    <div className="rounded-2xl border border-[#27272a] bg-black/10 p-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#71717a]">{node.tagClass}</div>
          <div className="mt-2 font-mono text-sm text-[#f5f5f5]">
            {node.tagName}
            <span className="ml-2 text-[#71717a]">tag {node.tagNumber}</span>
          </div>
        </div>
        <div className="text-right font-mono text-xs text-[#8b8b93]">
          <div>offset {node.offset}</div>
          <div>length {node.length}</div>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-[#27272a] bg-black/20 p-3 font-mono text-xs text-[#d4d4d8] break-all">
        {node.valuePreview}
      </div>
      {node.children.length ? (
        <div className="mt-3 space-y-3 border-l border-white/10 pl-4">
          {node.children.map((child) => (
            <ASN1TreeNode key={child.id} node={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ASN1PEMViewerTool() {
  const [input, setInput] = useState(SAMPLE_PEM);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const result = useMemo(() => {
    try {
      const blocks = parsePemInput(input);
      return { blocks, error: "" };
    } catch (error) {
      return {
        blocks: [] as PemBlock[],
        error: error instanceof Error ? error.message : "Unable to parse PEM input"
      };
    }
  }, [input]);

  const activeBlock = result.blocks[Math.min(selectedIndex, Math.max(result.blocks.length - 1, 0))] ?? null;

  return (
    <ToolShell
      title="ASN.1 / PEM Viewer"
      description="Inspect PEM blocks and DER-encoded ASN.1 structures locally, including nested sequence trees and tag-level previews."
    >
      <div className="rounded-2xl border border-[#1b3046] bg-[#0b1018] p-4 text-sm text-[#bfdbfe]">
        PEM parsing happens entirely in your browser. Certificates, keys, and pasted ASN.1 data are not uploaded or stored on our servers.
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setInput(SAMPLE_PEM)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <button
          type="button"
          onClick={() => setInput("")}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Clear
        </button>
        <CopyButton value={input} label="Copy input" />
      </div>

      <ToolPanel title="Paste PEM or base64 DER">
        <CodeEditorTextarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
          error={Boolean(result.error)}
        />
        {result.error ? (
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#482026] bg-[#180c0f] p-4 text-sm text-[#fecaca]">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{result.error}</span>
          </div>
        ) : null}
      </ToolPanel>

      {activeBlock ? (
        <>
          <div className="grid gap-4 md:grid-cols-3">
            <ToolPanel title="PEM blocks" tone="blue">
              <div className="flex items-center gap-3 text-[#bfdbfe]">
                <Layers3 className="h-4 w-4" />
                <span className="font-mono text-sm">{result.blocks.length}</span>
              </div>
            </ToolPanel>
            <ToolPanel title="Selected block" tone="green">
              <div className="flex items-center gap-3 text-[#bbf7d0]">
                <FileCode2 className="h-4 w-4" />
                <span className="font-mono text-sm break-all">{activeBlock.label}</span>
              </div>
            </ToolPanel>
            <ToolPanel title="DER bytes" tone="violet">
              <div className="font-mono text-sm text-[#ddd6fe]">{activeBlock.bytes.length}</div>
            </ToolPanel>
          </div>

          {result.blocks.length > 1 ? (
            <ToolPanel title="Select block" tone="default">
              <div className="flex flex-wrap gap-3">
                {result.blocks.map((block, index) => (
                  <button
                    key={`${block.label}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`rounded-xl border px-4 py-2 text-sm transition ${index === selectedIndex ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
                  >
                    {block.label}
                  </button>
                ))}
              </div>
            </ToolPanel>
          ) : null}

          <div className="grid gap-4 xl:grid-cols-[0.72fr_1.28fr]">
            <ToolPanel title="Block details" tone="blue">
              <div className="space-y-3 text-sm text-[#cbd5e1]">
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Label</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe] break-all">{activeBlock.label}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">ASN.1 roots</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe]">{activeBlock.nodes.length}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">DER hex preview</div>
                  <div className="font-mono text-xs text-[#bfdbfe] break-all">{bytesToHex(activeBlock.bytes, 48)}</div>
                </div>
                <CopyButton value={activeBlock.base64} label="Copy base64" />
              </div>
            </ToolPanel>

            <ToolPanel title="ASN.1 tree" tone="green">
              <ASN1Tree nodes={activeBlock.nodes} />
            </ToolPanel>
          </div>
        </>
      ) : null}
    </ToolShell>
  );
}
