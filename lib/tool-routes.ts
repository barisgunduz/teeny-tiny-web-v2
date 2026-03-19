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
  "ai-ml-basics-roadmap": "/roadmaps/ai-ml-basics",
  "mobile-developer-roadmap": "/roadmaps/mobile-developer",
  "data-engineering-roadmap": "/roadmaps/data-engineering",
  "cybersecurity-roadmap": "/roadmaps/cybersecurity",
  "react-roadmap": "/roadmaps/react",
  "nextjs-roadmap": "/roadmaps/nextjs",
  "vue-roadmap": "/roadmaps/vue",
  "angular-roadmap": "/roadmaps/angular",
  "react-native-roadmap": "/roadmaps/react-native",
  "flutter-roadmap": "/roadmaps/flutter",
  "api-developer-roadmap": "/roadmaps/api-developer",
  "nodejs-backend-roadmap": "/roadmaps/nodejs-backend",
  "python-backend-roadmap": "/roadmaps/python-backend",
  "java-backend-roadmap": "/roadmaps/java-backend",
  "dotnet-backend-roadmap": "/roadmaps/dotnet-backend",
  "go-backend-roadmap": "/roadmaps/go-backend",
  "microservices-roadmap": "/roadmaps/microservices",
  "database-engineer-roadmap": "/roadmaps/database-engineer",
  "software-architect-roadmap": "/roadmaps/software-architect",
  "kubernetes-roadmap": "/roadmaps/kubernetes",
  "aws-roadmap": "/roadmaps/aws",
  "azure-roadmap": "/roadmaps/azure",
  "gcp-roadmap": "/roadmaps/gcp",
  "sre-roadmap": "/roadmaps/sre",
  "platform-engineer-roadmap": "/roadmaps/platform-engineer",
  "cloud-security-roadmap": "/roadmaps/cloud-security",
  "networking-engineer-roadmap": "/roadmaps/networking-engineer",
  "linux-administrator-roadmap": "/roadmaps/linux-administrator",
  "data-analyst-roadmap": "/roadmaps/data-analyst",
  "data-scientist-roadmap": "/roadmaps/data-scientist",
  "machine-learning-engineer-roadmap": "/roadmaps/machine-learning-engineer",
  "mlops-roadmap": "/roadmaps/mlops",
  "llm-engineer-roadmap": "/roadmaps/llm-engineer",
  "prompt-engineer-roadmap": "/roadmaps/prompt-engineer",
  "ai-product-builder-roadmap": "/roadmaps/ai-product-builder",
  "cybersecurity-beginner-roadmap": "/roadmaps/cybersecurity-beginner",
  "web-application-security-roadmap": "/roadmaps/web-application-security",
  "penetration-testing-roadmap": "/roadmaps/penetration-testing",
  "blue-team-roadmap": "/roadmaps/blue-team",
  "soc-analyst-roadmap": "/roadmaps/soc-analyst",
  "security-engineer-roadmap": "/roadmaps/security-engineer",
  "iam-roadmap": "/roadmaps/iam",
  "qa-engineer-roadmap": "/roadmaps/qa-engineer",
  "test-automation-roadmap": "/roadmaps/test-automation",
  "playwright-testing-roadmap": "/roadmaps/playwright-testing",
  "performance-testing-roadmap": "/roadmaps/performance-testing",
  "reliability-engineering-roadmap": "/roadmaps/reliability-engineering",
  "ui-designer-roadmap": "/roadmaps/ui-designer",
  "ux-designer-roadmap": "/roadmaps/ux-designer",
  "product-designer-roadmap": "/roadmaps/product-designer",
  "design-systems-roadmap": "/roadmaps/design-systems",
  "product-manager-roadmap": "/roadmaps/product-manager",
  "technical-writer-roadmap": "/roadmaps/technical-writer",
  "computer-science-fundamentals-roadmap": "/roadmaps/computer-science-fundamentals",
  "open-source-contributor-roadmap": "/roadmaps/open-source-contributor",
  "freelance-developer-roadmap": "/roadmaps/freelance-developer",
  "indie-hacker-roadmap": "/roadmaps/indie-hacker",
  "startup-cto-roadmap": "/roadmaps/startup-cto",
  "junior-to-senior-developer-roadmap": "/roadmaps/junior-to-senior-developer",
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
