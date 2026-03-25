"use client";

import { useMemo, useState } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_SQL = `SELECT u.id, u.name, u.email, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.active = true AND o.created_at >= '2025-01-01'
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC, u.name ASC
LIMIT 25;`;

type FormatMode = "format" | "minify";

const CLAUSE_KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "GROUP BY",
  "HAVING",
  "ORDER BY",
  "LIMIT",
  "OFFSET",
  "INSERT INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE FROM",
  "LEFT JOIN",
  "RIGHT JOIN",
  "INNER JOIN",
  "OUTER JOIN",
  "FULL JOIN",
  "CROSS JOIN",
  "JOIN",
  "ON",
  "UNION",
  "UNION ALL"
] as const;

function minifySql(input: string) {
  let result = "";
  let quote: string | null = null;
  let previousWasSpace = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const previous = input[index - 1];
    const nextTwo = input.slice(index, index + 2);

    if (!quote && nextTwo === "--") {
      while (index < input.length && input[index] !== "\n") {
        index += 1;
      }
      previousWasSpace = true;
      continue;
    }

    if (quote) {
      result += char;

      if (char === quote && previous !== "\\") {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      result += char;
      previousWasSpace = false;
      continue;
    }

    if (/\s/.test(char)) {
      previousWasSpace = true;
      continue;
    }

    if ([",", "(", ")", ";"].includes(char)) {
      result = result.trimEnd();
      result += char;
      previousWasSpace = char === ")";
      continue;
    }

    if (previousWasSpace && result && !/[,(]/.test(result[result.length - 1])) {
      result += " ";
    }

    result += char;
    previousWasSpace = false;
  }

  return result.replace(/\s*([(),;])\s*/g, "$1").replace(/,(?=\S)/g, ", ").trim();
}

function uppercaseKeywords(input: string) {
  return CLAUSE_KEYWORDS
    .slice()
    .sort((left, right) => right.length - left.length)
    .reduce((sql, keyword) => sql.replace(new RegExp(`\\b${keyword.replace(/ /g, "\\s+")}\\b`, "gi"), keyword), input);
}

function formatSql(input: string, mode: FormatMode) {
  const trimmed = input.trim();

  if (!trimmed) {
    return { output: "", error: "", stats: { statements: 0, lines: 0 } };
  }

  try {
    const minified = uppercaseKeywords(minifySql(trimmed));

    if (mode === "minify") {
      return {
        output: minified,
        error: "",
        stats: {
          statements: (minified.match(/;/g) ?? []).length || 1,
          lines: 1
        }
      };
    }

    let formatted = minified;

    CLAUSE_KEYWORDS.forEach((keyword) => {
      const pattern = new RegExp(`\\s*${keyword.replace(/ /g, "\\s+")}\\b`, "g");
      formatted = formatted.replace(pattern, `\n${keyword}`);
    });

    formatted = formatted
      .replace(/^\n+/, "")
      .replace(/\n(LEFT JOIN|RIGHT JOIN|INNER JOIN|OUTER JOIN|FULL JOIN|CROSS JOIN|JOIN)/g, "\n  $1")
      .replace(/\n(ON)/g, "\n    $1")
      .replace(/\n(AND|OR)\b/g, "\n  $1")
      .replace(/SELECT\s+/g, "SELECT\n  ")
      .replace(/,\s*/g, ",\n  ")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/\n  (FROM|WHERE|GROUP BY|HAVING|ORDER BY|LIMIT|OFFSET|UNION|UNION ALL|SET|VALUES)\b/g, "\n$1")
      .trim();

    return {
      output: formatted,
      error: "",
      stats: {
        statements: (minified.match(/;/g) ?? []).length || 1,
        lines: formatted.split("\n").length
      }
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid SQL",
      stats: { statements: 0, lines: 0 }
    };
  }
}

export function SQLFormatterTool() {
  const [input, setInput] = useState(SAMPLE_SQL);
  const [mode, setMode] = useState<FormatMode>("format");

  const result = useMemo(() => formatSql(input, mode), [input, mode]);

  return (
    <ToolShell
      title="SQL Formatter"
      description="Format or minify SQL instantly, normalize common clause layout, and copy clean query output without leaving the page."
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMode("format")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "format" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Format
        </button>
        <button
          type="button"
          onClick={() => setMode("minify")}
          className={`rounded-xl border px-4 py-2 text-sm transition ${mode === "minify" ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
        >
          Minify
        </button>
        <button
          type="button"
          onClick={() => setInput(SAMPLE_SQL)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={result.output} label="Copy output" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Input SQL">
          <CodeEditorTextarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            error={Boolean(result.error)}
          />
          {result.error ? <p className="mt-3 text-sm text-[#fca5a5]">{result.error}</p> : null}
        </ToolPanel>

        <ToolPanel title="Output" tone={result.error ? "rose" : "green"}>
          <CodeEditorTextarea
            readOnly
            value={result.output}
          />
        </ToolPanel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ToolPanel title="Status" tone={result.error ? "rose" : "green"}>
          <p className={`text-sm ${result.error ? "text-[#fecaca]" : "text-[#bbf7d0]"}`}>
            {result.error ? "SQL could not be transformed yet." : "SQL processed successfully in the browser."}
          </p>
        </ToolPanel>

        <ToolPanel title="Statements" tone="blue">
          <p className="font-mono text-sm text-[#bfdbfe]">{result.stats.statements}</p>
        </ToolPanel>

        <ToolPanel title="Output size" tone="violet">
          <p className="text-sm text-[#ddd6fe]">
            {mode === "format"
              ? `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with clause-based formatting.`
              : `${result.stats.lines} line${result.stats.lines === 1 ? "" : "s"} with compressed query output.`}
          </p>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
