"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_CSS = `:root {
  --surface: #111113;
  --accent: #22c55e;
}

body {
  margin: 0;
  font-family: "Geist", sans-serif;
  background: #0a0a0a;
  color: #f5f5f5;
}

.card {
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  background: linear-gradient(180deg, #18181b, #111113);
}`;

type FormatMode = "beautify" | "minify";

function stripComments(input: string) {
  return input.replace(/\/\*[\s\S]*?\*\//g, "");
}

function minifyCss(input: string) {
  const withoutComments = stripComments(input);
  let result = "";
  let quote: string | null = null;
  let previousWasSpace = false;

  for (let index = 0; index < withoutComments.length; index += 1) {
    const char = withoutComments[index];
    const previous = withoutComments[index - 1];

    if (quote) {
      result += char;

      if (char === quote && previous !== "\\") {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      result += char;
      previousWasSpace = false;
      continue;
    }

    if (/\s/.test(char)) {
      previousWasSpace = true;
      continue;
    }

    if (["{", "}", ":", ";", ","].includes(char)) {
      result = result.trimEnd();
      result += char;
      previousWasSpace = false;
      continue;
    }

    if (previousWasSpace && result && !/[{:;,]/.test(result[result.length - 1])) {
      result += " ";
    }

    result += char;
    previousWasSpace = false;
  }

  return result
    .replace(/;}/g, "}")
    .trim();
}

function beautifyCss(input: string) {
  const minified = minifyCss(input);
  let result = "";
  let depth = 0;
  let quote: string | null = null;

  for (let index = 0; index < minified.length; index += 1) {
    const char = minified[index];
    const previous = minified[index - 1];

    if (quote) {
      result += char;

      if (char === quote && previous !== "\\") {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      result += char;
      continue;
    }

    if (char === "{") {
      result = `${result.trimEnd()} {\n`;
      depth += 1;
      result += "  ".repeat(depth);
      continue;
    }

    if (char === "}") {
      depth = Math.max(depth - 1, 0);
      result = `${result.trimEnd()}\n${"  ".repeat(depth)}}`;

      if (index < minified.length - 1) {
        result += "\n\n";
      }

      if (index < minified.length - 1 && minified[index + 1] !== "}") {
        result += "  ".repeat(depth);
      }

      continue;
    }

    if (char === ";") {
      result += ";\n";

      if (index < minified.length - 1 && minified[index + 1] !== "}") {
        result += "  ".repeat(depth);
      }

      continue;
    }

    if (char === ",") {
      result += ", ";
      continue;
    }

    if (char === ":") {
      result += ": ";
      continue;
    }

    result += char;
  }

  return result.trim();
}

function formatCss(input: string, mode: FormatMode) {
  const trimmed = input.trim();

  if (!trimmed) {
    return { output: "", error: "", stats: { rules: 0, lines: 0 } };
  }

  try {
    const openBraces = (trimmed.match(/{/g) ?? []).length;
    const closeBraces = (trimmed.match(/}/g) ?? []).length;

    if (openBraces !== closeBraces) {
      throw new Error("CSS has unbalanced curly braces.");
    }

    const output = mode === "beautify" ? beautifyCss(trimmed) : minifyCss(trimmed);
    const rules = openBraces;

    return {
      output,
      error: "",
      stats: {
        rules,
        lines: output ? output.split("\n").length : 0
      }
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid CSS",
      stats: { rules: 0, lines: 0 }
    };
  }
}

export function CSSBeautifierMinifierTool() {
  const [input, setInput] = useState(SAMPLE_CSS);
  const [mode, setMode] = useState<FormatMode>("beautify");

  const result = useMemo(() => formatCss(input, mode), [input, mode]);

  return (
    <ToolShell
      title="CSS Beautifier/Minifier"
      description="Beautify or minify CSS instantly, clean up stylesheet formatting, and copy normalized output without leaving the page."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMode("beautify")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "beautify" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Beautify
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
          onClick={() => setInput(SAMPLE_CSS)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input CSS">
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
            {result.error ? "CSS could not be transformed yet." : "CSS processed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Rules" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.rules}</p>
        </ToolPanel>

        <ToolPanel title="Output size" tone="violet">
          <p className="text-sm text-[#ddd6fe]">
            {mode === "beautify"
              ? `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with readable indentation.`
              : `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with compressed stylesheet output.`}
          </p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
