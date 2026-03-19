"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { DesignToolLayout } from "@/components/tools/DesignToolLayout";
import { ToolPanel } from "@/components/tools/ToolShell";

function hexToRgba(hex: string, opacity: number) {
  const sanitized = hex.replace("#", "");
  const value = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(2)})`;
}

export function BoxShadowBuilderTool() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(18);
  const [blur, setBlur] = useState(32);
  const [spread, setSpread] = useState(-6);
  const [opacity, setOpacity] = useState(0.35);
  const [color, setColor] = useState("#0ea5e9");
  const [inset, setInset] = useState(false);

  const shadow = useMemo(() => {
    return `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;
  }, [blur, color, inset, opacity, spread, x, y]);

  const slider = (
    label: string,
    value: number,
    min: number,
    max: number,
    step: number,
    setter: (value: number) => void
  ) => (
    <label className="block space-y-2 text-sm text-[#d4d4d8]">
      <span>{label}: {value}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="w-full accent-[#22c55e]" />
    </label>
  );

  return (
    <DesignToolLayout
      title="Box Shadow Builder"
      description="Dial in shadow depth and softness visually, then copy the final CSS declaration with one click."
      preview={
        <div className="space-y-4">
          <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-[#27272a] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]">
            <div className="flex h-44 w-44 items-center justify-center rounded-3xl bg-[#f8fafc] text-sm font-medium text-[#0f172a]" style={{ boxShadow: shadow }}>
              Preview box
            </div>
          </div>
          <ToolPanel title="CSS output" tone="blue">
            <div className="mb-3 flex justify-end">
              <CopyButton value={`box-shadow: ${shadow};`} label="Copy CSS" />
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">box-shadow: {shadow};</pre>
          </ToolPanel>
        </div>
      }
      controls={
        <>
          {slider("X offset", x, -100, 100, 1, setX)}
          {slider("Y offset", y, -100, 100, 1, setY)}
          {slider("Blur", blur, 0, 120, 1, setBlur)}
          {slider("Spread", spread, -50, 80, 1, setSpread)}
          {slider("Opacity", opacity, 0, 1, 0.01, setOpacity)}
          <label className="block space-y-2 text-sm text-[#d4d4d8]">
            <span>Shadow color</span>
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)} className="h-11 w-full rounded-xl border border-[#27272a] bg-transparent" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#d4d4d8]">
            <input type="checkbox" checked={inset} onChange={(event) => setInset(event.target.checked)} className="h-4 w-4 accent-[#22c55e]" />
            <span>Inset shadow</span>
          </label>
        </>
      }
    />
  );
}
