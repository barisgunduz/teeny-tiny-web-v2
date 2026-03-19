"use client";

import { useMemo, useState } from "react";

import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const statusCodes = [
  { code: 200, name: "OK", description: "The request completed successfully." },
  { code: 201, name: "Created", description: "A new resource was created." },
  { code: 204, name: "No Content", description: "The request succeeded with no response body." },
  { code: 301, name: "Moved Permanently", description: "The resource has a new permanent URL." },
  { code: 302, name: "Found", description: "The resource is temporarily available elsewhere." },
  { code: 304, name: "Not Modified", description: "Use the cached representation." },
  { code: 400, name: "Bad Request", description: "The request was malformed or invalid." },
  { code: 401, name: "Unauthorized", description: "Authentication is required." },
  { code: 403, name: "Forbidden", description: "The server refuses the request." },
  { code: 404, name: "Not Found", description: "The requested resource does not exist." },
  { code: 409, name: "Conflict", description: "The request conflicts with current state." },
  { code: 422, name: "Unprocessable Content", description: "Validation failed for the request body." },
  { code: 429, name: "Too Many Requests", description: "The client is being rate limited." },
  { code: 500, name: "Internal Server Error", description: "The server encountered an unexpected error." },
  { code: 502, name: "Bad Gateway", description: "The upstream server returned an invalid response." },
  { code: 503, name: "Service Unavailable", description: "The server is temporarily unavailable." },
  { code: 504, name: "Gateway Timeout", description: "The upstream server timed out." }
];

function toneForStatus(code: number) {
  if (code >= 200 && code < 300) return "text-[#86efac] bg-[#0d1a10] border-[#16341d]";
  if (code >= 300 && code < 400) return "text-[#93c5fd] bg-[#0b1018] border-[#1b3046]";
  if (code >= 400 && code < 500) return "text-[#fcd34d] bg-[#171109] border-[#45311a]";
  return "text-[#fca5a5] bg-[#180c0f] border-[#482026]";
}

export function HTTPStatusCodesTool() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return statusCodes.filter((item) => `${item.code} ${item.name} ${item.description}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <ToolShell
      title="HTTP Status Codes"
      description="Search common HTTP response codes and quickly scan their meaning with color-coding by response family."
    >
      <ToolPanel title="Search codes">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by code or description..." className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none placeholder:text-[#5f5f66] focus:border-[#22c55e]" />
      </ToolPanel>
      <div className="overflow-hidden rounded-2xl border border-[#27272a]">
        <div className="grid grid-cols-[120px_180px_minmax(0,1fr)] border-b border-[#27272a] bg-[#0d0d0f] px-4 py-3 text-xs font-mono uppercase tracking-[0.24em] text-[#71717a]">
          <span>Code</span>
          <span>Name</span>
          <span>Description</span>
        </div>
        {filtered.map((item) => (
          <div key={item.code} className="grid grid-cols-1 gap-2 border-t border-[#1b1b1f] px-4 py-4 md:grid-cols-[120px_180px_minmax(0,1fr)]">
            <span className={`inline-flex w-fit rounded-xl border px-3 py-1.5 font-mono text-sm ${toneForStatus(item.code)}`}>{item.code}</span>
            <span className="text-sm font-medium text-[#f5f5f5]">{item.name}</span>
            <span className="text-sm text-[#8b8b93]">{item.description}</span>
          </div>
        ))}
      </div>
    </ToolShell>
  );
}
