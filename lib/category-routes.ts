import type { Category } from "@/types";

const categoryRoutes = {
  "dev-tools": "/dev-tools",
  cheatsheets: "/sheets",
  "dummy-data": "/dummy-data",
  roadmaps: "/roadmaps",
  "ai-prompts": "/prompts",
  productivity: "/productivity",
  "it-sysadmin": "/it",
  "design-utils": "/design"
} as const satisfies Record<string, string>;

export function getCategoryHref(slug: Category["slug"]): string {
  return categoryRoutes[slug as keyof typeof categoryRoutes] ?? "/";
}
