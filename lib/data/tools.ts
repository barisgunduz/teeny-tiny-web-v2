import type { Tool } from "@/types";

export const tools: Tool[] = [
  {
    id: "tool-json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and minify JSON with instant indentation controls.",
    category: "dev-tools",
    tags: ["json", "formatter", "validator", "minify"],
    slug: "json-formatter",
    icon: "Braces",
    isFeatured: true
  },
  {
    id: "tool-base64-encoder-decoder",
    name: "Base64 Encoder/Decoder",
    description: "Encode plain text to Base64 and decode Base64 payloads safely.",
    category: "dev-tools",
    tags: ["base64", "encode", "decode", "text"],
    slug: "base64-encoder-decoder",
    icon: "Binary"
  },
  {
    id: "tool-url-encoder",
    name: "URL Encoder",
    description: "Encode and decode URL components for query strings and web APIs.",
    category: "dev-tools",
    tags: ["url", "encode", "decode", "query"],
    slug: "url-encoder",
    icon: "Link"
  },
  {
    id: "tool-jwt-decoder",
    name: "JWT Decoder",
    description: "Inspect token headers and payload claims without sending data anywhere.",
    category: "dev-tools",
    tags: ["jwt", "token", "auth", "decode"],
    slug: "jwt-decoder",
    icon: "KeyRound",
    isFeatured: true
  },
  {
    id: "tool-regex-tester",
    name: "Regex Tester",
    description: "Test regular expressions against sample text with match highlighting.",
    category: "dev-tools",
    tags: ["regex", "tester", "patterns", "validation"],
    slug: "regex-tester",
    icon: "ScanSearch"
  },
  {
    id: "tool-uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUIDs for fixtures, IDs, and API testing.",
    category: "dev-tools",
    tags: ["uuid", "generator", "id", "random"],
    slug: "uuid-generator",
    icon: "Fingerprint"
  },
  {
    id: "tool-hash-generator",
    name: "Hash Generator",
    description: "Create MD5, SHA-1, SHA-256, and SHA-512 hashes from text input.",
    category: "dev-tools",
    tags: ["hash", "md5", "sha", "checksum"],
    slug: "hash-generator",
    icon: "ShieldCheck"
  },
  {
    id: "tool-color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, and HSL color formats instantly.",
    category: "dev-tools",
    tags: ["color", "hex", "rgb", "hsl"],
    slug: "color-converter",
    icon: "Droplets"
  },
  {
    id: "tool-timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates and back.",
    category: "dev-tools",
    tags: ["timestamp", "unix", "date", "time"],
    slug: "timestamp-converter",
    icon: "Clock3",
    isNew: true
  },
  {
    id: "tool-diff-checker",
    name: "Diff Checker",
    description: "Compare two text blocks side by side to spot added or removed lines.",
    category: "dev-tools",
    tags: ["diff", "compare", "text", "review"],
    slug: "diff-checker",
    icon: "GitCompare"
  },

  {
    id: "tool-cheatsheet-git",
    name: "Git Cheatsheet",
    description: "Fast reference for branching, rebasing, staging, and collaboration commands.",
    category: "cheatsheets",
    tags: ["git", "cheatsheet", "version-control", "cli"],
    slug: "git-cheatsheet",
    icon: "GitBranch",
    isFeatured: true
  },
  {
    id: "tool-cheatsheet-linux-cli",
    name: "Linux CLI Cheatsheet",
    description: "Core Linux terminal commands for navigation, files, permissions, and processes.",
    category: "cheatsheets",
    tags: ["linux", "cli", "terminal", "cheatsheet"],
    slug: "linux-cli-cheatsheet",
    icon: "TerminalSquare",
    isFeatured: true
  },
  {
    id: "tool-cheatsheet-docker",
    name: "Docker Cheatsheet",
    description: "Common Docker image, container, volume, and compose commands in one place.",
    category: "cheatsheets",
    tags: ["docker", "containers", "cheatsheet", "devops"],
    slug: "docker-cheatsheet",
    icon: "Container"
  },
  {
    id: "tool-cheatsheet-vim",
    name: "Vim Cheatsheet",
    description: "Remember movement, editing, search, and visual mode shortcuts quickly.",
    category: "cheatsheets",
    tags: ["vim", "editor", "shortcuts", "cheatsheet"],
    slug: "vim-cheatsheet",
    icon: "FilePenLine"
  },
  {
    id: "tool-cheatsheet-sql",
    name: "SQL Cheatsheet",
    description: "Reference the most-used clauses, joins, filters, and aggregations.",
    category: "cheatsheets",
    tags: ["sql", "database", "queries", "cheatsheet"],
    slug: "sql-cheatsheet",
    icon: "Database"
  },
  {
    id: "tool-cheatsheet-javascript",
    name: "JavaScript Cheatsheet",
    description: "Everyday syntax reminders for arrays, objects, async flows, and functions.",
    category: "cheatsheets",
    tags: ["javascript", "js", "language", "cheatsheet"],
    slug: "javascript-cheatsheet",
    icon: "FileCode2"
  },
  {
    id: "tool-cheatsheet-python",
    name: "Python Cheatsheet",
    description: "Quick Python examples for data types, iteration, functions, and modules.",
    category: "cheatsheets",
    tags: ["python", "language", "cheatsheet", "reference"],
    slug: "python-cheatsheet",
    icon: "Bug"
  },
  {
    id: "tool-cheatsheet-css",
    name: "CSS Cheatsheet",
    description: "Handy CSS property reminders for layout, spacing, animation, and selectors.",
    category: "cheatsheets",
    tags: ["css", "styles", "frontend", "cheatsheet"],
    slug: "css-cheatsheet",
    icon: "Paintbrush2"
  },
  {
    id: "tool-cheatsheet-bash",
    name: "Bash Cheatsheet",
    description: "Shell scripting helpers for variables, loops, pipes, and command substitution.",
    category: "cheatsheets",
    tags: ["bash", "shell", "cli", "cheatsheet"],
    slug: "bash-cheatsheet",
    icon: "Shell"
  },
  {
    id: "tool-cheatsheet-typescript",
    name: "TypeScript Cheatsheet",
    description: "Reference types, generics, narrowing, utility types, and interfaces quickly.",
    category: "cheatsheets",
    tags: ["typescript", "types", "ts", "cheatsheet"],
    slug: "typescript-cheatsheet",
    icon: "FileType2"
  },

  {
    id: "tool-fake-user-generator",
    name: "Fake User Generator",
    description: "Generate realistic fake people with names, emails, addresses, and avatars.",
    category: "dummy-data",
    tags: ["fake", "users", "seed", "mock-data"],
    slug: "fake-user-generator",
    icon: "Users",
    isFeatured: true
  },
  {
    id: "tool-lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description: "Create placeholder paragraphs, sentences, or words for designs and tests.",
    category: "dummy-data",
    tags: ["lorem", "placeholder", "text", "copy"],
    slug: "lorem-ipsum-generator",
    icon: "Text"
  },
  {
    id: "tool-random-json",
    name: "Random JSON Generator",
    description: "Produce nested JSON payloads for prototyping API responses and fixtures.",
    category: "dummy-data",
    tags: ["json", "random", "mock", "api"],
    slug: "random-json-generator",
    icon: "ScrollText"
  },
  {
    id: "tool-csv-generator",
    name: "CSV Generator",
    description: "Build downloadable CSV rows with configurable columns and sample values.",
    category: "dummy-data",
    tags: ["csv", "generator", "tables", "export"],
    slug: "csv-generator",
    icon: "Sheet"
  },
  {
    id: "tool-credit-card-numbers",
    name: "Test Credit Card Numbers",
    description: "Generate payment test numbers for sandbox environments only.",
    category: "dummy-data",
    tags: ["credit-card", "test-data", "payments", "sandbox"],
    slug: "test-credit-card-numbers",
    icon: "CreditCard"
  },
  {
    id: "tool-ip-address-generator",
    name: "IP Address Generator",
    description: "Create random IPv4 and IPv6 addresses for logs, demos, and networking tests.",
    category: "dummy-data",
    tags: ["ip", "ipv4", "ipv6", "network"],
    slug: "ip-address-generator",
    icon: "Globe2"
  },
  {
    id: "tool-color-list",
    name: "Color List Generator",
    description: "Generate arrays of brand colors, swatches, and named palettes for UI mocks.",
    category: "dummy-data",
    tags: ["colors", "palette", "ui", "mock-data"],
    slug: "color-list-generator",
    icon: "SwatchBook"
  },
  {
    id: "tool-country-list",
    name: "Country List Generator",
    description: "Output country names, ISO codes, and regions for dropdowns or test fixtures.",
    category: "dummy-data",
    tags: ["countries", "iso", "dropdown", "fixtures"],
    slug: "country-list-generator",
    icon: "MapPinned"
  },

  {
    id: "tool-frontend-roadmap",
    name: "Frontend Developer Roadmap",
    description: "A guided path through HTML, CSS, JavaScript, frameworks, and deployment.",
    category: "roadmaps",
    tags: ["frontend", "roadmap", "learning", "web"],
    slug: "frontend-developer-roadmap",
    icon: "MonitorSmartphone",
    isFeatured: true
  },
  {
    id: "tool-backend-roadmap",
    name: "Backend Developer Roadmap",
    description: "Learn servers, databases, APIs, queues, caching, and backend architecture.",
    category: "roadmaps",
    tags: ["backend", "roadmap", "apis", "servers"],
    slug: "backend-developer-roadmap",
    icon: "Server"
  },
  {
    id: "tool-devops-roadmap",
    name: "DevOps Roadmap",
    description: "Cover CI/CD, containers, monitoring, IaC, cloud basics, and release workflows.",
    category: "roadmaps",
    tags: ["devops", "roadmap", "ci-cd", "cloud"],
    slug: "devops-roadmap",
    icon: "Workflow"
  },
  {
    id: "tool-fullstack-roadmap",
    name: "Full-stack Roadmap",
    description: "Bridge frontend and backend skills into a practical full-stack progression.",
    category: "roadmaps",
    tags: ["fullstack", "roadmap", "web", "career"],
    slug: "fullstack-roadmap",
    icon: "Layers3"
  },
  {
    id: "tool-aiml-basics-roadmap",
    name: "AI/ML Basics Roadmap",
    description: "Start with math, Python, data wrangling, model concepts, and evaluation basics.",
    category: "roadmaps",
    tags: ["ai", "ml", "roadmap", "basics"],
    slug: "ai-ml-basics-roadmap",
    icon: "BrainCircuit"
  },
  {
    id: "tool-mobile-roadmap",
    name: "Mobile Developer Roadmap",
    description: "Progress through app architecture, native tooling, and cross-platform delivery.",
    category: "roadmaps",
    tags: ["mobile", "ios", "android", "roadmap"],
    slug: "mobile-developer-roadmap",
    icon: "Smartphone"
  },
  {
    id: "tool-cybersecurity-roadmap",
    name: "Cybersecurity Roadmap",
    description: "Move from networking fundamentals to defense, threat modeling, and hardening.",
    category: "roadmaps",
    tags: ["security", "cybersecurity", "roadmap", "ops"],
    slug: "cybersecurity-roadmap",
    icon: "Shield"
  },
  {
    id: "tool-data-engineering-roadmap",
    name: "Data Engineering Roadmap",
    description: "Learn pipelines, warehouses, orchestration, streaming, and data quality systems.",
    category: "roadmaps",
    tags: ["data-engineering", "etl", "roadmap", "analytics"],
    slug: "data-engineering-roadmap",
    icon: "DatabaseBackup"
  },

  {
    id: "tool-system-prompt-builder",
    name: "System Prompt Builder",
    description: "Compose robust system messages with clear role, goals, rules, and output format.",
    category: "ai-prompts",
    tags: ["system-prompt", "llm", "ai", "builder"],
    slug: "system-prompt-builder",
    icon: "Bot",
    isFeatured: true
  },
  {
    id: "tool-prompt-improver",
    name: "Prompt Improver",
    description: "Rewrite vague prompts into clearer, more constrained instructions.",
    category: "ai-prompts",
    tags: ["prompt", "rewrite", "quality", "ai"],
    slug: "prompt-improver",
    icon: "Sparkles"
  },
  {
    id: "tool-role-templates",
    name: "Role Templates",
    description: "Start from proven prompt templates for developer, designer, analyst, and PM roles.",
    category: "ai-prompts",
    tags: ["roles", "templates", "developer", "designer"],
    slug: "role-templates",
    icon: "UserRoundCog"
  },
  {
    id: "tool-chain-of-thought-template",
    name: "Chain of Thought Template",
    description: "Structure reasoning-oriented prompts for complex planning and breakdown tasks.",
    category: "ai-prompts",
    tags: ["reasoning", "template", "planning", "ai"],
    slug: "chain-of-thought-template",
    icon: "Waypoints"
  },
  {
    id: "tool-few-shot-example-builder",
    name: "Few-shot Example Builder",
    description: "Create consistent input-output examples that teach the model your pattern.",
    category: "ai-prompts",
    tags: ["few-shot", "examples", "prompting", "patterns"],
    slug: "few-shot-example-builder",
    icon: "GalleryHorizontalEnd"
  },
  {
    id: "tool-summarization-prompt-kit",
    name: "Summarization Prompt Kit",
    description: "Choose concise, executive, or action-oriented summary prompt presets.",
    category: "ai-prompts",
    tags: ["summary", "prompts", "documents", "writing"],
    slug: "summarization-prompt-kit",
    icon: "AlignLeft"
  },
  {
    id: "tool-code-review-prompt",
    name: "Code Review Prompt",
    description: "Generate a review prompt focused on bugs, regressions, and test coverage.",
    category: "ai-prompts",
    tags: ["code-review", "engineering", "bugs", "tests"],
    slug: "code-review-prompt",
    icon: "SearchCode"
  },
  {
    id: "tool-research-brief-generator",
    name: "Research Brief Generator",
    description: "Turn a topic into a well-scoped research prompt with sources and constraints.",
    category: "ai-prompts",
    tags: ["research", "brief", "analysis", "sources"],
    slug: "research-brief-generator",
    icon: "FileSearch"
  },

  {
    id: "tool-pomodoro-timer",
    name: "Pomodoro Timer",
    description: "Track focused work sessions and breaks with a clean, distraction-free timer.",
    category: "productivity",
    tags: ["pomodoro", "timer", "focus", "time-management"],
    slug: "pomodoro-timer",
    icon: "Timer",
    isFeatured: true
  },
  {
    id: "tool-markdown-table-generator",
    name: "Markdown Table Generator",
    description: "Convert rows and columns into clean markdown tables instantly.",
    category: "productivity",
    tags: ["markdown", "table", "docs", "generator"],
    slug: "markdown-table-generator",
    icon: "Table2"
  },
  {
    id: "tool-cron-expression-builder",
    name: "Cron Expression Builder",
    description: "Create and validate cron schedules with human-readable explanations.",
    category: "productivity",
    tags: ["cron", "scheduler", "automation", "time"],
    slug: "cron-expression-builder",
    icon: "CalendarClock"
  },
  {
    id: "tool-regex-cheatsheet-quick-ref",
    name: "Regex Cheatsheet Quick-ref",
    description: "Browse common regex tokens, groups, assertions, and replacement patterns.",
    category: "productivity",
    tags: ["regex", "reference", "quick-ref", "patterns"],
    slug: "regex-cheatsheet-quick-ref",
    icon: "NotebookTabs"
  },
  {
    id: "tool-meeting-cost-calculator",
    name: "Meeting Cost Calculator",
    description: "Estimate the real cost of meetings from headcount, rates, and duration.",
    category: "productivity",
    tags: ["meeting", "calculator", "cost", "planning"],
    slug: "meeting-cost-calculator",
    icon: "BadgeDollarSign"
  },
  {
    id: "tool-reading-time-estimator",
    name: "Reading Time Estimator",
    description: "Calculate reading time for articles, docs, and newsletters from word count.",
    category: "productivity",
    tags: ["reading", "estimator", "content", "time"],
    slug: "reading-time-estimator",
    icon: "BookMarked"
  },
  {
    id: "tool-focus-list",
    name: "Focus List",
    description: "Keep a tiny prioritized task list with must-do, should-do, and could-do buckets.",
    category: "productivity",
    tags: ["tasks", "focus", "priorities", "planning"],
    slug: "focus-list",
    icon: "ListTodo"
  },
  {
    id: "tool-note-cleanup",
    name: "Note Cleanup Tool",
    description: "Turn messy meeting notes into structured action items and follow-ups.",
    category: "productivity",
    tags: ["notes", "cleanup", "meetings", "organization"],
    slug: "note-cleanup-tool",
    icon: "NotebookPen"
  },

  {
    id: "tool-subnet-calculator",
    name: "Subnet Calculator",
    description: "Calculate subnet masks, usable hosts, ranges, and broadcast addresses.",
    category: "it-sysadmin",
    tags: ["subnet", "networking", "cidr", "calculator"],
    slug: "subnet-calculator",
    icon: "Network",
    isFeatured: true
  },
  {
    id: "tool-port-reference-list",
    name: "Port Reference List",
    description: "Look up common network ports, services, and transport protocols quickly.",
    category: "it-sysadmin",
    tags: ["ports", "tcp", "udp", "reference"],
    slug: "port-reference-list",
    icon: "Cable"
  },
  {
    id: "tool-cidr-notation-guide",
    name: "CIDR Notation Guide",
    description: "Understand CIDR blocks, prefixes, address counts, and subnet sizing.",
    category: "it-sysadmin",
    tags: ["cidr", "networking", "guide", "ip"],
    slug: "cidr-notation-guide",
    icon: "Route"
  },
  {
    id: "tool-curl-command-builder",
    name: "cURL Command Builder",
    description: "Build cURL requests with headers, auth, methods, and JSON payloads.",
    category: "it-sysadmin",
    tags: ["curl", "http", "api", "requests"],
    slug: "curl-command-builder",
    icon: "ArrowLeftRight"
  },
  {
    id: "tool-ssh-key-format-reference",
    name: "SSH Key Format Reference",
    description: "Compare RSA, ED25519, PEM, OpenSSH, and public key formats.",
    category: "it-sysadmin",
    tags: ["ssh", "keys", "security", "reference"],
    slug: "ssh-key-format-reference",
    icon: "KeySquare"
  },
  {
    id: "tool-http-status-codes",
    name: "HTTP Status Codes",
    description: "Browse HTTP status codes with categories, meanings, and typical use cases.",
    category: "it-sysadmin",
    tags: ["http", "status-codes", "web", "reference"],
    slug: "http-status-codes",
    icon: "BadgeInfo"
  },
  {
    id: "tool-dns-record-types",
    name: "DNS Record Types",
    description: "Reference A, AAAA, CNAME, MX, TXT, SRV, and other record types.",
    category: "it-sysadmin",
    tags: ["dns", "records", "networking", "ops"],
    slug: "dns-record-types",
    icon: "GlobeLock"
  },
  {
    id: "tool-log-parser",
    name: "Log Parser Helper",
    description: "Extract common fields from syslog, nginx, and JSON log lines.",
    category: "it-sysadmin",
    tags: ["logs", "parser", "observability", "troubleshooting"],
    slug: "log-parser-helper",
    icon: "Logs"
  },

  {
    id: "tool-css-gradient-generator",
    name: "CSS Gradient Generator",
    description: "Create linear and radial gradients with live CSS output and preview.",
    category: "design-utils",
    tags: ["css", "gradient", "background", "design"],
    slug: "css-gradient-generator",
    icon: "Blend"
  },
  {
    id: "tool-box-shadow-builder",
    name: "Box Shadow Builder",
    description: "Visually tune layered shadows and copy production-ready CSS.",
    category: "design-utils",
    tags: ["shadow", "css", "ui", "builder"],
    slug: "box-shadow-builder",
    icon: "SquareDashedBottomCode"
  },
  {
    id: "tool-border-radius-visualizer",
    name: "Border Radius Visualizer",
    description: "Experiment with corner radius values and preview asymmetrical shapes.",
    category: "design-utils",
    tags: ["border-radius", "shapes", "css", "visualizer"],
    slug: "border-radius-visualizer",
    icon: "Radius"
  },
  {
    id: "tool-color-palette-generator",
    name: "Color Palette Generator",
    description: "Generate harmonious palettes with tints, shades, and accessible pairings.",
    category: "design-utils",
    tags: ["palette", "color", "brand", "accessibility"],
    slug: "color-palette-generator",
    icon: "Palette",
    isFeatured: true
  },
  {
    id: "tool-typography-scale",
    name: "Typography Scale",
    description: "Build modular type scales for headings, body text, and UI labels.",
    category: "design-utils",
    tags: ["typography", "scale", "fonts", "design-system"],
    slug: "typography-scale",
    icon: "Type"
  },
  {
    id: "tool-css-clippath-maker",
    name: "CSS Clip-path Maker",
    description: "Draw simple shapes and export clip-path polygons for custom layouts.",
    category: "design-utils",
    tags: ["clip-path", "css", "shapes", "layout"],
    slug: "css-clippath-maker",
    icon: "ScissorsLineDashed"
  },
  {
    id: "tool-glassmorphism-generator",
    name: "Glassmorphism Generator",
    description: "Create frosted glass cards with blur, opacity, and border tuning.",
    category: "design-utils",
    tags: ["glassmorphism", "css", "effects", "ui"],
    slug: "glassmorphism-generator",
    icon: "PanelsTopLeft"
  },
  {
    id: "tool-contrast-checker",
    name: "Contrast Checker",
    description: "Check WCAG contrast ratios between foreground and background colors.",
    category: "design-utils",
    tags: ["contrast", "wcag", "accessibility", "colors"],
    slug: "contrast-checker",
    icon: "Eye"
  }
];

export const featuredTools = tools.filter((tool) => tool.isFeatured);
