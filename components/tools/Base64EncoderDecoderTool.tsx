"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function encodeBase64(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

function decodeBase64(value: string) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function Base64EncoderDecoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("hello world");

  const result = useMemo(() => {
    try {
      return {
        output: mode === "encode" ? encodeBase64(input) : decodeBase64(input),
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
      title="Base64 Encoder/Decoder"
      description="Encode plain text into Base64 or decode Base64 strings back into readable text with instant browser-side conversion."
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
        <ToolPanel title={mode === "encode" ? "Plain text" : "Base64 input"}>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-h-[260px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            spellCheck={false}
          />
        </ToolPanel>
        <ToolPanel title={mode === "encode" ? "Encoded output" : "Decoded output"} tone={result.error ? "rose" : "green"}>
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
