"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

interface RegexMatchInfo {
  text: string;
  index: number;
  groups: string[];
}

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("(teeny) (tiny)");
  const [flags, setFlags] = useState("gi");
  const [testString, setTestString] = useState("teeny tiny web\nTeeny tiny tools\nvery tiny, very fast");

  const analysis = useMemo(() => {
    try {
      const regex = new RegExp(pattern, flags);
      const highlightRegex = regex.global ? regex : new RegExp(pattern, `${flags}g`);
      const matches = Array.from(testString.matchAll(highlightRegex)).map((match) => ({
        text: match[0],
        index: match.index ?? 0,
        groups: match.slice(1)
      })) as RegexMatchInfo[];

      const segments: Array<{ text: string; highlighted: boolean }> = [];
      let lastIndex = 0;

      matches.forEach((match) => {
        if (match.index > lastIndex) {
          segments.push({ text: testString.slice(lastIndex, match.index), highlighted: false });
        }

        segments.push({ text: match.text, highlighted: true });
        lastIndex = match.index + match.text.length;
      });

      if (lastIndex < testString.length) {
        segments.push({ text: testString.slice(lastIndex), highlighted: false });
      }

      return { regex, matches, segments, error: "" };
    } catch (error) {
      return {
        regex: null,
        matches: [],
        segments: [{ text: testString, highlighted: false }],
        error: error instanceof Error ? error.message : "Invalid regular expression"
      };
    }
  }, [flags, pattern, testString]);

  return (
    <ToolShell
      title="Regex Tester"
      description="Experiment with patterns, flags, and sample text in real time, with match highlighting and captured groups shown instantly."
    >
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <ToolPanel title="Pattern">
          <input
            value={pattern}
            onChange={(event) => setPattern(event.target.value)}
            className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            placeholder="(foo|bar)"
          />
        </ToolPanel>
        <ToolPanel title="Flags">
          <input
            value={flags}
            onChange={(event) => setFlags(event.target.value)}
            className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            placeholder="gi"
          />
        </ToolPanel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel title="Test string">
          <textarea
            value={testString}
            onChange={(event) => setTestString(event.target.value)}
            className="min-h-[280px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
            spellCheck={false}
          />
        </ToolPanel>

        <ToolPanel title="Highlighted matches" tone={analysis.error ? "rose" : "green"}>
          {analysis.error ? (
            <p className="rounded-2xl border border-[#482026] bg-black/20 p-4 text-sm text-[#fecaca]">{analysis.error}</p>
          ) : (
            <div className="min-h-[280px] whitespace-pre-wrap rounded-2xl border border-[#16341d] bg-black/20 p-4 font-mono text-sm leading-7 text-[#d4d4d8]">
              {analysis.segments.map((segment, index) =>
                segment.highlighted ? (
                  <mark key={`${segment.text}-${index}`} className="rounded bg-[#14532d] px-1 py-0.5 text-[#dcfce7]">
                    {segment.text}
                  </mark>
                ) : (
                  <span key={`${segment.text}-${index}`}>{segment.text}</span>
                )
              )}
            </div>
          )}
        </ToolPanel>
      </div>

      <ToolPanel title={`Matches (${analysis.matches.length})`} tone="blue">
        <div className="mb-4 flex justify-end">
          <CopyButton value={analysis.matches.map((match) => `${match.text} @ ${match.index}`).join("\n")} label="Copy matches" />
        </div>
        <div className="grid gap-3">
          {analysis.matches.length ? (
            analysis.matches.map((match, index) => (
              <div key={`${match.text}-${match.index}-${index}`} className="rounded-2xl border border-[#1b3046] bg-black/20 p-4">
                <p className="font-mono text-sm text-[#bfdbfe]">Match {index + 1}: {match.text}</p>
                <p className="mt-2 text-xs text-[#93c5fd]">Index: {match.index}</p>
                {match.groups.length ? (
                  <div className="mt-3 space-y-2">
                    {match.groups.map((group, groupIndex) => (
                      <p key={`${group}-${groupIndex}`} className="font-mono text-xs text-[#cbd5e1]">
                        Group {groupIndex + 1}: {group || "(empty)"}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-sm text-[#8b8b93]">No matches yet.</p>
          )}
        </div>
      </ToolPanel>
    </ToolShell>
  );
}
