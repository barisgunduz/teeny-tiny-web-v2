"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

export function JSONFormatterTool() {
  const [input, setInput] = useState('{\n  "name": "teeny tiny web",\n  "tools": ["json", "jwt", "regex"]\n}');
  const [mode, setMode] = useState<"format" | "minify">("format");

  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(input);
      return {
        output: mode === "format" ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed),
        error: ""
      };
    } catch (error) {
      return {
        output: "",
        error: error instanceof Error ? error.message : "Invalid JSON"
      };
    }
  }, [input, mode]);

  return (
    <ToolShell
      title="JSON Formatter"
      description="Format or minify JSON instantly, validate syntax, and copy clean output without leaving the page."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMode("format")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "format" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Format
        </button>
        <button
          type="button"
          onClick={() => setMode("minify")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "minify" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Minify
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input JSON">
          <CodeEditorTextarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            error={Boolean(result.error)}
          />
          {result.error ? <p className="mt-3 text-sm text-[#fca5a5]">{result.error}</p> : null}
        </ToolPanel>

        <ToolPanel title="Output" tone={result.error ? "rose" : "green"}>
          <CodeEditorTextarea
            readOnly
            value={result.output}
          />
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
