"use client";

import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function generateUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function generateBatch() {
  return Array.from({ length: 10 }, () => generateUuid());
}

export function UUIDGeneratorTool() {
  const [uuids, setUuids] = useState<string[]>([]);

  useEffect(() => {
    setUuids(generateBatch());
  }, []);

  return (
    <ToolShell
      title="UUID Generator"
      description="Generate RFC 4122 version 4 UUIDs in the browser, copy any individual value, or refresh the full batch in one click."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setUuids(generateBatch())}
          className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
          Regenerate 10
        </button>
        <CopyButton value={uuids.join("\n")} label="Copy all" />
      </div>

      <ToolPanel title="Generated UUIDs" tone="green">
        <div className="grid gap-3">
          {uuids.map((uuid, index) => (
            <div key={uuid} className="flex flex-col gap-3 rounded-2xl border border-[#16341d] bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">UUID {index + 1}</p>
                <p className="mt-2 break-all font-mono text-sm text-[#bbf7d0]">{uuid}</p>
              </div>
              <CopyButton value={uuid} label="Copy" className="shrink-0" />
            </div>
          ))}
        </div>
      </ToolPanel>
    </ToolShell>
  );
}
