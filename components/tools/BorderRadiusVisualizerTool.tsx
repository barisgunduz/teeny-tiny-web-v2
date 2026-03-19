"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { DesignToolLayout } from "@/components/tools/DesignToolLayout";
import { ToolPanel } from "@/components/tools/ToolShell";

export function BorderRadiusVisualizerTool() {
  const [topLeft, setTopLeft] = useState(24);
  const [topRight, setTopRight] = useState(24);
  const [bottomRight, setBottomRight] = useState(24);
  const [bottomLeft, setBottomLeft] = useState(24);

  const radius = useMemo(() => {
    const values = [topLeft, topRight, bottomRight, bottomLeft];
    return values.every((value) => value === values[0])
      ? `${values[0]}px`
      : `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
  }, [bottomLeft, bottomRight, topLeft, topRight]);

  const slider = (label: string, value: number, setter: (value: number) => void) => (
    <label className="block space-y-2 text-sm text-[#d4d4d8]">
      <span>{label}: {value}px</span>
      <input type="range" min="0" max="160" value={value} onChange={(event) => setter(Number(event.target.value))} className="w-full accent-[#22c55e]" />
    </label>
  );

  return (
    <DesignToolLayout
      title="Border Radius Visualizer"
      description="Adjust each corner independently, preview the shape live, and copy the cleanest possible CSS border-radius value."
      preview={
        <div className="space-y-4">
          <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-[#27272a] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]">
            <div className="h-52 w-52 border border-[#38bdf8] bg-[#111827]" style={{ borderRadius: radius }} />
          </div>
          <ToolPanel title="CSS output" tone="blue">
            <div className="mb-3 flex justify-end">
              <CopyButton value={`border-radius: ${radius};`} label="Copy CSS" />
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">border-radius: {radius};</pre>
          </ToolPanel>
        </div>
      }
      controls={
        <>
          {slider("Top left", topLeft, setTopLeft)}
          {slider("Top right", topRight, setTopRight)}
          {slider("Bottom right", bottomRight, setBottomRight)}
          {slider("Bottom left", bottomLeft, setBottomLeft)}
        </>
      }
    />
  );
}
