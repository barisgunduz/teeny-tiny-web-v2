import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCategoryHref } from "@/lib/category-routes";
import { categoryLandingContent } from "@/lib/category-sections";
import { categoriesBySlug } from "@/lib/data/categories";
import { tools } from "@/lib/data/tools";
import { getToolHref } from "@/lib/tool-routes";
import type { Category, Tool } from "@/types";

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

function resolveSectionTools(sectionSlugs: string[]) {
  return sectionSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean) as Tool[];
}

export function CategoryLanding({ categorySlug }: { categorySlug: Category["slug"] }) {
  const category = categoriesBySlug[categorySlug];
  const content = categoryLandingContent[categorySlug];
  const allCategoryTools = tools.filter((tool) => tool.category === categorySlug);
  const featured = allCategoryTools.filter((tool) => tool.isFeatured).slice(0, 3);
  const Icon = getIcon(category.icon);
  const accent = accentMap[category.color] ?? "#22d3ee";

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

        <section className="overflow-hidden rounded-3xl border border-[#27272a] bg-[#111113]">
          <div
            className="border-b border-[#27272a] p-5 sm:p-6"
            style={{ background: `radial-gradient(circle at top right, ${accent}20, transparent 38%)` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#27272a] bg-black/20"
                    style={{ color: accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">{content.eyebrow}</p>
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f5f5] sm:text-4xl">{content.title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#8b8b93] sm:text-base">{content.description}</p>
              </div>

              <div className="grid min-w-[220px] gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">Items</p>
                  <p className="mt-2 text-2xl font-semibold text-[#f5f5f5]">{allCategoryTools.length}</p>
                </div>
                <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">Sections</p>
                  <p className="mt-2 text-2xl font-semibold text-[#f5f5f5]">{content.sections.length}</p>
                </div>
                <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#71717a]">Featured</p>
                  <p className="mt-2 text-2xl font-semibold text-[#f5f5f5]">{featured.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 p-5 sm:p-6">
            {content.sections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
              >
                {section.title}
              </a>
            ))}
          </div>
        </section>

        {featured.length ? (
          <section className="space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Featured</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">Good places to start in {category.name.toLowerCase()}</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {featured.map((tool) => {
                const ToolIcon = getIcon(tool.icon);

                return (
                  <Link
                    key={tool.id}
                    href={getToolHref(tool)}
                    className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 transition hover:-translate-y-1 hover:border-[#3f3f46]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#27272a] bg-black/20"
                        style={{ color: accent }}
                      >
                        <ToolIcon className="h-4 w-4" />
                      </div>
                      <span className="rounded-full border border-[#27272a] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#71717a]">
                        featured
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#f5f5f5]">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#8b8b93]">{tool.description}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <div className="space-y-6">
          {content.sections.map((section) => {
            const sectionTools = resolveSectionTools(section.slugs);
            const sectionId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <section key={section.title} id={sectionId} className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#27272a] pb-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Section</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">{section.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8b8b93]">{section.description}</p>
                  </div>
                  <span className="rounded-full border border-[#27272a] px-3 py-2 text-xs font-mono uppercase tracking-[0.2em] text-[#71717a]">
                    {sectionTools.length} items
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {sectionTools.map((tool, index) => {
                    const ToolIcon = getIcon(tool.icon);

                    return (
                      <Link
                        key={tool.id}
                        href={getToolHref(tool)}
                        className="rounded-3xl border border-[#27272a] bg-[#0d0d0f] p-5 transition hover:-translate-y-1 hover:border-[#3f3f46] hover:shadow-[0_18px_48px_-28px_var(--card-glow)]"
                        style={
                          {
                            borderLeft: `3px solid ${accent}`,
                            animationDelay: `${index * 60}ms`,
                            "--card-glow": accent
                          } as CSSProperties
                        }
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#27272a] bg-black/20"
                            style={{ color: accent }}
                          >
                            <ToolIcon className="h-5 w-5" />
                          </div>
                          {tool.isNew ? (
                            <span className="rounded-full border border-[#16341d] bg-[#0b120d] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#86efac]">
                              new
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#f5f5f5]">{tool.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#8b8b93]">{tool.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tool.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full border border-[#27272a] px-2.5 py-1 text-[11px] text-[#71717a]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Explore Next</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#f5f5f5]">Jump to another category</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.values(categoriesBySlug)
                .filter((entry) => entry.slug !== categorySlug)
                .map((entry) => (
                  <Link
                    key={entry.slug}
                    href={getCategoryHref(entry.slug)}
                    className="rounded-full border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
                  >
                    {entry.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
