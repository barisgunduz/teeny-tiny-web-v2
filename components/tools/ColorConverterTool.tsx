"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex: string) {
  const clean = hex.trim().replace("#", "");
  const normalized = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error("HEX must be 3 or 6 hexadecimal characters.");
  }

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16)
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("")}`;
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function hslToRgb(h: number, s: number, l: number) {
  const hn = ((h % 360) + 360) % 360 / 360;
  const sn = clamp(s, 0, 100) / 100;
  const ln = clamp(l, 0, 100) / 100;

  if (sn === 0) {
    const value = Math.round(ln * 255);
    return { r: value, g: value, b: value };
  }

  const hueToRgb = (p: number, q: number, t: number) => {
    let temp = t;
    if (temp < 0) temp += 1;
    if (temp > 1) temp -= 1;
    if (temp < 1 / 6) return p + (q - p) * 6 * temp;
    if (temp < 1 / 2) return q;
    if (temp < 2 / 3) return p + (q - p) * (2 / 3 - temp) * 6;
    return p;
  };

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
  const p = 2 * ln - q;

  return {
    r: Math.round(hueToRgb(p, q, hn + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, hn) * 255),
    b: Math.round(hueToRgb(p, q, hn - 1 / 3) * 255)
  };
}

function parseRgb(input: string) {
  const match = input.trim().match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);

  if (!match) {
    throw new Error("RGB must look like rgb(34, 197, 94).");
  }

  return {
    r: clamp(Number(match[1]), 0, 255),
    g: clamp(Number(match[2]), 0, 255),
    b: clamp(Number(match[3]), 0, 255)
  };
}

function parseHsl(input: string) {
  const match = input.trim().match(/^hsl\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/i);

  if (!match) {
    throw new Error("HSL must look like hsl(142, 71%, 45%).");
  }

  return {
    h: Number(match[1]),
    s: clamp(Number(match[2]), 0, 100),
    l: clamp(Number(match[3]), 0, 100)
  };
}

function formatRgb(r: number, g: number, b: number) {
  return `rgb(${r}, ${g}, ${b})`;
}

function formatHsl(h: number, s: number, l: number) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function ColorConverterTool() {
  const [hex, setHex] = useState("#22c55e");
  const [rgb, setRgb] = useState("rgb(34, 197, 94)");
  const [hsl, setHsl] = useState("hsl(142, 71%, 45%)");
  const [activeField, setActiveField] = useState<"hex" | "rgb" | "hsl">("hex");

  const result = useMemo(() => {
    try {
      if (activeField === "hex") {
        const parsed = hexToRgb(hex);
        const nextHsl = rgbToHsl(parsed.r, parsed.g, parsed.b);
        return {
          hex: rgbToHex(parsed.r, parsed.g, parsed.b),
          rgb: formatRgb(parsed.r, parsed.g, parsed.b),
          hsl: formatHsl(nextHsl.h, nextHsl.s, nextHsl.l),
          error: ""
        };
      }

      if (activeField === "rgb") {
        const parsed = parseRgb(rgb);
        const nextHsl = rgbToHsl(parsed.r, parsed.g, parsed.b);
        return {
          hex: rgbToHex(parsed.r, parsed.g, parsed.b),
          rgb: formatRgb(parsed.r, parsed.g, parsed.b),
          hsl: formatHsl(nextHsl.h, nextHsl.s, nextHsl.l),
          error: ""
        };
      }

      const parsed = parseHsl(hsl);
      const nextRgb = hslToRgb(parsed.h, parsed.s, parsed.l);
      const normalizedHsl = rgbToHsl(nextRgb.r, nextRgb.g, nextRgb.b);
      return {
        hex: rgbToHex(nextRgb.r, nextRgb.g, nextRgb.b),
        rgb: formatRgb(nextRgb.r, nextRgb.g, nextRgb.b),
        hsl: formatHsl(normalizedHsl.h, normalizedHsl.s, normalizedHsl.l),
        error: ""
      };
    } catch (error) {
      return {
        hex,
        rgb,
        hsl,
        error: error instanceof Error ? error.message : "Invalid color value"
      };
    }
  }, [activeField, hex, hsl, rgb]);

  return (
    <ToolShell
      title="Color Converter"
      description="Convert between HEX, RGB, and HSL instantly, preview the active color, and copy any format without leaving the page."
    >
      <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
        <ToolPanel title="Preview" tone={result.error ? "rose" : "green"}>
          <div className="space-y-4">
            <div className="h-40 rounded-2xl border border-[#27272a]" style={{ backgroundColor: result.error ? "#111113" : result.hex }} />
            <div className="flex justify-end">
              <input
                type="color"
                value={result.error ? "#111113" : result.hex}
                onChange={(event) => {
                  setHex(event.target.value);
                  setActiveField("hex");
                }}
                className="h-11 w-16 rounded-xl border border-[#27272a] bg-transparent"
              />
            </div>
            {result.error ? <p className="text-sm text-[#fecaca]">{result.error}</p> : <p className="text-sm text-[#bbf7d0]">Color converted successfully.</p>}
          </div>
        </ToolPanel>

        <div className="grid gap-4 md:grid-cols-3">
          <ToolPanel title="HEX" tone="blue">
            <div className="space-y-3">
              <input
                value={activeField === "hex" ? hex : result.hex}
                onChange={(event) => {
                  setHex(event.target.value);
                  setActiveField("hex");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
              />
              <CopyButton value={result.hex} label="Copy HEX" />
            </div>
          </ToolPanel>

          <ToolPanel title="RGB" tone="green">
            <div className="space-y-3">
              <input
                value={activeField === "rgb" ? rgb : result.rgb}
                onChange={(event) => {
                  setRgb(event.target.value);
                  setActiveField("rgb");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
              />
              <CopyButton value={result.rgb} label="Copy RGB" />
            </div>
          </ToolPanel>

          <ToolPanel title="HSL" tone="violet">
            <div className="space-y-3">
              <input
                value={activeField === "hsl" ? hsl : result.hsl}
                onChange={(event) => {
                  setHsl(event.target.value);
                  setActiveField("hsl");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
              />
              <CopyButton value={result.hsl} label="Copy HSL" />
            </div>
          </ToolPanel>
        </div>
      </div>
    </ToolShell>
  );
}
