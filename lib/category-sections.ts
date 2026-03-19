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
          "http-header-inspector",
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
    title: "Guides, commands, and syntax tables for the stuff you forget once a week",
    description:
      "Browse terse reference pages for shell commands, language syntax, editor motions, container workflows, and common query patterns.",
    sections: [
      {
        title: "Terminal & Ops",
        description: "The reference sheets you keep open while navigating, scripting, or working in containers.",
        slugs: ["linux-cli-cheatsheet", "bash-cheatsheet", "docker-cheatsheet", "vim-cheatsheet"]
      },
      {
        title: "Languages & Queries",
        description: "High-frequency syntax refreshers for writing code and querying data.",
        slugs: ["javascript-cheatsheet", "typescript-cheatsheet", "python-cheatsheet", "sql-cheatsheet"]
      },
      {
        title: "Frontend & Workflow",
        description: "Styling and version-control references for everyday shipping work.",
        slugs: ["css-cheatsheet", "git-cheatsheet"]
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
        title: "People & Commerce",
        description: "Structured data sets for forms, products, payments, and list-heavy interfaces.",
        slugs: ["fake-user-generator", "random-json-generator", "csv-generator", "test-credit-card-numbers"]
      },
      {
        title: "Text & Collections",
        description: "Placeholder text and organized lists for content states and dropdowns.",
        slugs: ["lorem-ipsum-generator", "country-list-generator", "color-list-generator"]
      },
      {
        title: "Network & IDs",
        description: "Generate values commonly needed for logs, fixtures, and system demos.",
        slugs: ["ip-address-generator"]
      }
    ]
  },
  roadmaps: {
    eyebrow: "Learning Paths",
    title: "Step-by-step tracks for web, platform, and AI-focused learning",
    description:
      "Each roadmap breaks a large discipline into clear, sequential steps with difficulty labels and placeholder resources so you can turn a broad topic into a plan.",
    sections: [
      {
        title: "Web Tracks",
        description: "Start here if you want to build interfaces, services, or both.",
        slugs: ["frontend-developer-roadmap", "backend-developer-roadmap", "fullstack-roadmap"]
      },
      {
        title: "Platform & Operations",
        description: "Infrastructure-oriented paths for release pipelines, cloud basics, and security posture.",
        slugs: ["devops-roadmap", "cybersecurity-roadmap"]
      },
      {
        title: "Specialized Paths",
        description: "Broader skill tracks for mobile products, data systems, and applied ML basics.",
        slugs: ["ai-ml-basics-roadmap", "mobile-developer-roadmap", "data-engineering-roadmap"]
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
    title: "Focus timers, estimators, planners, and tiny helpers for getting work unstuck",
    description:
      "These tools lean toward planning and execution: build tables, estimate time, reason about schedules, and keep momentum on small tasks.",
    sections: [
      {
        title: "Focus & Planning",
        description: "Lightweight helpers for prioritizing time, meetings, and day-to-day attention.",
        slugs: ["pomodoro-timer", "meeting-cost-calculator", "focus-list"]
      },
      {
        title: "Schedules & Documentation",
        description: "Generate docs-friendly output and clarify recurring schedules.",
        slugs: ["markdown-table-generator", "cron-expression-builder", "reading-time-estimator"]
      },
      {
        title: "Cleanup & Reference",
        description: "Quick support tools for regex reminders and turning notes into action items.",
        slugs: ["regex-cheatsheet-quick-ref", "note-cleanup-tool"]
      }
    ]
  },
  "it-sysadmin": {
    eyebrow: "Infrastructure & Networking",
    title: "Utilities and references for networking, transport, protocols, and operational debugging",
    description:
      "This section groups the infrastructure-facing tools together so subnet math, HTTP references, request building, and systems references live in one place.",
    sections: [
      {
        title: "Addressing & Network Math",
        description: "Core helpers for IP planning, ranges, and subnet understanding.",
        slugs: ["subnet-calculator", "cidr-notation-guide"]
      },
      {
        title: "Requests & Protocols",
        description: "HTTP-oriented tools for request building and response interpretation.",
        slugs: ["curl-command-builder", "http-status-codes", "port-reference-list"]
      },
      {
        title: "Infra References",
        description: "Reference material for DNS, SSH keys, and operational log workflows.",
        slugs: ["ssh-key-format-reference", "dns-record-types", "log-parser-helper"]
      }
    ]
  },
  "design-utils": {
    eyebrow: "Design Utilities",
    title: "Visual generators for gradients, shadows, palettes, typography, and CSS experiments",
    description:
      "Design tools live here as their own family, with direct access to the interactive generators plus adjacent utilities for accessibility and styling experiments.",
    sections: [
      {
        title: "Style Generators",
        description: "Interactive CSS builders for visual treatments you want to preview before shipping.",
        slugs: ["css-gradient-generator", "box-shadow-builder", "border-radius-visualizer", "glassmorphism-generator"]
      },
      {
        title: "Color & Type Systems",
        description: "Build palettes, modular scales, and contrast-safe UI decisions.",
        slugs: ["color-palette-generator", "typography-scale", "contrast-checker"]
      },
      {
        title: "Experimental CSS",
        description: "Shape- and layout-oriented helpers for less standard CSS work.",
        slugs: ["css-clippath-maker"]
      }
    ]
  }
};
