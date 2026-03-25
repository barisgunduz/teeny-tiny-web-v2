"use client";

import { Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

type QueryPair = {
  id: string;
  key: string;
  value: string;
};

const SAMPLE_QUERY = "?q=teeny+tiny+web&category=dev-tools&featured=true";

function createPair(key = "", value = "") {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    key,
    value
  };
}

function parseQueryString(input: string) {
  const trimmed = input.trim();
  const raw = trimmed.startsWith("?") ? trimmed.slice(1) : trimmed;

  if (!raw) {
    return [] as QueryPair[];
  }

  return raw.split("&").filter(Boolean).map((segment) => {
    const [rawKey, ...rest] = segment.split("=");
    const rawValue = rest.join("=");

    return createPair(
      decodeURIComponent(rawKey.replace(/\+/g, " ")),
      decodeURIComponent(rawValue.replace(/\+/g, " "))
    );
  });
}

function buildQueryString(pairs: QueryPair[]) {
  const filteredPairs = pairs.filter((pair) => pair.key || pair.value);

  if (!filteredPairs.length) {
    return "";
  }

  const query = filteredPairs
    .map((pair) => `${encodeURIComponent(pair.key)}=${encodeURIComponent(pair.value)}`)
    .join("&");

  return `?${query}`;
}

export function QueryStringParserBuilderTool() {
  const [rawQuery, setRawQuery] = useState(SAMPLE_QUERY);
  const [pairs, setPairs] = useState<QueryPair[]>(() => parseQueryString(SAMPLE_QUERY));

  const derived = useMemo(() => {
    try {
      const parsedPairs = parseQueryString(rawQuery);
      return {
        parsedPairs,
        builtQuery: buildQueryString(pairs),
        error: ""
      };
    } catch (error) {
      return {
        parsedPairs: [] as QueryPair[],
        builtQuery: buildQueryString(pairs),
        error: error instanceof Error ? error.message : "Invalid query string"
      };
    }
  }, [pairs, rawQuery]);

  function syncPairsFromRaw() {
    try {
      setPairs(parseQueryString(rawQuery));
    } catch {
      setPairs([]);
    }
  }

  return (
    <ToolShell
      title="Query String Parser/Builder"
      description="Parse raw query strings into editable key-value rows, rebuild clean query output, and copy the result instantly."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={syncPairsFromRaw}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Parse query
        </button>
        <button
          type="button"
          onClick={() => setPairs((current) => [...current, createPair()])}
          className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          <Plus className="h-4 w-4" />
          Add row
        </button>
        <button
          type="button"
          onClick={() => {
            setRawQuery(SAMPLE_QUERY);
            setPairs(parseQueryString(SAMPLE_QUERY));
          }}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={derived.builtQuery} label="Copy query" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <ToolPanel title="Raw query string">
          <CodeEditorTextarea
            value={rawQuery}
            onChange={(event) => setRawQuery(event.target.value)}
            error={Boolean(derived.error)}
            heightClassName="h-[220px]"
          />
          {derived.error ? <p className="mt-3 text-sm text-[#fca5a5]">{derived.error}</p> : null}
        </ToolPanel>

        <ToolPanel title="Built query" tone={derived.error ? "rose" : "green"}>
          <CodeEditorTextarea
            readOnly
            value={derived.builtQuery}
            heightClassName="h-[220px]"
          />
        </ToolPanel>
      </div>

      <ToolPanel title="Key-value pairs" tone="blue">
        <div className="space-y-3">
          {pairs.length ? pairs.map((pair, index) => (
            <div key={pair.id} className="grid gap-3 rounded-2xl border border-[#1b3046] bg-black/10 p-3 md:grid-cols-[1fr_1fr_auto]">
              <input
                type="text"
                value={pair.key}
                onChange={(event) => {
                  const value = event.target.value;
                  setPairs((current) => current.map((item) => (item.id === pair.id ? { ...item, key: value } : item)));
                }}
                placeholder={`key_${index + 1}`}
                className="rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
              />
              <input
                type="text"
                value={pair.value}
                onChange={(event) => {
                  const value = event.target.value;
                  setPairs((current) => current.map((item) => (item.id === pair.id ? { ...item, value } : item)));
                }}
                placeholder="value"
                className="rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
              />
              <button
                type="button"
                onClick={() => setPairs((current) => current.filter((item) => item.id !== pair.id))}
                className="inline-flex items-center justify-center rounded-xl border border-[#482026] bg-[#180c0f] px-4 py-3 text-[#fca5a5] transition hover:border-[#7f1d1d] hover:text-white"
                aria-label="Remove query row"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )) : (
            <div className="rounded-2xl border border-[#1b3046] bg-black/10 p-4 text-sm text-[#93c5fd]">
              No query pairs yet. Paste a query string and click `Parse query`, or add rows manually.
            </div>
          )}
        </div>
      </ToolPanel>

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Parsed pairs" tone="green">
          <p className="font-mono text-sm text-[#bbf7d0]">{derived.parsedPairs.length}</p>
        </ToolPanel>

        <ToolPanel title="Builder rows" tone="violet">
          <p className="font-mono text-sm text-[#ddd6fe]">{pairs.length}</p>
        </ToolPanel>

        <ToolPanel title="Output length" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{derived.builtQuery.length}</p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
