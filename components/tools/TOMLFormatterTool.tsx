"use client";

import { useMemo, useState } from "react";
import { parse, stringify } from "@iarna/toml";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_TOML = `[app]
name = "teeny-tiny-web"
category = "dev-tools"
formatters = ["json", "xml", "yaml", "toml"]
version = 1

[feature_flags]
pretty = true
minify = true
line_numbers = true`;

type FormatMode = "format" | "minify";

function minifyToml(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .join("\n");
}

function formatToml(value: string, mode: FormatMode) {
  const trimmed = value.trim();

  if (!trimmed) {
    return { output: "", error: "", stats: { kind: "empty", lines: 0 } };
  }

  try {
    const parsed = parse(value);
    const formatted = stringify(parsed).trim();
    const output = mode === "format" ? formatted : minifyToml(formatted);

    return {
      output,
      error: "",
      stats: {
        kind: Array.isArray(parsed) ? "array" : typeof parsed,
        lines: output ? output.split("\n").length : 0
      }
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid TOML",
      stats: { kind: "invalid", lines: 0 }
    };
  }
}

export function TOMLFormatterTool() {
  const [input, setInput] = useState(SAMPLE_TOML);
  const [mode, setMode] = useState<FormatMode>("format");

  const result = useMemo(() => formatToml(input, mode), [input, mode]);

  return (
    <ToolShell
      title="TOML Formatter"
      description="Format or minify TOML instantly, validate syntax, and copy normalized output without leaving the page."
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
        <button
          type="button"
          onClick={() => setInput(SAMPLE_TOML)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input TOML">
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

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Status" tone={result.error ? "rose" : "green"}>
          <p className={`text-sm ${result.error ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
            {result.error ? "TOML is not valid yet." : "TOML parsed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Top-level kind" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.kind}</p>
        </ToolPanel>

        <ToolPanel title="Output size" tone="violet">
          <p className="text-sm text-[#ddd6fe]">
            {mode === "format" ? `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with readable spacing.` : `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with condensed TOML output.`}
          </p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
