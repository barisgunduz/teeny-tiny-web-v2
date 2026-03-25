"use client";

import { useMemo, useRef } from "react";
import type { TextareaHTMLAttributes } from "react";

type CodeEditorTextareaProps = {
  error?: boolean;
  heightClassName?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export function CodeEditorTextarea({
  error = false,
  heightClassName = "h-[320px]",
  onScroll,
  readOnly,
  value,
  ...props
}: CodeEditorTextareaProps) {
  const gutterRef = useRef<HTMLDivElement>(null);
  const lineCount = useMemo(() => {
    const text = typeof value === "string" ? value : `${value ?? ""}`;
    return Math.max(text.split("\n").length, 1);
  }, [value]);

  return (
    <div className={`flex overflow-hidden rounded-2xl border bg-black/20 ${error ? "border-[#ef4444]" : "border-[#27272a] focus-within:border-[#22c55e]"}`}>
      <div
        ref={gutterRef}
        aria-hidden="true"
        className={`select-none overflow-y-hidden border-r border-white/5 bg-black/25 px-3 py-4 text-right font-mono text-xs leading-6 ${heightClassName} ${error ? "text-[#fca5a5]" : "text-[#71717a]"}`}
      >
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1}>{index + 1}</div>
        ))}
      </div>
      <textarea
        {...props}
        readOnly={readOnly}
        value={value}
        onScroll={(event) => {
          if (gutterRef.current) {
            gutterRef.current.scrollTop = event.currentTarget.scrollTop;
          }

          onScroll?.(event);
        }}
        className={`w-full resize-none overflow-y-auto bg-transparent p-4 font-mono text-sm leading-6 outline-none ${heightClassName} ${readOnly ? "text-[#d4d4d8]" : error ? "text-[#fecaca]" : "text-[#e4e4e7]"}`}
        spellCheck={false}
      />
    </div>
  );
}
