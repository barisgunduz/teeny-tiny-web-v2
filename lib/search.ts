import Fuse from "fuse.js";

import { tools } from "@/lib/data/tools";
import type { Tool } from "@/types";

const toolSearch = new Fuse(tools, {
  includeScore: true,
  threshold: 0.35,
  keys: ["name", "description", "tags"]
});

export function searchTools(query: string, categoryFilter?: string): Tool[] {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return categoryFilter
      ? tools.filter((tool) => tool.category === categoryFilter)
      : tools;
  }

  const results = toolSearch.search(normalizedQuery).map((result) => result.item);

  return categoryFilter
    ? results.filter((tool) => tool.category === categoryFilter)
    : results;
}
