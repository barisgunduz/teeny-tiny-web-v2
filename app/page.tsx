"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

import { getCategoryHref } from "@/lib/category-routes";
import { categories } from "@/lib/data/categories";
import { featuredTools, tools } from "@/lib/data/tools";
import { searchTools } from "@/lib/search";
import { getToolHref } from "@/lib/tool-routes";
import type { Tool } from "@/types";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;
const FALLBACK_ICON = LucideIcons.SquareTerminal;

const accentMap: Record<string, string> = {
  "text-sky-500": "#0ea5e9",
  "text-emerald-500": "#10b981",
  "text-amber-500": "#f59e0b",
  "text-violet-500": "#8b5cf6",
  "text-cyan-500": "#22d3ee",
  "text-rose-500": "#f43f5e",
  "text-indigo-500": "#6366f1",
  "text-pink-500": "#ec4899"
};

function getIcon(name: string) {
  return iconMap[name] ?? FALLBACK_ICON;
}

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);

  useEffect(() => {
    setResults(searchTools(query).slice(0, 6));
  }, [query]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (!isSearchShortcut) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const toolCounts = useMemo(() => {
    return tools.reduce<Record<string, number>>((accumulator, tool) => {
      accumulator[tool.category] = (accumulator[tool.category] ?? 0) + 1;
      return accumulator;
    }, {});
  }, []);

  const featured = useMemo(() => featuredTools.slice(0, 6), []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e4e4e7]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex flex-1 flex-col gap-12 pb-16 pt-10 sm:gap-14 sm:pt-14">
          <div className="space-y-6 text-center animate-in-up" style={{ animationDelay: "0ms" }}>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#71717a] sm:text-sm">
              every dev tool you actually need
            </p>
            <div className="space-y-4">
              <h1 className="font-mono text-4xl lowercase tracking-tight text-[#f5f5f5] sm:text-6xl lg:text-7xl">
                teeny tiny web
              </h1>
              <p className="mx-auto max-w-2xl text-sm text-[#8b8b93] sm:text-base">
                Search across tools, cheatsheets, prompts, generators, and guides from one dark little dashboard.
              </p>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 animate-in-up" style={{ animationDelay: "120ms" }}>
            <label htmlFor="homepage-search" className="sr-only">
              Search tools
            </label>
            <div className="search-shell group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#111113] px-5 py-4 transition-all duration-300 focus-within:border-[#3f3f46] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_40px_rgba(34,211,238,0.08)] sm:px-6 sm:py-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
              <div className="relative flex items-center gap-3 font-mono text-lg text-[#71717a] sm:text-xl">
                <span className="shrink-0 text-[#22d3ee]">&gt;_</span>
                <span className="terminal-cursor h-6 w-[10px] rounded-[2px] bg-[#22d3ee] opacity-0 transition-opacity duration-150 group-focus-within:opacity-100" />
                <input
                  id="homepage-search"
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="search tools, cheatsheets, prompts, roadmaps..."
                  className="w-full bg-transparent text-base text-[#f5f5f5] outline-none placeholder:text-[#5f5f66] sm:text-lg"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-1 text-xs text-[#71717a] sm:text-sm">
              <span>Search by tool name, tag, or description</span>
              <span className="font-mono">Press ⌘K to search anywhere</span>
            </div>

            {query.trim() ? (
              <div className="overflow-hidden rounded-2xl border border-[#27272a] bg-[#111113] animate-in-up" style={{ animationDelay: "180ms" }}>
                {results.length ? (
                  <div className="divide-y divide-[#27272a]">
                    {results.map((tool, index) => {
                      const Icon = getIcon(tool.icon);

                      return (
                        <Link
                          key={tool.id}
                          href={getToolHref(tool)}
                          className="flex items-start gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/5"
                          style={{ animationDelay: `${220 + index * 50}ms` }}
                        >
                          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#27272a] bg-black/20 text-[#a1a1aa]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-medium text-[#f5f5f5]">{tool.name}</p>
                              <span className="rounded-full border border-[#27272a] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#71717a]">
                                {tool.category}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-[#8b8b93]">{tool.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-5 py-8 text-center text-sm text-[#8b8b93]">
                    No tools matched that search yet.
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <section className="space-y-4">
            <div className="flex items-end justify-between gap-4 animate-in-up" style={{ animationDelay: "220ms" }}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#71717a]">Categories</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5] sm:text-3xl">
                  Browse by section, not by guesswork
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {categories.map((category, index) => {
                const Icon = getIcon(category.icon);
                const accent = accentMap[category.color] ?? "#22d3ee";

                return (
                  <Link
                    href={getCategoryHref(category.slug)}
                    key={category.id}
                    className="animate-in-up rounded-2xl border border-[#27272a] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-1"
                    style={
                      {
                        animationDelay: `${280 + index * 70}ms`,
                        borderLeft: `3px solid ${accent}`,
                        boxShadow: `0 0 0 rgba(0,0,0,0)`,
                        "--card-glow": accent
                      } as CSSProperties
                    }
                    data-category-card="true"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#27272a] bg-black/20" style={{ color: accent }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-[#27272a] px-2 py-1 font-mono text-[11px] text-[#71717a]">
                        {toolCounts[category.slug] ?? 0} items
                      </span>
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg font-semibold text-[#f5f5f5]">{category.name}</h3>
                      <p className="text-sm leading-6 text-[#8b8b93]">{category.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="space-y-4">
            <div className="animate-in-up" style={{ animationDelay: "460ms" }}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#71717a]">Featured Tools</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5] sm:text-3xl">
                Start with the sharpest six
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {featured.map((tool, index) => {
                const Icon = getIcon(tool.icon);

                return (
                  <Link
                    href={getToolHref(tool)}
                    key={tool.id}
                    className="animate-in-up flex h-full items-start gap-4 rounded-2xl border border-[#27272a] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3f3f46]"
                    style={{ animationDelay: `${520 + index * 80}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#27272a] bg-black/20 text-[#22d3ee]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-[#f5f5f5]">{tool.name}</h3>
                        <span className="rounded-full border border-[#27272a] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#71717a]">
                          {tool.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#8b8b93]">{tool.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </section>

        <footer className="flex flex-col items-start justify-between gap-3 border-t border-[#27272a] py-6 text-sm text-[#71717a] sm:flex-row sm:items-center">
          <p className="font-mono lowercase text-[#a1a1aa]">teeny tiny web</p>
          <Link href="#" className="transition-colors hover:text-[#f5f5f5]">
            GitHub
          </Link>
        </footer>
      </div>

      <style jsx>{`
        .animate-in-up {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        [data-category-card="true"]:hover {
          box-shadow: 0 18px 50px -24px var(--card-glow);
        }

        .terminal-cursor {
          animation: blink 1s steps(1, end) infinite;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
