"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({ value, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!value}
      className={`inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#111113] px-3 py-2 text-xs font-medium text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {copied ? <Check className="h-3.5 w-3.5 text-[#22c55e]" /> : <Copy className="h-3.5 w-3.5" />}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}
