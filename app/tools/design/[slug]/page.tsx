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
import { TypographyScaleTool } from "@/components/tools/TypographyScaleTool";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;
const FALLBACK_ICON = LucideIcons.Palette;

const designTools = [
  {
    slug: "gradient-generator",
    name: "CSS Gradient Generator",
    description: "Create linear or radial gradients with adjustable color stops, presets, and copy-ready CSS.",
    icon: "Blend"
  },
  {
    slug: "box-shadow",
    name: "Box Shadow Builder",
    description: "Tune offsets, blur, spread, opacity, and inset shadows with a live preview.",
    icon: "SquareDashedBottomCode"
  },
  {
    slug: "border-radius",
    name: "Border Radius Visualizer",
    description: "Adjust each corner independently and export clean border-radius CSS values.",
    icon: "Radius"
  },
  {
    slug: "color-palette",
    name: "Color Palette Generator",
    description: "Generate tints, shades, complementary, triadic, and analogous colors from a base hex value.",
    icon: "Palette"
  },
  {
    slug: "type-scale",
    name: "Typography Scale",
    description: "Build a type ramp from a base size and modular ratio with live heading previews.",
    icon: "Type"
  }
] as const;

const componentMap: Record<(typeof designTools)[number]["slug"], () => JSX.Element> = {
  "gradient-generator": GradientGeneratorTool,
  "box-shadow": BoxShadowBuilderTool,
  "border-radius": BorderRadiusVisualizerTool,
  "color-palette": ColorPaletteGeneratorTool,
  "type-scale": TypographyScaleTool
};

export function generateStaticParams() {
  return designTools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = designTools.find((entry) => entry.slug === params.slug);

  return {
    title: tool ? tool.name : "Design Tool Not Found",
    description: tool?.description
  };
}

export default function DesignToolPage({ params }: { params: { slug: string } }) {
  const tool = designTools.find((entry) => entry.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const Icon = iconMap[tool.icon] ?? FALLBACK_ICON;
  const ToolComponent = componentMap[tool.slug];

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
