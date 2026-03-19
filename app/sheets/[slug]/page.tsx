import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheatsheetViewer } from "@/components/cheatsheets/CheatsheetViewer";
import { cheatsheets } from "@/lib/data/cheatsheets";

export function generateStaticParams() {
  return cheatsheets.map((sheet) => ({ slug: sheet.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cheatsheet = cheatsheets.find((sheet) => sheet.slug === params.slug);

  return {
    title: cheatsheet ? cheatsheet.title : "Cheatsheet Not Found",
    description: cheatsheet
      ? `${cheatsheet.title} reference with searchable commands and shortcuts.`
      : undefined
  };
}

export default function CheatsheetPage({ params }: { params: { slug: string } }) {
  const cheatsheet = cheatsheets.find((sheet) => sheet.slug === params.slug);

  if (!cheatsheet) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sheets", href: "/sheets" },
            { label: cheatsheet.title }
          ]}
        />

        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Cheatsheet</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">{cheatsheet.title}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8b8b93]">
                Search within this sheet, jump between sections, and copy any command or shortcut inline.
              </p>
            </div>
            <Link
              href="/sheets"
              className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
            >
              Back to Sheets
            </Link>
          </div>
        </div>

        <CheatsheetViewer cheatsheet={cheatsheet} />
      </div>
    </main>
  );
}
