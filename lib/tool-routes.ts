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

export const designRoutes: Record<string, string> = {
  "css-gradient-generator": "/tools/design/gradient-generator",
  "box-shadow-builder": "/tools/design/box-shadow",
  "border-radius-visualizer": "/tools/design/border-radius",
  "color-palette-generator": "/tools/design/color-palette",
  "typography-scale": "/tools/design/type-scale",
  "accessible-palette-generator": "/tools/design/accessible-palette-generator",
  "gradient-mesh-generator": "/tools/design/gradient-mesh-generator",
  "duotone-generator": "/tools/design/duotone-generator",
  "brand-color-extractor": "/tools/design/brand-color-extractor",
  "image-to-palette-picker": "/tools/design/image-to-palette-picker",
  "color-blindness-simulator": "/tools/design/color-blindness-simulator",
  "opacity-scale-generator": "/tools/design/opacity-scale-generator",
  "font-pairing-explorer": "/tools/design/font-pairing-explorer",
  "line-height-calculator": "/tools/design/line-height-calculator",
  "letter-spacing-visualizer": "/tools/design/letter-spacing-visualizer",
  "type-specimen-builder": "/tools/design/type-specimen-builder",
  "responsive-typography-clamp-generator": "/tools/design/responsive-typography-clamp-generator",
  "reading-width-calculator": "/tools/design/reading-width-calculator",
  "variable-font-axis-tester": "/tools/design/variable-font-axis-tester",
  "text-shadow-generator": "/tools/design/text-shadow-generator",
  "css-grid-builder": "/tools/design/css-grid-builder",
  "flexbox-playground": "/tools/design/flexbox-playground",
  "spacing-scale-generator": "/tools/design/spacing-scale-generator",
  "container-padding-calculator": "/tools/design/container-padding-calculator",
  "aspect-ratio-helper": "/tools/design/aspect-ratio-helper",
  "breakpoint-preview-tool": "/tools/design/breakpoint-preview-tool",
  "z-index-scale-planner": "/tools/design/z-index-scale-planner",
  "layout-alignment-visualizer": "/tools/design/layout-alignment-visualizer",
  "neumorphism-generator": "/tools/design/neumorphism-generator",
  "skeleton-loader-generator": "/tools/design/skeleton-loader-generator",
  "css-filter-playground": "/tools/design/css-filter-playground",
  "backdrop-blur-generator": "/tools/design/backdrop-blur-generator",
  "noise-grain-background-generator": "/tools/design/noise-grain-background-generator",
  "pattern-background-generator": "/tools/design/pattern-background-generator",
  "blob-shape-generator": "/tools/design/blob-shape-generator",
  "svg-wave-divider-generator": "/tools/design/svg-wave-divider-generator",
  "mask-image-overlay-generator": "/tools/design/mask-image-overlay-generator",
  "svg-path-visualizer": "/tools/design/svg-path-visualizer",
  "svg-icon-wrapper-generator": "/tools/design/svg-icon-wrapper-generator",
  "polygon-shape-builder": "/tools/design/polygon-shape-builder",
  "bezier-curve-editor": "/tools/design/bezier-curve-editor",
  "border-image-mask-builder": "/tools/design/border-image-mask-builder",
  "favicon-app-icon-previewer": "/tools/design/favicon-app-icon-previewer",
  "viewbox-helper": "/tools/design/viewbox-helper",
  "svg-optimizer-preview": "/tools/design/svg-optimizer-preview",
  "design-token-generator": "/tools/design/design-token-generator",
  "css-variables-exporter": "/tools/design/css-variables-exporter",
  "tailwind-theme-token-helper": "/tools/design/tailwind-theme-token-helper",
  "component-state-previewer": "/tools/design/component-state-previewer",
  "button-style-generator": "/tools/design/button-style-generator",
  "card-style-generator": "/tools/design/card-style-generator",
  "form-theme-builder": "/tools/design/form-theme-builder",
  "dark-light-token-comparer": "/tools/design/dark-light-token-comparer",
  "focus-ring-generator": "/tools/design/focus-ring-generator",
  "touch-target-checker": "/tools/design/touch-target-checker",
  "accessible-form-color-checker": "/tools/design/accessible-form-color-checker",
  "motion-safe-animation-helper": "/tools/design/motion-safe-animation-helper",
  "contrast-pair-finder": "/tools/design/contrast-pair-finder",
  "semantic-color-ramp-builder": "/tools/design/semantic-color-ramp-builder",
  "browser-frame-preview": "/tools/design/browser-frame-preview",
  "device-mock-frame-generator": "/tools/design/device-mock-frame-generator",
  "open-graph-image-previewer": "/tools/design/open-graph-image-previewer",
  "avatar-placeholder-generator": "/tools/design/avatar-placeholder-generator",
  "logo-spacing-clearspace-visualizer": "/tools/design/logo-spacing-clearspace-visualizer",
  "app-screenshot-frame-tool": "/tools/design/app-screenshot-frame-tool",
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

