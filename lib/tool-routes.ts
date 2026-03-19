import type { Tool } from "@/types";

const dummyDataRoutes: Record<string, string> = {
  "fake-user-generator": "/tools/dummy-data/users",
  "lorem-ipsum-generator": "/tools/dummy-data/lorem-ipsum",
  "random-json-generator": "/tools/dummy-data/products",
  "csv-generator": "/tools/dummy-data/products",
  "test-credit-card-numbers": "/tools/dummy-data/users",
  "ip-address-generator": "/tools/dummy-data/ip-addresses",
  "color-list-generator": "/tools/dummy-data/colors",
  "country-list-generator": "/tools/dummy-data/countries"
};

const roadmapRoutes: Record<string, string> = {
  "frontend-developer-roadmap": "/roadmaps/frontend-dev",
  "backend-developer-roadmap": "/roadmaps/backend-dev",
  "devops-roadmap": "/roadmaps/devops",
  "fullstack-roadmap": "/roadmaps/full-stack",
  "ai-ml-basics-roadmap": "/roadmaps/ai-ml-basics"
};

const designRoutes: Record<string, string> = {
  "css-gradient-generator": "/tools/design/gradient-generator",
  "box-shadow-builder": "/tools/design/box-shadow",
  "border-radius-visualizer": "/tools/design/border-radius",
  "color-palette-generator": "/tools/design/color-palette",
  "typography-scale": "/tools/design/type-scale"
};

export function getToolHref(tool: Tool): string {
  if (tool.category === "cheatsheets") {
    return `/sheets/${tool.slug}`;
  }

  if (tool.category === "roadmaps") {
    return roadmapRoutes[tool.slug] ?? `/roadmaps/frontend-dev`;
  }

  if (tool.category === "ai-prompts") {
    return "/prompts";
  }

  if (tool.category === "dummy-data") {
    return dummyDataRoutes[tool.slug] ?? "/tools/dummy-data/users";
  }

  if (tool.category === "design-utils") {
    return designRoutes[tool.slug] ?? "/tools/design/gradient-generator";
  }

  return `/tools/${tool.slug}`;
}
