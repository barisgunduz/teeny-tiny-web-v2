"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

export function CurlBuilderTool() {
  const [url, setUrl] = useState("https://api.example.com/users");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("Authorization: Bearer YOUR_TOKEN\nContent-Type: application/json");
  const [body, setBody] = useState('{\n  "name": "Ada"\n}');

  const command = useMemo(() => {
    const headerParts = headers
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `-H \"${line.replace(/\"/g, '\\\"')}\"`);

    const parts = [`curl -X ${method} \"${url}\"`, ...headerParts];

    if (body.trim() && method !== "GET") {
      parts.push(`--data-raw '${body.replace(/'/g, "'\\''")}'`);
    }

    return parts.join(" \\\n  ");
  }, [body, headers, method, url]);

  return (
    <ToolShell
      title="cURL Builder"
      description="Build a cURL command from request inputs, headers, and body text without leaving the browser."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ToolPanel title="Request URL">
          <input value={url} onChange={(event) => setUrl(event.target.value)} className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" />
        </ToolPanel>
        <ToolPanel title="Method">
          <select value={method} onChange={(event) => setMethod(event.target.value)} className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]">
            {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </ToolPanel>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Headers">
          <textarea value={headers} onChange={(event) => setHeaders(event.target.value)} className="min-h-[180px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" spellCheck={false} />
        </ToolPanel>
        <ToolPanel title="Body">
          <textarea value={body} onChange={(event) => setBody(event.target.value)} className="min-h-[180px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" spellCheck={false} />
        </ToolPanel>
      </div>
      <ToolPanel title="Generated cURL" tone="green">
        <div className="mb-3 flex justify-end">
          <CopyButton value={command} label="Copy command" />
        </div>
        <pre className="overflow-x-auto rounded-2xl border border-[#16341d] bg-black/20 p-4 font-mono text-sm text-[#bbf7d0]">{command}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
