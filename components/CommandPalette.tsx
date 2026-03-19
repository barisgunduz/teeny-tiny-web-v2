"use client";

import { Command } from "cmdk";
import * as LucideIcons from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";

import { categoriesBySlug } from "@/lib/data/categories";
import { tools } from "@/lib/data/tools";
import { searchTools } from "@/lib/search";
import { getToolHref } from "@/lib/tool-routes";
import type { Tool } from "@/types";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;
const FALLBACK_ICON = LucideIcons.SquareTerminal;
const RECENT_TOOLS_KEY = "teeny-tiny-web.recent-tools";

function getIcon(name: string) {
  return iconMap[name] ?? FALLBACK_ICON;
}

function readRecentTools(): Tool[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(RECENT_TOOLS_KEY);

    if (!stored) {
      return [];
    }

    const slugs = JSON.parse(stored) as string[];

    return slugs
      .map((slug) => tools.find((tool) => tool.slug === slug))
      .filter((tool): tool is Tool => Boolean(tool));
  } catch {
    return [];
  }
}

function writeRecentTool(tool: Tool) {
  if (typeof window === "undefined") {
    return;
  }

  const nextSlugs = [tool.slug, ...readRecentTools().map((item) => item.slug)]
    .filter((slug, index, array) => array.indexOf(slug) === index)
    .slice(0, 5);

  window.localStorage.setItem(RECENT_TOOLS_KEY, JSON.stringify(nextSlugs));
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [recentTools, setRecentTools] = useState<Tool[]>([]);

  useEffect(() => {
    setRecentTools(readRecentTools());
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setRecentTools(readRecentTools());
    }
  }, [open]);

  const filteredTools = useMemo(() => {
    return search.trim() ? searchTools(search).slice(0, 24) : [];
  }, [search]);

  const groupedResults = useMemo(() => {
    const source = search.trim() ? filteredTools : recentTools;

    return source.reduce<Record<string, Tool[]>>((accumulator, tool) => {
      accumulator[tool.category] = [...(accumulator[tool.category] ?? []), tool];
      return accumulator;
    }, {});
  }, [filteredTools, recentTools, search]);

  function handleSelect(tool: Tool) {
    writeRecentTool(tool);
    setRecentTools(readRecentTools());
    setOpen(false);
    router.push(getToolHref(tool));
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      overlayClassName="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[12vh] z-50 w-[min(92vw,820px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#27272a] bg-[#0d0d0f] shadow-[0_32px_120px_rgba(0,0,0,0.75)]"
      className="w-full"
      loop
    >
      <div className="border-b border-[#27272a] bg-[#111113] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3 font-mono">
          <span className="text-[#22c55e]">&gt;_</span>
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search tools, prompts, cheatsheets, roadmaps..."
            className="w-full bg-transparent text-sm text-[#f5f5f5] outline-none caret-[#22c55e] placeholder:text-[#5f5f66] sm:text-base"
          />
        </div>
      </div>

      <Command.List className="max-h-[65vh] overflow-y-auto bg-[#0a0a0a] p-2">
        <Command.Empty className="px-4 py-10 text-center text-sm text-[#8b8b93]">
          No tools found for that search.
        </Command.Empty>

        {!search.trim() && recentTools.length > 0 ? (
          <div className="px-3 pb-2 pt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#71717a]">
            Recent tools
          </div>
        ) : null}

        {Object.entries(groupedResults).map(([categorySlug, categoryTools]) => {
          const category = categoriesBySlug[categorySlug];
          const CategoryIcon = category ? getIcon(category.icon) : FALLBACK_ICON;

          return (
            <Command.Group
              key={categorySlug}
              heading=""
              className="mb-2 overflow-hidden rounded-xl border border-[#19191d] bg-[#111113]"
            >
              <div className="flex items-center gap-2 border-b border-[#1f1f23] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">
                <CategoryIcon className="h-3.5 w-3.5" />
                <span>{category?.name ?? categorySlug}</span>
              </div>

              {categoryTools.map((tool) => {
                const ResultIcon = category ? getIcon(category.icon) : FALLBACK_ICON;

                return (
                  <Command.Item
                    key={tool.id}
                    value={`${tool.name} ${tool.description} ${tool.tags.join(" ")}`}
                    onSelect={() => handleSelect(tool)}
                    className="group flex cursor-pointer items-center gap-3 px-4 py-3 text-left outline-none transition-colors data-[selected=true]:bg-[#17171b]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#27272a] bg-black/20 text-[#a1a1aa] group-data-[selected=true]:text-[#22c55e]">
                      <ResultIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-[#f5f5f5]">
                          {tool.name}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs text-[#8b8b93] sm:text-sm">
                        {tool.description}
                      </p>
                    </div>
                    <span className="hidden rounded-full border border-[#27272a] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#71717a] sm:inline-flex">
                      Enter
                    </span>
                  </Command.Item>
                );
              })}
            </Command.Group>
          );
        })}
      </Command.List>

      <div className="flex items-center justify-between border-t border-[#27272a] bg-[#111113] px-4 py-3 text-[11px] text-[#71717a] sm:px-5">
        <div className="flex items-center gap-3 font-mono uppercase tracking-[0.18em]">
          <span>Arrows to navigate</span>
          <span>Enter to open</span>
        </div>
        <span className="font-mono uppercase tracking-[0.18em]">Esc to close</span>
      </div>
    </Command.Dialog>
  );
}
