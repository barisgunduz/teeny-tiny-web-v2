import Link from "next/link";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Base64EncoderDecoderTool } from "@/components/tools/Base64EncoderDecoderTool";
import { CurlBuilderTool } from "@/components/tools/CurlBuilderTool";
import { CSVToJSONTool } from "@/components/tools/CSVToJSONTool";
import { HashGeneratorTool } from "@/components/tools/HashGeneratorTool";
import { HTTPStatusCodesTool } from "@/components/tools/HTTPStatusCodesTool";
import { JSONFormatterTool } from "@/components/tools/JSONFormatterTool";
import { JSONToCSVTool } from "@/components/tools/JSONToCSVTool";
import { JWTDecoderTool } from "@/components/tools/JWTDecoderTool";
import { PortReferenceTool } from "@/components/tools/PortReferenceTool";
import { RegexTesterTool } from "@/components/tools/RegexTesterTool";
import { SubnetCalculatorTool } from "@/components/tools/SubnetCalculatorTool";
import { TimestampConverterTool } from "@/components/tools/TimestampConverterTool";
import { TOMLFormatterTool } from "@/components/tools/TOMLFormatterTool";
import { ToolShell } from "@/components/tools/ToolShell";
import { URLEncoderDecoderTool } from "@/components/tools/URLEncoderDecoderTool";
import { UUIDGeneratorTool } from "@/components/tools/UUIDGeneratorTool";
import { XMLFormatterTool } from "@/components/tools/XMLFormatterTool";
import { YAMLFormatterTool } from "@/components/tools/YAMLFormatterTool";
import { getCategoryHref } from "@/lib/category-routes";
import { categoriesBySlug } from "@/lib/data/categories";
import { tools } from "@/lib/data/tools";
import type { Tool } from "@/types";

const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;
const FALLBACK_ICON = LucideIcons.SquareTerminal;

const implementedToolComponentMap: Record<string, () => JSX.Element> = {
  "json-formatter": JSONFormatterTool,
  "xml-formatter": XMLFormatterTool,
  "yaml-formatter": YAMLFormatterTool,
  "toml-formatter": TOMLFormatterTool,
  "csv-to-json": CSVToJSONTool,
  "json-to-csv": JSONToCSVTool,
  "base64-encoder-decoder": Base64EncoderDecoderTool,
  "url-encoder": URLEncoderDecoderTool,
  "jwt-decoder": JWTDecoderTool,
  "uuid-generator": UUIDGeneratorTool,
  "timestamp-converter": TimestampConverterTool,
  "regex-tester": RegexTesterTool,
  "hash-generator": HashGeneratorTool,
  "subnet-calculator": SubnetCalculatorTool,
  "http-status-codes": HTTPStatusCodesTool,
  "port-reference-list": PortReferenceTool,
  "curl-command-builder": CurlBuilderTool
};

function createFallbackTool(tool: Tool) {
  return function FallbackTool() {
    return (
      <ToolShell
        title={`${tool.name} coming soon`}
        description="This tool is listed in the catalog, but its interactive browser UI has not been implemented yet."
      >
        <div className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-5 text-sm text-[#8b8b93]">
          The route is ready, and this page is successfully resolving the slug from the shared tool dataset. The interactive implementation for this particular tool is the only missing piece.
        </div>
      </ToolShell>
    );
  };
}

const toolComponentMap: Record<string, () => JSX.Element> = Object.fromEntries(
  tools.map((tool) => [tool.slug, implementedToolComponentMap[tool.slug] ?? createFallbackTool(tool)])
);

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = tools.find((entry) => entry.slug === params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found"
    };
  }

  return {
    title: tool.name,
    description: tool.description
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((entry) => entry.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const category = categoriesBySlug[tool.category];
  const Icon = iconMap[tool.icon] ?? FALLBACK_ICON;
  const ToolComponent = toolComponentMap[tool.slug];

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: category.name, href: getCategoryHref(category.slug) },
            { label: tool.name }
          ]}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#27272a] bg-black/20 text-[#22d3ee]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">{category.name}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">{tool.name}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8b8b93]">{tool.description}</p>
            </div>
          </div>
          <Link
            href={getCategoryHref(category.slug)}
            className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
          >
            Back to {category.name}
          </Link>
        </div>

        <ToolComponent />
      </div>
    </main>
  );
}
