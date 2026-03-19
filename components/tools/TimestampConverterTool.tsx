"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function toDateTimeLocalValue(date: Date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60_000);
  return local.toISOString().slice(0, 16);
}

function fromTimestampInput(value: string) {
  const numeric = Number(value);

  if (!Number.isFinite(numeric)) {
    return null;
  }

  return value.trim().length >= 13 ? new Date(numeric) : new Date(numeric * 1000);
}

export function TimestampConverterTool() {
  const now = new Date();
  const [timestampInput, setTimestampInput] = useState(String(Math.floor(now.getTime() / 1000)));
  const [dateInput, setDateInput] = useState(toDateTimeLocalValue(now));

  const derived = useMemo(() => {
    const date = fromTimestampInput(timestampInput);

    if (!date || Number.isNaN(date.getTime())) {
      return null;
    }

    return {
      utc: date.toUTCString(),
      local: date.toLocaleString(),
      seconds: Math.floor(date.getTime() / 1000),
      milliseconds: date.getTime()
    };
  }, [timestampInput]);

  function syncFromTimestamp(value: string) {
    setTimestampInput(value);
    const date = fromTimestampInput(value);

    if (date && !Number.isNaN(date.getTime())) {
      setDateInput(toDateTimeLocalValue(date));
    }
  }

  function syncFromDate(value: string) {
    setDateInput(value);
    const date = new Date(value);

    if (!Number.isNaN(date.getTime())) {
      setTimestampInput(String(Math.floor(date.getTime() / 1000)));
    }
  }

  function setNow() {
    const current = new Date();
    setTimestampInput(String(Math.floor(current.getTime() / 1000)));
    setDateInput(toDateTimeLocalValue(current));
  }

  return (
    <ToolShell
      title="Timestamp Converter"
      description="Convert Unix timestamps to readable dates and back again, with both UTC and local time rendered live in the browser."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={setNow}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
        >
          Now
        </button>
        <CopyButton value={derived ? String(derived.seconds) : ""} label="Copy seconds" />
        <CopyButton value={derived?.utc ?? ""} label="Copy UTC" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Unix timestamp">
          <input
            value={timestampInput}
            onChange={(event) => syncFromTimestamp(event.target.value)}
            className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            placeholder="1714413600"
          />
          <p className="mt-3 text-sm text-[#71717a]">Use 10 digits for seconds or 13 digits for milliseconds.</p>
        </ToolPanel>

        <ToolPanel title="Human date">
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(event) => syncFromDate(event.target.value)}
            className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
          />
          <p className="mt-3 text-sm text-[#71717a]">This input uses your local timezone.</p>
        </ToolPanel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="UTC" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{derived?.utc ?? "Invalid timestamp"}</p>
        </ToolPanel>
        <ToolPanel title="Local time" tone="green">
          <p className="font-mono text-sm text-[#bbf7d0]">{derived?.local ?? "Invalid timestamp"}</p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
