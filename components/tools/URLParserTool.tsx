"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_URL = "https://example.com:8080/tools/url-parser?query=teeny%20tiny%20web&mode=parse#details";

function parseInputUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    return null;
  }

  return new URL(trimmed);
}

export function URLParserTool() {
  const [input, setInput] = useState(SAMPLE_URL);

  const result = useMemo(() => {
    try {
      const parsed = parseInputUrl(input);

      if (!parsed) {
        return {
          parsed: null,
          queryEntries: [] as Array<[string, string]>,
          error: ""
        };
      }

      return {
        parsed,
        queryEntries: Array.from(parsed.searchParams.entries()),
        error: ""
      };
    } catch (error) {
      return {
        parsed: null,
        queryEntries: [] as Array<[string, string]>,
        error: error instanceof Error ? error.message : "Invalid URL"
      };
    }
  }, [input]);

  return (
    <ToolShell
      title="URL Parser"
      description="Break a full URL into protocol, host, path, query, and fragment parts instantly in the browser."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setInput(SAMPLE_URL)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={input} label="Copy URL" />
      </div>

      <ToolPanel title="Paste URL">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={`min-h-[140px] w-full rounded-2xl border bg-black/20 p-4 font-mono text-sm outline-none ${result.error ? "border-[#ef4444] text-[#fecaca]" : "border-[#27272a] text-[#e4e4e7] focus:border-[#22c55e]"}`}
          placeholder="https://example.com/path?foo=bar#hash"
          spellCheck={false}
        />
        {result.error ? <p className="mt-3 text-sm text-[#fca5a5]">{result.error}</p> : null}
      </ToolPanel>

      {result.parsed ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ToolPanel title="Protocol" tone="blue">
              <p className="font-mono text-sm text-[#bfdbfe]">{result.parsed.protocol || "-"}</p>
            </ToolPanel>
            <ToolPanel title="Host" tone="green">
              <p className="font-mono text-sm text-[#bbf7d0]">{result.parsed.host || "-"}</p>
            </ToolPanel>
            <ToolPanel title="Pathname" tone="violet">
              <p className="font-mono text-sm text-[#ddd6fe] break-all">{result.parsed.pathname || "/"}</p>
            </ToolPanel>
            <ToolPanel title="Hash" tone="default">
              <p className="font-mono text-sm text-[#d4d4d8] break-all">{result.parsed.hash || "-"}</p>
            </ToolPanel>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <ToolPanel title="URL breakdown" tone="blue">
              <div className="space-y-3 text-sm text-[#cbd5e1]">
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Origin</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe] break-all">{result.parsed.origin}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Hostname</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe]">{result.parsed.hostname || "-"}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Port</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe]">{result.parsed.port || "Default"}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Search</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe] break-all">{result.parsed.search || "-"}</div>
                </div>
              </div>
            </ToolPanel>

            <ToolPanel title="Query params" tone="green">
              {result.queryEntries.length ? (
                <div className="space-y-3">
                  {result.queryEntries.map(([key, value], index) => (
                    <div key={`${key}-${value}-${index}`} className="grid gap-3 rounded-xl border border-[#16341d] bg-black/10 p-3 md:grid-cols-2">
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Key</div>
                        <div className="mt-2 font-mono text-sm text-[#bbf7d0] break-all">{key}</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Value</div>
                        <div className="mt-2 font-mono text-sm text-[#bbf7d0] break-all">{value || "(empty)"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-[#16341d] bg-black/10 p-4 text-sm text-[#bbf7d0]">
                  No query parameters found in this URL.
                </div>
              )}
            </ToolPanel>
          </div>
        </>
      ) : null}
    </ToolShell>
  );
}
