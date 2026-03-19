"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { DesignToolLayout } from "@/components/tools/DesignToolLayout";
import { ToolPanel } from "@/components/tools/ToolShell";

const labels = [
  ["h1", 5],
  ["h2", 4],
  ["h3", 3],
  ["h4", 2],
  ["h5", 1],
  ["h6", 0],
  ["body", -1],
  ["small", -2]
] as const;

export function TypographyScaleTool() {
  const [base, setBase] = useState(16);
  const [ratio, setRatio] = useState(1.25);

  const scale = useMemo(() => {
    return labels.map(([label, step]) => ({
      label,
      size: Number((base * ratio ** step).toFixed(2))
    }));
  }, [base, ratio]);

  const css = useMemo(() => {
    return scale.map((item) => `--font-${item.label}: ${item.size}px;`).join("\n");
  }, [scale]);

  return (
    <DesignToolLayout
      title="Typography Scale"
      description="Choose a base size and ratio, preview the scale live, and export a reusable CSS token set for type sizing."
      preview={
        <div className="space-y-4">
          <div className="rounded-3xl border border-[#27272a] bg-black/20 p-5">
            {scale.map((item) => (
              <div key={item.label} className="border-b border-[#1f1f23] py-3 last:border-b-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">
                  {item.label} - {item.size}px
                </p>
                <p style={{ fontSize: `${item.size}px`, lineHeight: 1.15 }} className="mt-2 text-[#f5f5f5]">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            ))}
          </div>
          <ToolPanel title="CSS output" tone="blue">
            <div className="mb-3 flex justify-end">
              <CopyButton value={css} label="Copy scale" />
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">{css}</pre>
          </ToolPanel>
        </div>
      }
      controls={
        <>
          <label className="block space-y-2 text-sm text-[#d4d4d8]">
            <span>Base size (px)</span>
            <input
              type="number"
              min="10"
              max="32"
              step="1"
              value={base}
              onChange={(event) => setBase(Number(event.target.value) || 16)}
              className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            />
          </label>
          <label className="block space-y-2 text-sm text-[#d4d4d8]">
            <span>Scale ratio</span>
            <input
              type="number"
              min="1.05"
              max="2"
              step="0.01"
              value={ratio}
              onChange={(event) => setRatio(Number(event.target.value) || 1.25)}
              className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            />
          </label>
        </>
      }
    />
  );
}
