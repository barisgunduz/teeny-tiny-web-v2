import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "dev-tools",
    name: "Dev Tools",
    slug: "dev-tools",
    icon: "Wrench",
    description: "Useful developer utilities, generators, and web-based tooling.",
    color: "text-sky-500"
  },
  {
    id: "cheatsheets",
    name: "Cheatsheets",
    slug: "cheatsheets",
    icon: "BookOpenText",
    description: "Quick-reference guides for commands, syntax, and workflows.",
    color: "text-emerald-500"
  },
  {
    id: "dummy-data",
    name: "Dummy Data",
    slug: "dummy-data",
    icon: "DatabaseZap",
    description: "Sample data generators for testing interfaces and prototypes.",
    color: "text-amber-500"
  },
  {
    id: "roadmaps",
    name: "Roadmaps",
    slug: "roadmaps",
    icon: "Map",
    description: "Step-by-step learning paths for skills, stacks, and careers.",
    color: "text-violet-500"
  },
  {
    id: "ai-prompts",
    name: "AI Prompts",
    slug: "ai-prompts",
    icon: "Sparkles",
    description: "Prompt templates for writing, coding, research, and automation.",
    color: "text-cyan-500"
  },
  {
    id: "productivity",
    name: "Productivity",
    slug: "productivity",
    icon: "TimerReset",
    description: "Tools and systems for planning, focus, and personal workflow.",
    color: "text-rose-500"
  },
  {
    id: "it-sysadmin",
    name: "IT & Sysadmin",
    slug: "it-sysadmin",
    icon: "ServerCog",
    description: "Resources for infrastructure, networking, and system operations.",
    color: "text-indigo-500"
  },
  {
    id: "design-utils",
    name: "Design Utils",
    slug: "design-utils",
    icon: "Palette",
    description: "Helpers for color, layout, accessibility, and visual design work.",
    color: "text-pink-500"
  }
];

export const categoriesBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category])
) as Record<Category["slug"], Category>;
