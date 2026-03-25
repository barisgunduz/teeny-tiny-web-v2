"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_MARKDOWN = [
  "# Markdown HTML Preview",
  "",
  "Write **Markdown** on the left and inspect the rendered preview and generated HTML.",
  "",
  "## Features",
  "",
  "- Live preview",
  "- Generated HTML output",
  "- Browser-side conversion only",
  "",
  "> Useful for docs, README drafts, and quick content checks.",
  "",
  "A simple inline example:",
  "Use `npm run lint` before shipping.",
  "",
  "A link example: [OpenAI](https://openai.com)",
  "",
  "```html",
  "<section>",
  "  <h2>Hello</h2>",
  "  <p>Preview me</p>",
  "</section>",
  "```"
].join("\n");


function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(value: string) {
  let html = escapeHtml(value);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

  return html;
}

function renderMarkdown(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      const fence = trimmed.slice(0, 3);
      const language = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith(fence)) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote><p>${quoteLines.map(renderInlineMarkdown).join("<br />")}</p></blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(`<li>${renderInlineMarkdown(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(`<li>${renderInlineMarkdown(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current || current.startsWith("#") || current.startsWith(">") || current.startsWith("```") || current.startsWith("~~~") || /^[-*]\s+/.test(current) || /^\d+\.\s+/.test(current)) {
        break;
      }
      paragraphLines.push(current);
      index += 1;
    }
    html.push(`<p>${renderInlineMarkdown(paragraphLines.join(" "))}</p>`);
  }

  return html.join("\n");
}

export function MarkdownHTMLPreviewTool() {
  const [input, setInput] = useState(SAMPLE_MARKDOWN);

  const result = useMemo(() => {
    try {
      const output = renderMarkdown(input);
      return {
        html: output,
        error: "",
        stats: {
          lines: input ? input.split("\n").length : 0,
          blocks: output ? output.split("\n").length : 0
        }
      };
    } catch (error) {
      return {
        html: "",
        error: error instanceof Error ? error.message : "Unable to render markdown",
        stats: {
          lines: 0,
          blocks: 0
        }
      };
    }
  }, [input]);

  return (
    <ToolShell
      title="Markdown to HTML Preview"
      description="Write Markdown, inspect the rendered preview, and copy generated HTML instantly without leaving the page."
    >
      <div className="rounded-2xl border border-[#1b3046] bg-[#0b1018] px-4 py-3 text-sm text-[#bfdbfe]">
        Markdown is converted locally in your browser. Raw pasted HTML is escaped before preview rendering.
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setInput(SAMPLE_MARKDOWN)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.html} label="Copy HTML" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <ToolPanel title="Markdown input">
          <CodeEditorTextarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            error={Boolean(result.error)}
            heightClassName="h-[360px]"
          />
          {result.error ? <p className="mt-3 text-sm text-[#fca5a5]">{result.error}</p> : null}
        </ToolPanel>

        <ToolPanel title="HTML preview" tone={result.error ? "rose" : "green"}>
          <div className="h-[360px] overflow-y-auto rounded-2xl border border-[#27272a] bg-black/20 p-5 text-sm leading-7 text-[#d4d4d8] [&_a]:text-[#22d3ee] [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-[#27272a] [&_blockquote]:pl-4 [&_code]:rounded-md [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-semibold [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-xl [&_h3]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-[#27272a] [&_pre]:bg-[#0a0a0a] [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-6]"
            dangerouslySetInnerHTML={{ __html: result.html }}
          />
        </ToolPanel>

        <ToolPanel title="Generated HTML" tone={result.error ? "rose" : "blue"}>
          <CodeEditorTextarea
            readOnly
            value={result.html}
            heightClassName="h-[360px]"
          />
        </ToolPanel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Status" tone={result.error ? "rose" : "green"}>
          <p className={`text-sm ${result.error ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
            {result.error ? "Markdown could not be rendered yet." : "Markdown rendered successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Markdown lines" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.lines}</p>
        </ToolPanel>

        <ToolPanel title="HTML blocks" tone="violet">
          <p className="font-mono text-sm text-[#ddd6fe]">{result.stats.blocks}</p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
