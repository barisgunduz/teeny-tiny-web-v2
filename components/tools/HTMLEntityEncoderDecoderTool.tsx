"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

function encodeHtmlEntities(value: string) {
  return value.replace(/[&<>"']/g, (character) => ENTITY_MAP[character] ?? character);
}

function decodeHtmlEntities(value: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

export function HTMLEntityEncoderDecoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState('<section class="card">Tom & Jerry</section>');

  const result = useMemo(() => {
    try {
      return {
        output: mode === "encode" ? encodeHtmlEntities(input) : decodeHtmlEntities(input),
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
      title="HTML Entity Encoder/Decoder"
      description="Encode special characters into safe HTML entities or decode entity strings back into readable text instantly."
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
        <ToolPanel title={mode === "encode" ? "Raw HTML text" : "Entity-encoded input"}>
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
