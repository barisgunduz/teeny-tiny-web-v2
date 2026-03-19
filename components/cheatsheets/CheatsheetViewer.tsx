"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import type { Cheatsheet } from "@/types";

export function CheatsheetViewer({ cheatsheet }: { cheatsheet: Cheatsheet }) {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return cheatsheet.sections;
    }

    return cheatsheet.sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          return [item.label, item.value, item.description ?? ""]
            .join(" ")
            .toLowerCase()
            .includes(normalized);
        })
      }))
      .filter((section) => section.items.length > 0);
  }, [cheatsheet.sections, query]);

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter this cheatsheet..."
            className="mb-4 w-full rounded-2xl border border-[#27272a] bg-[#0d0d0f] px-4 py-3 text-sm text-[#e4e4e7] outline-none placeholder:text-[#5f5f66] focus:border-[#22c55e]"
          />
          <div className="space-y-2">
            {filteredSections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="block rounded-2xl border border-transparent px-3 py-2 text-sm text-[#a1a1aa] transition hover:border-[#27272a] hover:bg-[#0d0d0f] hover:text-white"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-6">
        {filteredSections.map((section) => {
          const sectionId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <section key={section.title} id={sectionId} className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Section</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">{section.title}</h2>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#27272a]">
                <div className="grid grid-cols-[minmax(0,280px)_minmax(0,1fr)] border-b border-[#27272a] bg-[#0d0d0f] px-4 py-3 text-xs font-mono uppercase tracking-[0.24em] text-[#71717a]">
                  <span>Command / Key</span>
                  <span>Description</span>
                </div>
                {section.items.map((item) => (
                  <div
                    key={`${section.title}-${item.label}-${item.value}`}
                    className="group grid grid-cols-1 gap-3 border-t border-[#1b1b1f] px-4 py-4 first:border-t-0 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-[#f5f5f5]">{item.label}</p>
                        <code className="mt-2 block break-all rounded-xl border border-[#27272a] bg-black/20 px-3 py-2 font-mono text-xs text-[#c4b5fd]">
                          {item.value}
                        </code>
                      </div>
                      <div className="opacity-0 transition group-hover:opacity-100">
                        <CopyButton value={item.value} label="Copy" />
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-[#8b8b93]">{item.description ?? ""}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {!filteredSections.length ? (
          <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-8 text-center text-sm text-[#8b8b93]">
            No matching commands found in this cheatsheet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
