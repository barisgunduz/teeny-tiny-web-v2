import type { Category } from "@/types";

type CategorySection = {
  title: string;
  description: string;
  slugs: string[];
};

type CategoryLandingContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: CategorySection[];
};

export const categoryLandingContent: Record<Category["slug"], CategoryLandingContent> = {
  "dev-tools": {
    eyebrow: "Developer Utilities",
    title: "Format, inspect, compare, transform, validate, and generate without leaving the browser",
    description:
      "This is the practical toolbox: formatters, encoders, parsers, generators, validators, security helpers, and comparison tools you reach for during day-to-day development.",
    sections: [
      {
        title: "Formatters & Converters",
        description: "Format markup, transform common developer data formats, and convert payloads without leaving the browser.",
        slugs: [
          "json-formatter",
          "xml-formatter",
          "yaml-formatter",
          "toml-formatter",
          "csv-to-json",
          "json-to-csv",
          "html-beautifier-minifier",
          "css-beautifier-minifier",
          "sql-formatter",
          "markdown-html-preview",
          "query-string-parser-builder",
          "color-converter"
        ]
      },
      {
        title: "Encoding & Decoding",
        description: "Encode, decode, parse, and inspect common web, auth, and text payload formats.",
        slugs: [
          "base64-encoder-decoder",
          "url-encoder",
          "html-entity-encoder-decoder",
          "jwt-decoder",
          "jwt-generator",
          "url-parser",
          "hex-encoder-decoder",
          "binary-decimal-hex-converter",
          "unicode-escape-converter",
          "asn1-pem-viewer",
          "qr-code-generator-reader"
        ]
      },
      {
        title: "Generators",
        description: "Generate IDs, secrets, snippets, payload examples, and development-friendly placeholders.",
        slugs: [
          "uuid-generator",
          "nano-id-generator",
          "password-generator",
          "slug-generator",
          "user-agent-generator",
          "api-key-token-generator",
          "lorem-code-snippet-generator",
          "mock-rest-response-generator",
          "openapi-example-generator"
        ]
      },
      {
        title: "Text & Diff Utilities",
        description: "Compare, normalize, analyze, and clean text before it reaches your editor or app.",
        slugs: [
          "diff-checker",
          "case-converter",
          "whitespace-indent-visualizer",
          "line-sorter-deduper",
          "json-diff-viewer",
          "text-statistics",
          "find-replace-sandbox",
          "markdown-diff-checker",
          "clipboard-inspector"
        ]
      },
      {
        title: "Validation & Inspection",
        description: "Validate common inputs, inspect structures, and check versioning and header details.",
        slugs: [
          "regex-tester",
          "json-schema-validator",
          "email-validator",
          "ip-domain-validator",
          "semver-parser-checker",
          "raw-http-header-parser",
          "jwt-signature-checker",
          "regex-library-cookbook",
          "mime-type-lookup"
        ]
      },
      {
        title: "Time & Web Helpers",
        description: "Work through dates, schedules, cookies, caches, HTTP behavior, and request scenarios.",
        slugs: [
          "timestamp-converter",
          "timezone-converter",
          "cron-parser",
          "http-request-tester-mock-builder",
          "cookie-parser",
          "cache-header-calculator",
          "cors-explainer-test-helper",
          "http-methods-reference",
          "status-header-comparison-tool"
        ]
      },
      {
        title: "Security-Oriented Dev Helpers",
        description: "Handle signatures, auth helpers, policies, and certificate-related development tasks.",
        slugs: [
          "hash-generator",
          "bcrypt-hash-verify",
          "hmac-generator",
          "csr-certificate-viewer",
          "csp-policy-builder",
          "basic-auth-header-generator",
          "oauth-flow-cheat-helper",
          "webhook-signature-tester"
        ]
      }
    ]
  },
  cheatsheets: {
    eyebrow: "Quick Reference Sheets",
    title: "Guides, commands, syntax tables, and workflow notes for the things you should not have to re-google",
    description:
      "Browse terse reference pages for languages, APIs, infrastructure, frontend stacks, testing workflows, security basics, and high-frequency developer shortcuts.",
    sections: [
      {
        title: "Backend & APIs",
        description: "HTTP, REST, GraphQL, request tools, and schema-oriented references.",
        slugs: [
          "http-methods-cheatsheet",
          "http-status-codes-quick-ref",
          "rest-api-design-cheatsheet",
          "graphql-syntax-cheatsheet",
          "curl-cheatsheet",
          "postman-shortcuts-reference",
          "websocket-events-cheatsheet",
          "json-schema-quick-ref"
        ]
      },
      {
        title: "DevOps & Infra",
        description: "Containers, infrastructure, servers, permissions, and terminal-side ops references.",
        slugs: [
          "linux-cli-cheatsheet",
          "bash-cheatsheet",
          "docker-cheatsheet",
          "docker-compose-cheatsheet",
          "kubernetes-cheatsheet",
          "nginx-cheatsheet",
          "apache-config-cheatsheet",
          "terraform-cheatsheet",
          "ansible-cheatsheet",
          "github-actions-cheatsheet",
          "linux-permissions-quick-ref",
          "systemd-cheatsheet",
          "ssh-cheatsheet"
        ]
      },
      {
        title: "Databases",
        description: "Query helpers, engines, indexing notes, and ORM quick references.",
        slugs: [
          "sql-cheatsheet",
          "postgresql-cheatsheet",
          "mysql-cheatsheet",
          "sqlite-cheatsheet",
          "mongodb-cheatsheet",
          "redis-cheatsheet",
          "prisma-cheatsheet",
          "sql-joins-quick-ref",
          "indexing-performance-cheatsheet"
        ]
      },
      {
        title: "Frontend",
        description: "Frontend frameworks, layout systems, browser APIs, and accessibility reminders.",
        slugs: [
          "javascript-cheatsheet",
          "typescript-cheatsheet",
          "css-cheatsheet",
          "react-cheatsheet",
          "nextjs-cheatsheet",
          "tailwind-cheatsheet",
          "html-semantics-cheatsheet",
          "css-flexbox-cheatsheet",
          "css-grid-cheatsheet",
          "accessibility-quick-ref",
          "dom-events-cheatsheet",
          "browser-storage-cheatsheet"
        ]
      },
      {
        title: "Languages",
        description: "General-purpose language quick refs for syntax, structure, and common workflows.",
        slugs: [
          "python-cheatsheet",
          "java-cheatsheet",
          "csharp-cheatsheet",
          "go-cheatsheet",
          "rust-cheatsheet",
          "php-cheatsheet",
          "ruby-cheatsheet",
          "shell-scripting-cheatsheet",
          "nodejs-quick-ref"
        ]
      },
      {
        title: "Testing & Quality",
        description: "Testing frameworks, debugging habits, regex help, and troubleshooting references.",
        slugs: [
          "git-cheatsheet",
          "vim-cheatsheet",
          "jest-cheatsheet",
          "playwright-cheatsheet",
          "cypress-cheatsheet",
          "testing-library-cheatsheet",
          "regex-quick-ref",
          "debugging-workflow-cheatsheet",
          "git-troubleshooting-cheatsheet"
        ]
      },
      {
        title: "Security",
        description: "Auth and app-security quick references for common web and API concerns.",
        slugs: [
          "owasp-top-10-quick-ref",
          "jwt-cheatsheet",
          "oauth-2-cheatsheet",
          "auth-flow-comparison-sheet",
          "csp-cheatsheet",
          "common-security-headers-cheatsheet"
        ]
      },
      {
        title: "AI & Productivity",
        description: "Prompting, markup, diagrams, schedules, keyboarding, and workflow helpers.",
        slugs: [
          "prompt-engineering-cheatsheet",
          "markdown-cheatsheet",
          "mermaid-cheatsheet",
          "cron-cheatsheet",
          "keyboard-shortcuts-sheet",
          "cli-productivity-cheatsheet"
        ]
      }
    ]
  },
  "dummy-data": {
    eyebrow: "Browser-side Seed Data",
    title: "Generate realistic fake data sets for prototypes, tests, demos, and fixtures",
    description:
      "Everything here runs locally in the browser so you can mock interfaces, download payloads, and populate examples without hitting an API.",
    sections: [
      {
        title: "People, Accounts & Commerce",
        description: "Structured data sets for users, companies, addresses, payments, products, and transactional workflows.",
        slugs: [
          "fake-user-generator",
          "fake-company-generator",
          "address-list-generator",
          "phone-number-generator",
          "job-title-generator",
          "random-json-generator",
          "csv-generator",
          "order-data-generator",
          "invoice-generator",
          "transaction-generator",
          "inventory-generator",
          "test-credit-card-numbers"
        ]
      },
      {
        title: "Content & Messaging",
        description: "Placeholder copy, publishing fixtures, conversations, tickets, and support-oriented sample data.",
        slugs: [
          "lorem-ipsum-generator",
          "blog-post-generator",
          "comment-thread-generator",
          "faq-generator",
          "support-ticket-generator",
          "email-thread-generator",
          "event-list-generator"
        ]
      },
      {
        title: "Reference Lists & UI Fixtures",
        description: "Ready-made lists and small structured data sets for dropdowns, filters, and interface states.",
        slugs: [
          "country-list-generator",
          "color-list-generator",
          "device-list-generator"
        ]
      },
      {
        title: "Technical & System Data",
        description: "Generate developer-facing payloads, network values, seed inserts, and environment-style sample data.",
        slugs: [
          "ip-address-generator",
          "sql-seed-generator",
          "api-payload-generator",
          "env-file-generator"
        ]
      }
    ]
  },
  roadmaps: {
    eyebrow: "Learning Paths",
    title: "Step-by-step tracks for engineering, design, data, product, infrastructure, and career growth",
    description:
      "Each roadmap turns a broad topic into an actionable learning path. Some are already fully written, and newer additions currently use placeholder pages until their detailed steps are filled in.",
    sections: [
      {
        title: "Web & App Development",
        description: "Frontend, frameworks, mobile, and API-focused learning tracks.",
        slugs: [
          "frontend-developer-roadmap",
          "fullstack-roadmap",
          "react-roadmap",
          "nextjs-roadmap",
          "vue-roadmap",
          "angular-roadmap",
          "mobile-developer-roadmap",
          "react-native-roadmap",
          "flutter-roadmap",
          "api-developer-roadmap"
        ]
      },
      {
        title: "Backend & Platform",
        description: "Service architecture, backend stacks, databases, and systems design tracks.",
        slugs: [
          "backend-developer-roadmap",
          "nodejs-backend-roadmap",
          "python-backend-roadmap",
          "java-backend-roadmap",
          "dotnet-backend-roadmap",
          "go-backend-roadmap",
          "microservices-roadmap",
          "database-engineer-roadmap",
          "software-architect-roadmap"
        ]
      },
      {
        title: "DevOps, Cloud & Infra",
        description: "Infrastructure, platform, reliability, orchestration, and cloud-oriented tracks.",
        slugs: [
          "devops-roadmap",
          "kubernetes-roadmap",
          "aws-roadmap",
          "azure-roadmap",
          "gcp-roadmap",
          "sre-roadmap",
          "platform-engineer-roadmap",
          "cloud-security-roadmap",
          "networking-engineer-roadmap",
          "linux-administrator-roadmap"
        ]
      },
      {
        title: "Data & AI",
        description: "Data systems, analytics, ML, LLMs, and AI product-building tracks.",
        slugs: [
          "ai-ml-basics-roadmap",
          "data-engineering-roadmap",
          "data-analyst-roadmap",
          "data-scientist-roadmap",
          "machine-learning-engineer-roadmap",
          "mlops-roadmap",
          "llm-engineer-roadmap",
          "prompt-engineer-roadmap",
          "ai-product-builder-roadmap"
        ]
      },
      {
        title: "Security",
        description: "Foundational and specialized security learning paths for modern software teams.",
        slugs: [
          "cybersecurity-roadmap",
          "cybersecurity-beginner-roadmap",
          "web-application-security-roadmap",
          "penetration-testing-roadmap",
          "blue-team-roadmap",
          "soc-analyst-roadmap",
          "security-engineer-roadmap",
          "iam-roadmap"
        ]
      },
      {
        title: "Testing & Quality",
        description: "Roadmaps for QA, automation, performance, and engineering reliability.",
        slugs: [
          "qa-engineer-roadmap",
          "test-automation-roadmap",
          "playwright-testing-roadmap",
          "performance-testing-roadmap",
          "reliability-engineering-roadmap"
        ]
      },
      {
        title: "Design & Product",
        description: "Roadmaps for visual design, UX, systems design, and product work.",
        slugs: [
          "ui-designer-roadmap",
          "ux-designer-roadmap",
          "product-designer-roadmap",
          "design-systems-roadmap",
          "product-manager-roadmap",
          "technical-writer-roadmap"
        ]
      },
      {
        title: "Career & Foundational",
        description: "Foundations, career growth, open source, freelancing, and leadership paths.",
        slugs: [
          "computer-science-fundamentals-roadmap",
          "open-source-contributor-roadmap",
          "freelance-developer-roadmap",
          "indie-hacker-roadmap",
          "startup-cto-roadmap",
          "junior-to-senior-developer-roadmap"
        ]
      }
    ]
  },
  "ai-prompts": {
    eyebrow: "Prompt Library",
    title: "Reusable prompt patterns for coding, writing, analysis, and debugging",
    description:
      "Browse prompt cards, filter by use case, open full text in a modal, and refine rough ideas with the built-in prompt improver.",
    sections: [
      {
        title: "Prompt Builders",
        description: "Create and improve reusable prompting systems.",
        slugs: ["system-prompt-builder", "prompt-improver"]
      },
      {
        title: "Templates & Workflows",
        description: "Prompts for roles, reasoning scaffolds, examples, reviews, and research.",
        slugs: [
          "role-templates",
          "chain-of-thought-template",
          "few-shot-example-builder",
          "summarization-prompt-kit",
          "code-review-prompt",
          "research-brief-generator"
        ]
      }
    ]
  },
  productivity: {
    eyebrow: "Personal Workflow Tools",
    title: "Focus timers, planners, estimators, writing helpers, and lightweight systems for getting work unstuck",
    description:
      "These tools lean toward planning and execution: structure priorities, estimate work, run better meetings, clean up notes, and keep momentum on small tasks.",
    sections: [
      {
        title: "Focus & Planning",
        description: "Lightweight helpers for prioritizing attention, structuring tasks, and moving through the day with less friction.",
        slugs: [
          "pomodoro-timer",
          "focus-list",
          "priority-matrix-tool",
          "task-batching-planner",
          "daily-standup-planner",
          "goal-breakdown-planner"
        ]
      },
      {
        title: "Meetings & Team Coordination",
        description: "Prepare agendas, estimate meeting impact, and turn conversations into clearer next steps.",
        slugs: [
          "meeting-cost-calculator",
          "meeting-agenda-builder",
          "one-on-one-template-builder",
          "retrospective-notes-builder",
          "decision-log-template-generator"
        ]
      },
      {
        title: "Schedules & Time Estimation",
        description: "Estimate effort, reason about recurring schedules, and turn rough plans into time-aware output.",
        slugs: [
          "cron-schedule-builder",
          "reading-time-estimator",
          "time-block-planner",
          "deadline-countdown-calculator",
          "task-time-estimator",
          "capacity-planning-calculator"
        ]
      },
      {
        title: "Notes, Writing & Documentation",
        description: "Generate cleaner docs output, organize rough notes, and turn messy text into usable work artifacts.",
        slugs: [
          "markdown-table-generator",
          "note-cleanup-tool",
          "bullet-list-cleaner",
          "meeting-minutes-generator",
          "status-update-generator",
          "change-log-entry-builder"
        ]
      },
      {
        title: "Reference & Tiny Helpers",
        description: "Quick support tools for regex reminders, naming, and compact text cleanup tasks.",
        slugs: [
          "regex-cheatsheet-quick-ref",
          "habit-streak-tracker",
          "clipboard-note-organizer",
          "simple-decision-journal"
        ]
      }
    ]
  },
  "it-sysadmin": {
    eyebrow: "Infrastructure & Networking",
    title: "Utilities and references for networking, DNS, servers, security, and day-to-day operational debugging",
    description:
      "This section groups together practical infrastructure tools for address planning, DNS work, request debugging, certificates, logs, permissions, and server operations.",
    sections: [
      {
        title: "Addressing & Network Math",
        description: "Core helpers for IP planning, subnet sizing, IPv6 handling, and network boundary math.",
        slugs: [
          "subnet-calculator",
          "cidr-notation-guide",
          "cidr-ip-range-converter",
          "ipv6-expand-compress",
          "wildcard-mask-calculator",
          "vlsm-subnet-splitter",
          "private-public-ip-classifier"
        ]
      },
      {
        title: "DNS & Domain Records",
        description: "Build, validate, and understand practical DNS records used in production environments.",
        slugs: [
          "dns-record-types",
          "dns-record-builder",
          "dns-zone-file-generator",
          "reverse-dns-ptr-helper",
          "spf-record-builder",
          "dkim-record-formatter",
          "dmarc-record-builder"
        ]
      },
      {
        title: "HTTP & Web Infrastructure",
        description: "Inspect requests, headers, caching, cookies, and common web infrastructure behavior.",
        slugs: [
          "curl-command-builder",
          "http-status-codes",
          "raw-http-header-parser",
          "security-headers-checker",
          "cache-control-builder",
          "cors-header-builder",
          "cookie-inspector"
        ]
      },
      {
        title: "SSH, TLS & Certificates",
        description: "Work through SSH setup, PEM and CSR inspection, chains, and OpenSSL helper workflows.",
        slugs: [
          "ssh-key-format-reference",
          "ssh-config-builder",
          "ssh-known-hosts-parser",
          "pem-crt-csr-inspector",
          "certificate-chain-explainer",
          "openssl-command-builder"
        ]
      },
      {
        title: "Logs & Monitoring",
        description: "Parse common operational logs and make recurring troubleshooting inputs easier to inspect.",
        slugs: [
          "log-parser-helper",
          "nginx-log-parser",
          "syslog-parser",
          "linux-cron-builder"
        ]
      },
      {
        title: "Permissions, Services & Server Ops",
        description: "Cover ports, file permissions, unit files, and common Linux administration tasks.",
        slugs: [
          "port-reference-list",
          "file-permission-calculator",
          "chmod-symbolic-numeric-converter",
          "systemd-unit-file-builder"
        ]
      }
    ]
  },
  "design-utils": {
    eyebrow: "Design Utilities",
    title: "Visual generators, accessibility helpers, layout tools, token systems, and presentation utilities for design work",
    description:
      "Design tools live here as their own family, spanning color, typography, layout, effects, vector helpers, systems thinking, accessibility, and polished mockup workflows.",
    sections: [
      {
        title: "Color Tools",
        description: "Generate, inspect, and evaluate palettes, ramps, and color behavior for interfaces and branding.",
        slugs: [
          "color-palette-generator",
          "contrast-checker",
          "accessible-palette-generator",
          "gradient-mesh-generator",
          "duotone-generator",
          "brand-color-extractor",
          "image-to-palette-picker",
          "color-blindness-simulator",
          "opacity-scale-generator"
        ]
      },
      {
        title: "Typography Tools",
        description: "Explore scale, spacing, pairing, specimen, and responsive type decisions.",
        slugs: [
          "typography-scale",
          "font-pairing-explorer",
          "line-height-calculator",
          "letter-spacing-visualizer",
          "type-specimen-builder",
          "responsive-typography-clamp-generator",
          "reading-width-calculator",
          "variable-font-axis-tester",
          "text-shadow-generator"
        ]
      },
      {
        title: "Layout & Spacing",
        description: "Build and preview layout systems across grid, flex, spacing, alignment, and breakpoints.",
        slugs: [
          "border-radius-visualizer",
          "css-grid-builder",
          "flexbox-playground",
          "spacing-scale-generator",
          "container-padding-calculator",
          "aspect-ratio-helper",
          "breakpoint-preview-tool",
          "z-index-scale-planner",
          "layout-alignment-visualizer"
        ]
      },
      {
        title: "Effects & CSS Visuals",
        description: "Generate expressive shadows, overlays, patterns, shapes, and polished CSS effects.",
        slugs: [
          "css-gradient-generator",
          "box-shadow-builder",
          "glassmorphism-generator",
          "css-clippath-maker",
          "neumorphism-generator",
          "skeleton-loader-generator",
          "css-filter-playground",
          "backdrop-blur-generator",
          "noise-grain-background-generator",
          "pattern-background-generator",
          "blob-shape-generator",
          "svg-wave-divider-generator",
          "mask-image-overlay-generator"
        ]
      },
      {
        title: "Shape & Vector Utilities",
        description: "Inspect and construct SVG, icons, paths, curves, masks, and export-friendly vectors.",
        slugs: [
          "svg-path-visualizer",
          "svg-icon-wrapper-generator",
          "polygon-shape-builder",
          "bezier-curve-editor",
          "border-image-mask-builder",
          "favicon-app-icon-previewer",
          "viewbox-helper",
          "svg-optimizer-preview"
        ]
      },
      {
        title: "UI System Helpers",
        description: "Build tokens, component states, variables, and reusable UI system foundations.",
        slugs: [
          "design-token-generator",
          "css-variables-exporter",
          "tailwind-theme-token-helper",
          "component-state-previewer",
          "button-style-generator",
          "card-style-generator",
          "form-theme-builder",
          "dark-light-token-comparer"
        ]
      },
      {
        title: "Accessibility-Oriented Design",
        description: "Check focus, motion, touch targets, forms, and accessible semantic color behavior.",
        slugs: [
          "focus-ring-generator",
          "touch-target-checker",
          "accessible-form-color-checker",
          "motion-safe-animation-helper",
          "contrast-pair-finder",
          "semantic-color-ramp-builder"
        ]
      },
      {
        title: "Mockup & Preview Utilities",
        description: "Frame screenshots, social assets, avatars, and product visuals for presentation.",
        slugs: [
          "browser-frame-preview",
          "device-mock-frame-generator",
          "open-graph-image-previewer",
          "avatar-placeholder-generator",
          "logo-spacing-clearspace-visualizer",
          "app-screenshot-frame-tool"
        ]
      }
    ]
  }
};

