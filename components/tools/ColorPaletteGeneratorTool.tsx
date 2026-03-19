"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { DesignToolLayout } from "@/components/tools/DesignToolLayout";
import { ToolPanel } from "@/components/tools/ToolShell";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const normalized = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return { r, g, b };
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
  const hn = h / 360;
  const sn = s / 100;
  const ln = l / 100;

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

function shiftLightness(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex);
  const hsl = rgbToHsl(r, g, b);
  const rgb = hslToRgb(hsl.h, hsl.s, clamp(hsl.l + amount, 0, 100));
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function shiftHue(hex: string, degrees: number) {
  const { r, g, b } = hexToRgb(hex);
  const hsl = rgbToHsl(r, g, b);
  const rgb = hslToRgb((hsl.h + degrees + 360) % 360, hsl.s, hsl.l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function colorMeta(hex: string) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return {
    hex,
    rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
  };
}

export function ColorPaletteGeneratorTool() {
  const [base, setBase] = useState("#0ea5e9");

  const palette = useMemo(() => {
    return {
      tints: [40, 30, 20, 10, 5].map((amount) => colorMeta(shiftLightness(base, amount))),
      shades: [-5, -10, -20, -30, -40].map((amount) => colorMeta(shiftLightness(base, amount))),
      complementary: [colorMeta(shiftHue(base, 180))],
      triadic: [colorMeta(shiftHue(base, 120)), colorMeta(shiftHue(base, 240))],
      analogous: [colorMeta(shiftHue(base, -30)), colorMeta(shiftHue(base, 30))]
    };
  }, [base]);

  const cssVars = useMemo(() => {
    const entries = [
      ["base", colorMeta(base).hex],
      ...palette.tints.map((item, index) => [`tint-${index + 1}`, item.hex]),
      ...palette.shades.map((item, index) => [`shade-${index + 1}`, item.hex]),
      ...palette.complementary.map((item, index) => [`complementary-${index + 1}`, item.hex]),
      ...palette.triadic.map((item, index) => [`triadic-${index + 1}`, item.hex]),
      ...palette.analogous.map((item, index) => [`analogous-${index + 1}`, item.hex])
    ];

    return `:root {\n${entries.map(([name, value]) => `  --palette-${name}: ${value};`).join("\n")}\n}`;
  }, [base, palette]);

  const sections = [
    ["Tints", palette.tints],
    ["Shades", palette.shades],
    ["Complementary", palette.complementary],
    ["Triadic", palette.triadic],
    ["Analogous", palette.analogous]
  ] as const;

  return (
    <DesignToolLayout
      title="Color Palette Generator"
      description="Generate useful palette companions from a base color, inspect their formats, and export the set as CSS variables."
      preview={
        <div className="space-y-4">
          {sections.map(([label, items]) => (
            <ToolPanel key={label} title={label} tone="violet">
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <button
                    key={`${label}-${item.hex}`}
                    type="button"
                    onClick={() => navigator.clipboard.writeText(item.hex)}
                    className="rounded-2xl border border-[#2c2247] bg-black/20 p-3 text-left transition hover:border-[#8b5cf6]"
                  >
                    <div className="mb-3 h-16 rounded-xl" style={{ backgroundColor: item.hex }} />
                    <p className="font-mono text-sm text-[#f5f5f5]">{item.hex}</p>
                    <p className="mt-1 text-xs text-[#cbd5e1]">{item.rgb}</p>
                    <p className="mt-1 text-xs text-[#cbd5e1]">{item.hsl}</p>
                  </button>
                ))}
              </div>
            </ToolPanel>
          ))}
          <ToolPanel title="Export CSS variables" tone="blue">
            <div className="mb-3 flex justify-end">
              <CopyButton value={cssVars} label="Copy vars" />
            </div>
            <pre className="max-h-72 overflow-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">{cssVars}</pre>
          </ToolPanel>
        </div>
      }
      controls={
        <>
          <label className="block space-y-2 text-sm text-[#d4d4d8]">
            <span>Base color</span>
            <div className="grid gap-3 sm:grid-cols-[70px_minmax(0,1fr)] sm:items-center">
              <input type="color" value={base} onChange={(event) => setBase(event.target.value)} className="h-11 w-full rounded-xl border border-[#27272a] bg-transparent" />
              <input value={base} onChange={(event) => setBase(event.target.value)} className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" />
            </div>
          </label>
          <ToolPanel title="Base color metadata" tone="green">
            {(() => {
              const info = colorMeta(base);
              return (
                <div className="space-y-2 text-sm text-[#bbf7d0]">
                  <p className="font-mono">{info.hex}</p>
                  <p className="font-mono">{info.rgb}</p>
                  <p className="font-mono">{info.hsl}</p>
                </div>
              );
            })()}
          </ToolPanel>
        </>
      }
    />
  );
}
