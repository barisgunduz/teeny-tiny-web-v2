import Link from "next/link";

import { PromptLibrary } from "@/components/prompts/PromptLibrary";
import { prompts } from "@/lib/data/prompts";

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Prompt Library</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">AI prompts for coding, writing, analysis, and debugging</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8b8b93]">
                Browse reusable prompts, filter by category, open any prompt in a modal, and copy the raw text instantly.
              </p>
            </div>
            <Link
              href="/"
              className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
            >
              Back home
            </Link>
          </div>
        </div>

        <PromptLibrary prompts={prompts} />
      </div>
    </main>
  );
}
