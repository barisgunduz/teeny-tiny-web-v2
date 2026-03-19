"use client";

import { Check, Copy, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { Prompt } from "@/types";

const categories = ["all", "coding", "writing", "analysis", "system prompts", "debugging"] as const;

function heuristicSuggestions(prompt: string) {
  const suggestions: string[] = [];
  const normalized = prompt.trim();
  const lowered = normalized.toLowerCase();

  if (normalized.length < 120) {
    suggestions.push("Add more task context so the model knows the problem space, constraints, and desired outcome.");
  }

  if (!/(you are|act as|role|behave as)/i.test(lowered)) {
    suggestions.push("Assign an explicit role like reviewer, analyst, tutor, or editor to shape behavior.");
  }

  if (!/(return|output|format|table|json|bullet|section)/i.test(lowered)) {
    suggestions.push("Specify the exact output format so the response structure is predictable.");
  }

  if (!/(for example|example|sample|input:|output:)/i.test(lowered)) {
    suggestions.push("Include one or two examples if you want a consistent tone or pattern.");
  }

  if (!/(must|should|avoid|do not|don't|limit|constraints?)/i.test(lowered)) {
    suggestions.push("Add guardrails or constraints to reduce generic or overly broad answers.");
  }

  if (!/(audience|context|background|goal|objective)/i.test(lowered)) {
    suggestions.push("Describe the audience, background, or goal so the answer can be tailored better.");
  }

  if (!suggestions.length) {
    suggestions.push("This prompt already has strong structure. Consider adding only a concrete example or a stricter output schema if you want even more consistency.");
  }

  return suggestions;
}

export function PromptLibrary({ prompts }: { prompts: Prompt[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("all");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [copied, setCopied] = useState(false);
  const [improverInput, setImproverInput] = useState("");

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const filteredPrompts = useMemo(() => {
    return activeCategory === "all"
      ? prompts
      : prompts.filter((prompt) => prompt.category === activeCategory);
  }, [activeCategory, prompts]);

  const suggestions = useMemo(() => heuristicSuggestions(improverInput), [improverInput]);

  async function copyPrompt() {
    if (!selectedPrompt) {
      return;
    }

    await navigator.clipboard.writeText(selectedPrompt.prompt);
    setCopied(true);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm capitalize transition ${activeCategory === category ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredPrompts.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            onClick={() => setSelectedPrompt(prompt)}
            className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 text-left transition hover:-translate-y-1 hover:border-[#3f3f46]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-[#27272a] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#71717a]">
                {prompt.category}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#f5f5f5]">{prompt.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#8b8b93]">{prompt.description}</p>
          </button>
        ))}
      </section>

      <section className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
        <div className="mb-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Prompt improver</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">Improve a rough prompt with quick heuristics</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <textarea
            value={improverInput}
            onChange={(event) => setImproverInput(event.target.value)}
            placeholder="Paste any prompt here..."
            className="min-h-[220px] rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-4 font-mono text-sm text-[#e4e4e7] outline-none placeholder:text-[#5f5f66] focus:border-[#22c55e]"
            spellCheck={false}
          />
          <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Suggestions</p>
            <div className="mt-4 space-y-3">
              {suggestions.map((suggestion) => (
                <div key={suggestion} className="rounded-2xl border border-[#1f1f23] bg-black/20 p-3 text-sm leading-6 text-[#d4d4d8]">
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedPrompt ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl rounded-3xl border border-[#27272a] bg-[#111113] shadow-[0_32px_100px_rgba(0,0,0,0.7)]">
            <div className="flex items-start justify-between gap-4 border-b border-[#27272a] p-5 sm:p-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">{selectedPrompt.category}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">{selectedPrompt.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8b8b93]">{selectedPrompt.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPrompt(null)}
                className="rounded-xl border border-[#27272a] bg-[#0d0d0f] p-2 text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4 p-5 sm:p-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={copyPrompt}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-3 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4 text-[#22c55e]" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Copied" : "Copy prompt"}</span>
                </button>
              </div>
              <pre className="max-h-[60vh] overflow-auto rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-4 font-mono text-sm leading-7 text-[#bbf7d0]">
                <code>{selectedPrompt.prompt}</code>
              </pre>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
