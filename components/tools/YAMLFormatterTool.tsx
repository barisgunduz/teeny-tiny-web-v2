"use client";

import { useMemo, useState } from "react";
import { dump, load } from "js-yaml";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_YAML = `app:
  name: teeny-tiny-web
  category: dev-tools
  formatters:
    - json
    - xml
    - yaml
  featureFlags:
    pretty: true
    minify: true
  metadata:
    version: 1
    owner: frontend`;

type FormatMode = "format" | "minify";

function formatYaml(value: string, mode: FormatMode) {
  const trimmed = value.trim();

  if (!trimmed) {
    return { output: "", error: "", stats: { kind: "empty", lines: 0 } };
  }

  try {
    const parsed = load(value);
    const output = dump(parsed, {
      indent: mode === "format" ? 2 : 1,
      lineWidth: -1,
      noRefs: true,
      condenseFlow: mode === "minify",
      noCompatMode: true,
      sortKeys: false,
      flowLevel: mode === "minify" ? 0 : -1
    }).trim();

    return {
      output,
      error: "",
      stats: {
        kind: Array.isArray(parsed) ? "sequence" : parsed === null ? "null" : typeof parsed,
        lines: output ? output.split("\n").length : 0
      }
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid YAML",
      stats: { kind: "invalid", lines: 0 }
    };
  }
}

export function YAMLFormatterTool() {
  const [input, setInput] = useState(SAMPLE_YAML);
  const [mode, setMode] = useState<FormatMode>("format");

  const result = useMemo(() => formatYaml(input, mode), [input, mode]);

  return (
    <ToolShell
      title="YAML Formatter"
      description="Format or minify YAML instantly, validate syntax, and copy normalized output without leaving the page."
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
          onClick={() => setInput(SAMPLE_YAML)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input YAML">
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
            {result.error ? "YAML is not valid yet." : "YAML parsed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Top-level kind" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.kind}</p>
        </ToolPanel>

        <ToolPanel title="Output size" tone="violet">
          <p className="text-sm text-[#ddd6fe]">
            {mode === "format" ? `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with readable indentation.` : `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with condensed YAML output.`}
          </p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
