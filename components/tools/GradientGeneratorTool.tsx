"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { DesignToolLayout } from "@/components/tools/DesignToolLayout";
import { ToolPanel } from "@/components/tools/ToolShell";

type GradientType = "linear" | "radial";

type Stop = {
  id: string;
  color: string;
  position: number;
};

const presets = [
  { name: "Sunset", type: "linear" as const, angle: 135, stops: [{ id: "a", color: "#ff7e5f", position: 0 }, { id: "b", color: "#feb47b", position: 100 }] },
  { name: "Ocean", type: "linear" as const, angle: 120, stops: [{ id: "a", color: "#2193b0", position: 0 }, { id: "b", color: "#6dd5ed", position: 100 }] },
  { name: "Aurora", type: "linear" as const, angle: 140, stops: [{ id: "a", color: "#00c6ff", position: 0 }, { id: "b", color: "#0072ff", position: 100 }] },
  { name: "Candy", type: "linear" as const, angle: 90, stops: [{ id: "a", color: "#fc466b", position: 0 }, { id: "b", color: "#3f5efb", position: 100 }] },
  { name: "Forest", type: "linear" as const, angle: 135, stops: [{ id: "a", color: "#134e5e", position: 0 }, { id: "b", color: "#71b280", position: 100 }] },
  { name: "Neon", type: "linear" as const, angle: 115, stops: [{ id: "a", color: "#12c2e9", position: 0 }, { id: "b", color: "#c471ed", position: 50 }, { id: "c", color: "#f64f59", position: 100 }] },
  { name: "Radial Bloom", type: "radial" as const, angle: 90, stops: [{ id: "a", color: "#ffecd2", position: 0 }, { id: "b", color: "#fcb69f", position: 100 }] },
  { name: "Midnight", type: "linear" as const, angle: 180, stops: [{ id: "a", color: "#232526", position: 0 }, { id: "b", color: "#414345", position: 100 }] }
];

function stopString(stops: Stop[]) {
  return stops.map((stop) => `${stop.color} ${stop.position}%`).join(", ");
}

export function GradientGeneratorTool() {
  const [type, setType] = useState<GradientType>("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState<Stop[]>([
    { id: "1", color: "#0ea5e9", position: 0 },
    { id: "2", color: "#22c55e", position: 50 },
    { id: "3", color: "#f97316", position: 100 }
  ]);

  const gradient = useMemo(() => {
    const sorted = [...stops].sort((a, b) => a.position - b.position);
    return type === "linear"
      ? `linear-gradient(${angle}deg, ${stopString(sorted)})`
      : `radial-gradient(circle, ${stopString(sorted)})`;
  }, [angle, stops, type]);

  function updateStop(id: string, patch: Partial<Stop>) {
    setStops((current) => current.map((stop) => (stop.id === id ? { ...stop, ...patch } : stop)));
  }

  function addStop() {
    setStops((current) => [...current, { id: crypto.randomUUID(), color: "#ffffff", position: 100 }]);
  }

  function removeStop(id: string) {
    setStops((current) => (current.length <= 2 ? current : current.filter((stop) => stop.id !== id)));
  }

  return (
    <DesignToolLayout
      title="CSS Gradient Generator"
      description="Build linear and radial gradients visually, tweak color stops, and copy the resulting CSS instantly."
      preview={
        <div className="space-y-4">
          <div className="h-48 w-full rounded-3xl border border-[#27272a]" style={{ background: gradient }} />
          <ToolPanel title="CSS output" tone="blue">
            <div className="mb-3 flex justify-end">
              <CopyButton value={`background: ${gradient};`} label="Copy CSS" />
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">background: {gradient};</pre>
          </ToolPanel>
          <ToolPanel title="Presets" tone="violet">
            <div className="grid gap-3 sm:grid-cols-2">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    setType(preset.type);
                    setAngle(preset.angle);
                    setStops(preset.stops.map((stop) => ({ ...stop, id: crypto.randomUUID() })));
                  }}
                  className="overflow-hidden rounded-2xl border border-[#2c2247] bg-black/20 text-left transition hover:border-[#6d28d9]"
                >
                  <div className="h-16 w-full" style={{ background: preset.type === "linear" ? `linear-gradient(${preset.angle}deg, ${stopString(preset.stops)})` : `radial-gradient(circle, ${stopString(preset.stops)})` }} />
                  <div className="px-3 py-2 text-sm text-[#ddd6fe]">{preset.name}</div>
                </button>
              ))}
            </div>
          </ToolPanel>
        </div>
      }
      controls={
        <>
          <div className="flex flex-wrap gap-3">
            {(["linear", "radial"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setType(item)}
                className={`rounded-xl border px-4 py-2 text-sm capitalize transition ${type === item ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-black/20 text-[#c4c4cb] hover:border-[#3f3f46]"}`}
              >
                {item}
              </button>
            ))}
          </div>
          {type === "linear" ? (
            <label className="block space-y-2 text-sm text-[#d4d4d8]">
              <span>Angle: {angle}deg</span>
              <input type="range" min="0" max="360" value={angle} onChange={(event) => setAngle(Number(event.target.value))} className="w-full accent-[#22c55e]" />
            </label>
          ) : null}
          <div className="space-y-3">
            {stops.map((stop, index) => (
              <div key={stop.id} className="rounded-2xl border border-[#27272a] bg-black/20 p-3">
                <div className="mb-3 flex items-center justify-between text-sm text-[#d4d4d8]">
                  <span>Color stop {index + 1}</span>
                  <button type="button" onClick={() => removeStop(stop.id)} className="text-xs text-[#fca5a5] transition hover:text-white">Remove</button>
                </div>
                <div className="grid gap-3 sm:grid-cols-[70px_minmax(0,1fr)] sm:items-center">
                  <input type="color" value={stop.color} onChange={(event) => updateStop(stop.id, { color: event.target.value })} className="h-11 w-full rounded-xl border border-[#27272a] bg-transparent" />
                  <label className="block space-y-2 text-sm text-[#d4d4d8]">
                    <span>Position: {stop.position}%</span>
                    <input type="range" min="0" max="100" value={stop.position} onChange={(event) => updateStop(stop.id, { position: Number(event.target.value) })} className="w-full accent-[#22c55e]" />
                  </label>
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={addStop} className="rounded-xl border border-[#27272a] bg-black/20 px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white">Add color stop</button>
        </>
      }
    />
  );
}
