"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <service name="teeny-tiny-web" category="dev-tools">
    <tool slug="xml-formatter" status="ready">
      <description>Format and minify XML in the browser.</description>
    </tool>
    <tool slug="json-formatter" status="ready">
      <description>Keep tool styling and behavior aligned.</description>
    </tool>
  </service>
</catalog>`;

type FormatMode = "format" | "minify";

function extractXmlDeclaration(value: string) {
  const match = value.match(/^\s*(<\?xml[\s\S]*?\?>)/i);
  return match?.[1] ?? "";
}

function getXmlError(document: Document) {
  const parserError = document.getElementsByTagName("parsererror")[0];

  if (!parserError) {
    return "";
  }

  return parserError.textContent?.trim() || "Invalid XML";
}

function prettyPrintXml(xml: string) {
  const lines = xml.replace(/(>)(<)(\/?)/g, "$1\n$2$3").split("\n");
  let indentation = 0;

  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.match(/^<\//)) {
        indentation = Math.max(indentation - 1, 0);
      }

      const formattedLine = `${"  ".repeat(indentation)}${line}`;

      if (line.match(/^<[^!?/][^>]*[^/]>/) && !line.includes("</")) {
        indentation += 1;
      }

      return formattedLine;
    })
    .join("\n");
}

function stripWhitespaceNodes(node: Node) {
  const children = Array.from(node.childNodes);

  children.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE && !child.textContent?.trim()) {
      node.removeChild(child);
      return;
    }

    stripWhitespaceNodes(child);
  });
}

function formatXml(value: string, mode: FormatMode) {
  const trimmed = value.trim();

  if (!trimmed) {
    return { output: "", error: "" };
  }

  const parser = new DOMParser();
  const document = parser.parseFromString(trimmed, "application/xml");
  const error = getXmlError(document);

  if (error) {
    return { output: "", error };
  }

  const serializer = new XMLSerializer();
  const declaration = extractXmlDeclaration(trimmed);
  const formattedRoot = serializer.serializeToString(document.documentElement);
  const minifiedDocument = document.cloneNode(true) as Document;

  stripWhitespaceNodes(minifiedDocument);

  const minifiedRoot = serializer.serializeToString(minifiedDocument.documentElement);
  const formattedOutput = declaration ? prettyPrintXml(`${declaration}\n${formattedRoot}`) : prettyPrintXml(formattedRoot);
  const minifiedOutput = declaration ? `${declaration}${minifiedRoot}` : minifiedRoot;

  return {
    output: mode === "format" ? formattedOutput : minifiedOutput,
    error: ""
  };
}

export function XMLFormatterTool() {
  const [input, setInput] = useState(SAMPLE_XML);
  const [mode, setMode] = useState<FormatMode>("format");

  const result = useMemo(() => formatXml(input, mode), [input, mode]);
  const rootTagMatch = input.trim().match(/<([A-Za-z_][\w:.-]*)/);
  const rootTag = result.error ? "Unavailable" : rootTagMatch?.[1] ?? "None";

  return (
    <ToolShell
      title="XML Formatter"
      description="Format or minify XML instantly, validate well-formed markup, and copy clean output without sending data anywhere."
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
          onClick={() => setInput(SAMPLE_XML)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input XML">
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
            {result.error ? "XML is not well-formed yet." : "XML parsed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Root tag" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{rootTag}</p>
        </ToolPanel>

        <ToolPanel title="Output mode" tone="violet">
          <p className="text-sm text-[#ddd6fe]">{mode === "format" ? "Pretty printed with 2-space indentation." : "Whitespace-minified serialized XML."}</p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
