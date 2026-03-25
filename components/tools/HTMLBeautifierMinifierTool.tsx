"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>teeny tiny web</title>
</head>
<body>
  <main class="app-shell">
    <section>
      <h1>HTML Beautifier</h1>
      <p>Clean up messy markup or minify it for export.</p>
    </section>
  </main>
</body>
</html>`;

type FormatMode = "beautify" | "minify";

const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const RAW_TEXT_TAGS = new Set(["script", "style", "pre", "textarea"]);

function extractDoctype(input: string) {
  const match = input.match(/^\s*(<!doctype[^>]*>)/i);
  return match?.[1] ?? "";
}

function collapseInlineWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function serializeAttributes(element: Element) {
  return Array.from(element.attributes)
    .map((attribute) => ` ${attribute.name}="${attribute.value.replace(/"/g, "&quot;")}"`)
    .join("");
}

function beautifyNode(node: Node, depth: number): string[] {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent ?? "";
    const normalized = collapseInlineWhitespace(text);

    return normalized ? [`${"  ".repeat(depth)}${normalized}`] : [];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return [];
  }

  const element = node as Element;
  const tagName = element.tagName.toLowerCase();
  const indent = "  ".repeat(depth);
  const openTag = `${indent}<${tagName}${serializeAttributes(element)}>`;

  if (VOID_TAGS.has(tagName)) {
    return [openTag];
  }

  if (RAW_TEXT_TAGS.has(tagName)) {
    const rawContent = element.textContent ?? "";
    return [`${openTag}${rawContent}</${tagName}>`];
  }

  const children = Array.from(element.childNodes).flatMap((child) => beautifyNode(child, depth + 1));

  if (!children.length) {
    return [`${openTag}</${tagName}>`];
  }

  return [openTag, ...children, `${indent}</${tagName}>`];
}

function minifyNode(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return collapseInlineWhitespace(node.textContent ?? "");
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const element = node as Element;
  const tagName = element.tagName.toLowerCase();
  const openTag = `<${tagName}${serializeAttributes(element)}>`;

  if (VOID_TAGS.has(tagName)) {
    return openTag;
  }

  if (RAW_TEXT_TAGS.has(tagName)) {
    return `${openTag}${element.textContent ?? ""}</${tagName}>`;
  }

  const content = Array.from(element.childNodes)
    .map((child) => minifyNode(child))
    .join("");

  return `${openTag}${content}</${tagName}>`;
}

function formatHtml(input: string, mode: FormatMode) {
  const trimmed = input.trim();

  if (!trimmed) {
    return { output: "", error: "", stats: { tags: 0, lines: 0 } };
  }

  try {
    const parser = new DOMParser();
    const document = parser.parseFromString(trimmed, "text/html");
    const doctype = extractDoctype(trimmed);
    const bodyContent = Array.from(document.body.childNodes);
    const documentElement = document.documentElement;
    const hasFullDocument = /<html[\s>]/i.test(trimmed) || /<!doctype/i.test(trimmed);
    const targetNodes = hasFullDocument ? [documentElement] : bodyContent;
    const tagCount = document.querySelectorAll("*").length;

    const output = mode === "beautify"
      ? [doctype, ...targetNodes.flatMap((node) => beautifyNode(node, 0))].filter(Boolean).join("\n")
      : [doctype, ...targetNodes.map((node) => minifyNode(node))].filter(Boolean).join(doctype ? "" : "");

    return {
      output,
      error: "",
      stats: {
        tags: tagCount,
        lines: output ? output.split("\n").length : 0
      }
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid HTML",
      stats: { tags: 0, lines: 0 }
    };
  }
}

export function HTMLBeautifierMinifierTool() {
  const [input, setInput] = useState(SAMPLE_HTML);
  const [mode, setMode] = useState<FormatMode>("beautify");

  const result = useMemo(() => formatHtml(input, mode), [input, mode]);

  return (
    <ToolShell
      title="HTML Beautifier/Minifier"
      description="Beautify or minify HTML instantly, clean up browser markup, and copy normalized output without leaving the page."
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
          onClick={() => setInput(SAMPLE_HTML)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input HTML">
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
            {result.error ? "HTML could not be transformed yet." : "HTML processed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Tags" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.tags}</p>
        </ToolPanel>

        <ToolPanel title="Output size" tone="violet">
          <p className="text-sm text-[#ddd6fe]">
            {mode === "beautify"
              ? `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with readable indentation.`
              : `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with compressed markup.`}
          </p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
