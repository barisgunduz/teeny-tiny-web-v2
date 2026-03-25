"use client";

import { useMemo, useRef, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_CSV = `id,name,role,active
1,Ada Lovelace,Engineer,true
2,Grace Hopper,Architect,true
3,Linus Torvalds,Maintainer,false`;

type ParsedCsv = {
  headers: string[];
  rows: string[][];
};

function parseCsv(input: string): ParsedCsv {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentValue = "";
  let inQuotes = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const nextChar = input[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentValue += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }

      continue;
    }

    if (char === ',' && !inQuotes) {
      currentRow.push(currentValue);
      currentValue = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      currentRow.push(currentValue);
      const hasContent = currentRow.some((cell) => cell.length > 0);

      if (hasContent) {
        rows.push(currentRow);
      }

      currentRow = [];
      currentValue = "";
      continue;
    }

    currentValue += char;
  }

  if (inQuotes) {
    throw new Error("CSV contains an unclosed quoted field.");
  }

  currentRow.push(currentValue);

  if (currentRow.some((cell) => cell.length > 0)) {
    rows.push(currentRow);
  }

  if (!rows.length) {
    return { headers: [], rows: [] };
  }

  const columnCount = rows[0].length;
  const hasMismatchedRow = rows.some((row) => row.length !== columnCount);

  if (hasMismatchedRow) {
    throw new Error("CSV rows do not all have the same number of columns.");
  }

  return {
    headers: rows[0],
    rows: rows.slice(1)
  };
}

function normalizeHeader(header: string, index: number) {
  const trimmed = header.trim();
  return trimmed || `column_${index + 1}`;
}

function convertCellValue(value: string) {
  const trimmed = value.trim();

  if (trimmed === "") {
    return "";
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (trimmed === "null") {
    return null;
  }

  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }

  return value;
}

function getDownloadFilename(uploadedFileName: string | null) {
  if (uploadedFileName) {
    return uploadedFileName.replace(/\.[^.]+$/, "") + ".json";
  }

  return `ttw-csv-to-json-${new Date().toISOString().slice(0, 10)}.json`;
}

function downloadJson(filename: string, content: string) {
  const blob = new Blob([content], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function CSVToJSONTool() {
  const [input, setInput] = useState(SAMPLE_CSV);
  const [useHeaderRow, setUseHeaderRow] = useState(true);
  const [prettyPrint, setPrettyPrint] = useState(true);
  const [sourceLabel, setSourceLabel] = useState("Sample CSV loaded");
  const [uploadError, setUploadError] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    try {
      const parsed = parseCsv(input);
      const normalizedHeaders = parsed.headers.map(normalizeHeader);
      const data = useHeaderRow
        ? parsed.rows.map((row) => Object.fromEntries(row.map((cell, index) => [normalizedHeaders[index], convertCellValue(cell)])))
        : [parsed.headers, ...parsed.rows].map((row) => row.map(convertCellValue));

      return {
        output: JSON.stringify(data, null, prettyPrint ? 2 : 0),
        error: "",
        stats: {
          rows: useHeaderRow ? parsed.rows.length : parsed.rows.length + (parsed.headers.length ? 1 : 0),
          columns: parsed.headers.length
        }
      };
    } catch (error) {
      return {
        output: "",
        error: error instanceof Error ? error.message : "Invalid CSV",
        stats: {
          rows: 0,
          columns: 0
        }
      };
    }
  }, [input, prettyPrint, useHeaderRow]);

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
      setUploadError("Could not read the selected CSV file.");
    } finally {
      event.target.value = "";
    }
  }

  const combinedError = uploadError || result.error;

  return (
    <ToolShell
      title="CSV to JSON"
      description="Convert CSV rows into structured JSON instantly, upload or paste CSV locally, and copy clean output without leaving the page."
    >
      <div className="rounded-2xl border border-[#1b3046] bg-[#0b1018] px-4 py-3 text-sm text-[#bfdbfe]">
        Uploaded CSV files stay in your browser for conversion and are not stored on our servers.
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,text/csv"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Upload CSV
        </button>
        <button
          type="button"
          onClick={() => setUseHeaderRow(true)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${useHeaderRow ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Header row
        </button>
        <button
          type="button"
          onClick={() => setUseHeaderRow(false)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${!useHeaderRow ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Raw rows
        </button>
        <button
          type="button"
          onClick={() => setPrettyPrint((current) => !current)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          {prettyPrint ? "Pretty JSON" : "Compact JSON"}
        </button>
        <button
          type="button"
          onClick={() => {
            setInput(SAMPLE_CSV);
            setSourceLabel("Sample CSV loaded");
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
          onClick={() => downloadJson(getDownloadFilename(uploadedFileName), result.output)}
          disabled={!result.output}
          className="rounded-xl border border-[#27272a] bg-[#111113] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download JSON
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input CSV">
          <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-[#27272a] bg-black/10 px-4 py-3 text-xs text-[#8b8b93]">
            <span>{sourceLabel}</span>
            <span>{input ? `${input.split(/\r?\n/).length} line${input.split(/\r?\n/).length === 1 ? "" : "s"}` : "No CSV loaded"}</span>
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

        <ToolPanel title="JSON output" tone={combinedError ? "rose" : "green"}>
          <CodeEditorTextarea
            readOnly
            value={result.output}
          />
        </ToolPanel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Status" tone={combinedError ? "rose" : "green"}>
          <p className={`text-sm ${combinedError ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
            {combinedError ? "CSV could not be converted yet." : "CSV parsed successfully in the browser."}
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
