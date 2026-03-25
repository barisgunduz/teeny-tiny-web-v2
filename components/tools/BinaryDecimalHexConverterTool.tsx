"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

type Field = "binary" | "decimal" | "hex";

function parseValue(value: string, field: Field) {
  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error("Enter a whole number to convert.");
  }

  if (field === "decimal") {
    if (!/^-?\d+$/.test(trimmed)) {
      throw new Error("Decimal input must contain only whole numbers.");
    }

    return BigInt(trimmed);
  }

  const sign = trimmed.startsWith("-") ? -1n : 1n;
  const unsigned = trimmed.replace(/^-/, "");
  const normalized = field === "binary"
    ? unsigned.replace(/^0b/i, "")
    : unsigned.replace(/^0x/i, "");

  if (!normalized) {
    throw new Error(`Enter a valid ${field} value to convert.`);
  }

  const pattern = field === "binary" ? /^[01]+$/ : /^[\da-fA-F]+$/;

  if (!pattern.test(normalized)) {
    throw new Error(
      field === "binary"
        ? "Binary input can only contain 0 and 1."
        : "Hex input can only contain 0-9 and A-F characters."
    );
  }

  const prefix = field === "binary" ? "0b" : "0x";
  return sign * BigInt(prefix + normalized);
}

function formatNumber(value: bigint) {
  const sign = value < 0n ? "-" : "";
  const absolute = value < 0n ? -value : value;

  return {
    binary: `${sign}${absolute.toString(2)}`,
    decimal: value.toString(10),
    hex: `${sign}${absolute.toString(16)}`
  };
}

function getBitLength(value: bigint) {
  const absolute = value < 0n ? -value : value;
  return absolute === 0n ? 1 : absolute.toString(2).length;
}

export function BinaryDecimalHexConverterTool() {
  const [binary, setBinary] = useState("101010");
  const [decimal, setDecimal] = useState("42");
  const [hex, setHex] = useState("2a");
  const [activeField, setActiveField] = useState<Field>("decimal");

  const result = useMemo(() => {
    try {
      const parsed = parseValue(
        activeField === "binary" ? binary : activeField === "decimal" ? decimal : hex,
        activeField
      );
      const formatted = formatNumber(parsed);

      return {
        ...formatted,
        bitLength: getBitLength(parsed),
        error: ""
      };
    } catch (error) {
      return {
        binary,
        decimal,
        hex,
        bitLength: 0,
        error: error instanceof Error ? error.message : "Unable to convert value"
      };
    }
  }, [activeField, binary, decimal, hex]);

  return (
    <ToolShell
      title="Binary/Decimal/Hex Converter"
      description="Convert whole numbers across binary, decimal, and hexadecimal formats instantly in your browser, including large integer values."
    >
      <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
        <ToolPanel title="Status" tone={result.error ? "rose" : "green"}>
          <div className="space-y-3">
            <div className="rounded-2xl border border-[#27272a] bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-[#71717a]">Active input</div>
              <div className="mt-2 font-mono text-sm text-[#f5f5f5]">{activeField}</div>
            </div>
            <div className="rounded-2xl border border-[#27272a] bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-[#71717a]">Bit length</div>
              <div className="mt-2 font-mono text-sm text-[#f5f5f5]">{result.error ? "-" : `${result.bitLength} bit${result.bitLength === 1 ? "" : "s"}`}</div>
            </div>
            <p className={`text-sm ${result.error ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
              {result.error || "Values are synced live across all three number systems."}
            </p>
          </div>
        </ToolPanel>

        <div className="grid gap-4 md:grid-cols-3">
          <ToolPanel title="Binary" tone="blue">
            <div className="space-y-3">
              <input
                value={activeField === "binary" ? binary : result.binary}
                onChange={(event) => {
                  setBinary(event.target.value);
                  setActiveField("binary");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
                spellCheck={false}
              />
              <CopyButton value={result.error ? "" : result.binary} label="Copy binary" />
            </div>
          </ToolPanel>

          <ToolPanel title="Decimal" tone="green">
            <div className="space-y-3">
              <input
                value={activeField === "decimal" ? decimal : result.decimal}
                onChange={(event) => {
                  setDecimal(event.target.value);
                  setActiveField("decimal");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
                spellCheck={false}
              />
              <CopyButton value={result.error ? "" : result.decimal} label="Copy decimal" />
            </div>
          </ToolPanel>

          <ToolPanel title="Hex" tone="violet">
            <div className="space-y-3">
              <input
                value={activeField === "hex" ? hex : result.hex}
                onChange={(event) => {
                  setHex(event.target.value);
                  setActiveField("hex");
                }}
                className="w-full rounded-xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none transition focus:border-[#22c55e]"
                spellCheck={false}
              />
              <CopyButton value={result.error ? "" : result.hex} label="Copy hex" />
            </div>
          </ToolPanel>
        </div>
      </div>
    </ToolShell>
  );
}
