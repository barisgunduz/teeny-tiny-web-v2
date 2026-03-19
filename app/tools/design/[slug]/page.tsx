import Link from "next/link";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BorderRadiusVisualizerTool } from "@/components/tools/BorderRadiusVisualizerTool";
import { BoxShadowBuilderTool } from "@/components/tools/BoxShadowBuilderTool";
import { ColorPaletteGeneratorTool } from "@/components/tools/ColorPaletteGeneratorTool";
import { GradientGeneratorTool } from "@/components/tools/GradientGeneratorTool";
import { ToolShell } from "@/components/tools/ToolShell";
import { TypographyScaleTool } from "@/components/tools/TypographyScaleTool";
import { tools } from "@/lib/data/tools";
import { designRoutes } from "@/lib/tool-routes";
import type { Tool } from "@/types";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;
const FALLBACK_ICON = LucideIcons.Palette;

const implementedToolComponentMap: Record<string, () => React.ReactElement> = {
  "gradient-generator": GradientGeneratorTool,
  "box-shadow": BoxShadowBuilderTool,
  "border-radius": BorderRadiusVisualizerTool,
  "color-palette": ColorPaletteGeneratorTool,
  "type-scale": TypographyScaleTool
};

const designTools = Object.entries(designRoutes)
  .map(([toolSlug, href]) => {
    const tool = tools.find((entry) => entry.slug === toolSlug && entry.category === "design-utils");

    if (!tool) {
      return null;
    }

    return {
      routeSlug: href.split("/").pop() ?? toolSlug,
      tool
    };
  })
  .filter((entry): entry is { routeSlug: string; tool: Tool } => entry !== null);

function createFallbackTool(tool: Tool) {
  return function FallbackTool() {
    return (
      <ToolShell
        title={`${tool.name} coming soon`}
        description="This design utility is listed in the catalog, but its interactive UI has not been implemented yet."
      >
        <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-5 text-sm leading-6 text-[#8b8b93]">
          The route is live and the page is correctly connected to the shared design catalog. We can build the full interactive tool here next without changing the URL structure.
        </div>
      </ToolShell>
    );
  };
}

const toolComponentMap: Record<string, () => React.ReactElement> = Object.fromEntries(
  designTools.map(({ routeSlug, tool }) => [routeSlug, implementedToolComponentMap[routeSlug] ?? createFallbackTool(tool)])
);

export function generateStaticParams() {
  return designTools.map(({ routeSlug }) => ({ slug: routeSlug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = designTools.find((item) => item.routeSlug === params.slug);

  if (!entry) {
    return {
      title: "Design Tool Not Found"
    };
  }

  return {
    title: entry.tool.name,
    description: entry.tool.description
  };
}

export default function DesignToolPage({ params }: { params: { slug: string } }) {
  const entry = designTools.find((item) => item.routeSlug === params.slug);

  if (!entry) {
    notFound();
  }

  const { tool } = entry;
  const Icon = iconMap[tool.icon] ?? FALLBACK_ICON;
  const ToolComponent = toolComponentMap[entry.routeSlug];

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Design", href: "/design" },
            { label: tool.name }
          ]}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#27272a] bg-black/20 text-[#22d3ee]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Design Utilities</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">{tool.name}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8b8b93]">{tool.description}</p>
            </div>
          </div>
          <Link
            href="/design"
            className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
          >
            Back to Design
          </Link>
        </div>

        <ToolComponent />
      </div>
    </main>
  );
}

