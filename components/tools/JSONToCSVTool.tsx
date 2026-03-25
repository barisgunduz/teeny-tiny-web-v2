"use client";

import { useMemo, useRef, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_JSON = `[
  {
    "id": 1,
    "name": "Ada Lovelace",
    "role": "Engineer",
    "active": true
  },
  {
    "id": 2,
    "name": "Grace Hopper",
    "role": "Architect",
    "active": true
  },
  {
    "id": 3,
    "name": "Linus Torvalds",
    "role": "Maintainer",
    "active": false
  }
]`;

type CsvResult = {
  csv: string;
  rows: number;
  columns: number;
};

function toCellString(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return JSON.stringify(value);
}

function escapeCsv(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function convertJsonToCsv(input: string, includeHeaderRow: boolean): CsvResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return { csv: "", rows: 0, columns: 0 };
  }

  const parsed = JSON.parse(trimmed) as unknown;
  const data = Array.isArray(parsed) ? parsed : [parsed];

  if (!data.length) {
    return { csv: "", rows: 0, columns: 0 };
  }

  if (data.every((item) => item && typeof item === "object" && !Array.isArray(item))) {
    const headers: string[] = [];

    data.forEach((item) => {
      Object.keys(item as Record<string, unknown>).forEach((key) => {
        if (!headers.includes(key)) {
          headers.push(key);
        }
      });
    });

    const lines = data.map((item) => {
      const row = item as Record<string, unknown>;
      return headers.map((header) => escapeCsv(toCellString(row[header]))).join(",");
    });

    if (includeHeaderRow) {
      lines.unshift(headers.map(escapeCsv).join(","));
    }

    return {
      csv: lines.join("\n"),
      rows: data.length,
      columns: headers.length
    };
  }

  if (data.every(Array.isArray)) {
    const rows = data as unknown[][];
    const columnCount = Math.max(...rows.map((row) => row.length), 0);
    const lines = rows.map((row) => row.map((cell) => escapeCsv(toCellString(cell))).join(","));

    if (includeHeaderRow && columnCount > 0) {
      lines.unshift(Array.from({ length: columnCount }, (_, index) => escapeCsv(`column_${index + 1}`)).join(","));
    }

    return {
      csv: lines.join("\n"),
      rows: rows.length,
      columns: columnCount
    };
  }

  const lines = data.map((item) => escapeCsv(toCellString(item)));

  if (includeHeaderRow) {
    lines.unshift(escapeCsv("value"));
  }

  return {
    csv: lines.join("\n"),
    rows: data.length,
    columns: 1
  };
}

function getDownloadFilename(uploadedFileName: string | null) {
  if (uploadedFileName) {
    return uploadedFileName.replace(/\.[^.]+$/, "") + ".csv";
  }

  return `ttw-json-to-csv-${new Date().toISOString().slice(0, 10)}.csv`;
}

function downloadCsv(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function JSONToCSVTool() {
  const [input, setInput] = useState(SAMPLE_JSON);
  const [includeHeaderRow, setIncludeHeaderRow] = useState(true);
  const [sourceLabel, setSourceLabel] = useState("Sample JSON loaded");
  const [uploadError, setUploadError] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    try {
      const converted = convertJsonToCsv(input, includeHeaderRow);
      return {
        output: converted.csv,
        error: "",
        stats: {
          rows: converted.rows,
          columns: converted.columns
        }
      };
    } catch (error) {
      return {
        output: "",
        error: error instanceof Error ? error.message : "Invalid JSON",
        stats: {
          rows: 0,
          columns: 0
        }
      };
    }
  }, [includeHeaderRow, input]);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      setInput(text);
      setSourceLabel(`Loaded from ${file.name}`);
      setUploadedFileName(file.name);
      setUploadError("");
    } catch {
      setUploadError("Could not read the selected JSON file.");
    } finally {
      event.target.value = "";
    }
  }

  const combinedError = uploadError || result.error;

  return (
    <ToolShell
      title="JSON to CSV"
      description="Convert JSON arrays into CSV instantly, upload or paste JSON locally, and copy clean output without leaving the page."
    >
      <div className="rounded-2xl border border-[#1b3046] bg-[#0b1018] px-4 py-3 text-sm text-[#bfdbfe]">
        Uploaded JSON files stay in your browser for conversion and are not stored on our servers.
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json,text/json"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Upload JSON
        </button>
        <button
          type="button"
          onClick={() => setIncludeHeaderRow(true)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${includeHeaderRow ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Header row
        </button>
        <button
          type="button"
          onClick={() => setIncludeHeaderRow(false)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${!includeHeaderRow ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          No header
        </button>
        <button
          type="button"
          onClick={() => {
            setInput(SAMPLE_JSON);
            setSourceLabel("Sample JSON loaded");
            setUploadError("");
            setUploadedFileName(null);
          }}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
        <button
          type="button"
          onClick={() => downloadCsv(getDownloadFilename(uploadedFileName), result.output)}
          disabled={!result.output}
          className="rounded-xl border border-[#27272a] bg-[#111113] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download CSV
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input JSON">
          <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-[#27272a] bg-black/10 px-4 py-3 text-xs text-[#8b8b93]">
            <span>{sourceLabel}</span>
            <span>{input ? `${input.split(/\r?\n/).length} line${input.split(/\r?\n/).length === 1 ? "" : "s"}` : "No JSON loaded"}</span>
          </div>
          <CodeEditorTextarea
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setSourceLabel(uploadedFileName ? `Edited from ${uploadedFileName}` : "Edited in browser");
              setUploadError("");
            }}
            error={Boolean(combinedError)}
          />
          {combinedError ? <p className="mt-3 text-sm text-[#fca5a5]">{combinedError}</p> : null}
        </ToolPanel>

        <ToolPanel title="CSV output" tone={combinedError ? "rose" : "green"}>
          <CodeEditorTextarea
            readOnly
            value={result.output}
          />
        </ToolPanel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Status" tone={combinedError ? "rose" : "green"}>
          <p className={`text-sm ${combinedError ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
            {combinedError ? "JSON could not be converted yet." : "JSON parsed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Rows" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.rows}</p>
        </ToolPanel>

        <ToolPanel title="Columns" tone="violet">
          <p className="font-mono text-sm text-[#ddd6fe]">{result.stats.columns}</p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
