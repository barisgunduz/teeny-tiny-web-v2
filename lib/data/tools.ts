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
    id: "tool-xml-formatter",
    name: "XML Formatter",
    description: "Format, indent, and clean XML documents for easier reading and debugging.",
    category: "dev-tools",
    tags: ["xml", "formatter", "markup", "pretty-print"],
    slug: "xml-formatter",
    icon: "FileCode2"
  },
  {
    id: "tool-yaml-formatter",
    name: "YAML Formatter",
    description: "Format YAML content with cleaner indentation for configs and deployment files.",
    category: "dev-tools",
    tags: ["yaml", "formatter", "config", "pretty-print"],
    slug: "yaml-formatter",
    icon: "FileText"
  },
  {
    id: "tool-toml-formatter",
    name: "TOML Formatter",
    description: "Clean up TOML files for package configs, tooling settings, and manifests.",
    category: "dev-tools",
    tags: ["toml", "formatter", "config", "manifest"],
    slug: "toml-formatter",
    icon: "ScrollText"
  },
  {
    id: "tool-csv-to-json",
    name: "CSV to JSON",
    description: "Convert CSV rows into structured JSON arrays for apps, scripts, and APIs.",
    category: "dev-tools",
    tags: ["csv", "json", "converter", "data"],
    slug: "csv-to-json",
    icon: "Table2"
  },
  {
    id: "tool-json-to-csv",
    name: "JSON to CSV",
    description: "Flatten JSON arrays into CSV output for spreadsheets, exports, and reports.",
    category: "dev-tools",
    tags: ["json", "csv", "converter", "export"],
    slug: "json-to-csv",
    icon: "ArrowLeftRight"
  },
  {
    id: "tool-html-beautifier-minifier",
    name: "HTML Beautifier/Minifier",
    description: "Beautify messy HTML or minify markup for production-ready output.",
    category: "dev-tools",
    tags: ["html", "beautifier", "minifier", "markup"],
    slug: "html-beautifier-minifier",
    icon: "Code2"
  },
  {
    id: "tool-css-beautifier-minifier",
    name: "CSS Beautifier/Minifier",
    description: "Format or compress CSS stylesheets for debugging and deployment.",
    category: "dev-tools",
    tags: ["css", "beautifier", "minifier", "styles"],
    slug: "css-beautifier-minifier",
    icon: "Paintbrush2"
  },
  {
    id: "tool-sql-formatter",
    name: "SQL Formatter",
    description: "Format SQL queries for readability with clearer clauses, joins, and indentation.",
    category: "dev-tools",
    tags: ["sql", "formatter", "queries", "database"],
    slug: "sql-formatter",
    icon: "Database"
  },
  {
    id: "tool-markdown-html-preview",
    name: "Markdown to HTML Preview",
    description: "Preview rendered HTML output from Markdown while keeping the source nearby.",
    category: "dev-tools",
    tags: ["markdown", "html", "preview", "converter"],
    slug: "markdown-html-preview",
    icon: "NotebookPen"
  },
  {
    id: "tool-query-string-parser-builder",
    name: "Query String Parser/Builder",
    description: "Parse URL parameters into key-value pairs and rebuild query strings quickly.",
    category: "dev-tools",
    tags: ["query-string", "url", "parser", "builder"],
    slug: "query-string-parser-builder",
    icon: "Link"
  },
  {
    id: "tool-html-entity-encoder-decoder",
    name: "HTML Entity Encoder/Decoder",
    description: "Encode special characters into HTML entities and decode them back into readable text.",
    category: "dev-tools",
    tags: ["html", "entities", "encode", "decode"],
    slug: "html-entity-encoder-decoder",
    icon: "TextQuote"
  },
  {
    id: "tool-jwt-generator",
    name: "JWT Generator",
    description: "Generate JWT header and payload structures for local testing and auth workflows.",
    category: "dev-tools",
    tags: ["jwt", "generator", "token", "auth"],
    slug: "jwt-generator",
    icon: "KeyRound"
  },
  {
    id: "tool-url-parser",
    name: "URL Parser",
    description: "Break URLs into protocol, host, path, query, and fragment pieces instantly.",
    category: "dev-tools",
    tags: ["url", "parser", "query", "web"],
    slug: "url-parser",
    icon: "Globe2"
  },
  {
    id: "tool-hex-encoder-decoder",
    name: "Hex Encoder/Decoder",
    description: "Convert plain text to hexadecimal output and decode hex strings back to text.",
    category: "dev-tools",
    tags: ["hex", "encode", "decode", "text"],
    slug: "hex-encoder-decoder",
    icon: "Binary"
  },
  {
    id: "tool-binary-decimal-hex-converter",
    name: "Binary/Decimal/Hex Converter",
    description: "Convert numbers across binary, decimal, and hexadecimal representations.",
    category: "dev-tools",
    tags: ["binary", "decimal", "hex", "converter"],
    slug: "binary-decimal-hex-converter",
    icon: "Calculator"
  },
  {
    id: "tool-unicode-escape-converter",
    name: "Unicode Escape Converter",
    description: "Translate readable characters into unicode escape sequences and back again.",
    category: "dev-tools",
    tags: ["unicode", "escape", "converter", "text"],
    slug: "unicode-escape-converter",
    icon: "Languages"
  },
  {
    id: "tool-asn1-pem-viewer",
    name: "ASN.1 / PEM Viewer",
    description: "Inspect PEM blocks and ASN.1-like certificate data structures locally.",
    category: "dev-tools",
    tags: ["asn1", "pem", "certificate", "viewer"],
    slug: "asn1-pem-viewer",
    icon: "FileKey2"
  },
  {
    id: "tool-qr-code-generator-reader",
    name: "QR Code Generator/Reader",
    description: "Generate QR content for links and text, and inspect encoded QR values.",
    category: "dev-tools",
    tags: ["qr", "generator", "reader", "encode"],
    slug: "qr-code-generator-reader",
    icon: "QrCode"
  },
  {
    id: "tool-nano-id-generator",
    name: "Nano ID Generator",
    description: "Generate short collision-resistant IDs for apps, records, and UI fixtures.",
    category: "dev-tools",
    tags: ["nanoid", "id", "generator", "random"],
    slug: "nano-id-generator",
    icon: "Fingerprint"
  },
  {
    id: "tool-password-generator",
    name: "Password Generator",
    description: "Generate secure random passwords with configurable length and character sets.",
    category: "dev-tools",
    tags: ["password", "generator", "security", "random"],
    slug: "password-generator",
    icon: "LockKeyhole"
  },
  {
    id: "tool-slug-generator",
    name: "Slug Generator",
    description: "Turn titles and phrases into URL-safe slugs for routes, docs, and CMS entries.",
    category: "dev-tools",
    tags: ["slug", "generator", "url", "text"],
    slug: "slug-generator",
    icon: "WholeWord"
  },
  {
    id: "tool-user-agent-generator",
    name: "User Agent Generator",
    description: "Generate sample browser and device user agent strings for testing flows.",
    category: "dev-tools",
    tags: ["user-agent", "generator", "browser", "testing"],
    slug: "user-agent-generator",
    icon: "MonitorSmartphone"
  },
  {
    id: "tool-api-key-token-generator",
    name: "API Key/Token Generator",
    description: "Create random token-like strings for local development, demos, and placeholders.",
    category: "dev-tools",
    tags: ["api-key", "token", "generator", "auth"],
    slug: "api-key-token-generator",
    icon: "KeySquare"
  },
  {
    id: "tool-lorem-code-snippet-generator",
    name: "Lorem Code Snippet Generator",
    description: "Generate fake code blocks for UI mocks, demos, and placeholder developer content.",
    category: "dev-tools",
    tags: ["code", "snippet", "generator", "placeholder"],
    slug: "lorem-code-snippet-generator",
    icon: "FileCode2"
  },
  {
    id: "tool-mock-rest-response-generator",
    name: "Mock REST Response Generator",
    description: "Create fake REST-style payloads for demos, mocks, and frontend development.",
    category: "dev-tools",
    tags: ["rest", "mock", "response", "api"],
    slug: "mock-rest-response-generator",
    icon: "Waypoints"
  },
  {
    id: "tool-openapi-example-generator",
    name: "OpenAPI Example Generator",
    description: "Generate example request and response structures inspired by OpenAPI schemas.",
    category: "dev-tools",
    tags: ["openapi", "swagger", "example", "api"],
    slug: "openapi-example-generator",
    icon: "FileJson2"
  },
  {
    id: "tool-case-converter",
    name: "Case Converter",
    description: "Convert strings between camelCase, snake_case, kebab-case, and other common styles.",
    category: "dev-tools",
    tags: ["case", "converter", "text", "naming"],
    slug: "case-converter",
    icon: "CaseSensitive"
  },
  {
    id: "tool-whitespace-indent-visualizer",
    name: "Whitespace/Indent Visualizer",
    description: "Reveal spaces, tabs, and indentation levels in text to debug formatting issues.",
    category: "dev-tools",
    tags: ["whitespace", "indentation", "visualizer", "text"],
    slug: "whitespace-indent-visualizer",
    icon: "Pilcrow"
  },
  {
    id: "tool-line-sorter-deduper",
    name: "Line Sorter/Deduper",
    description: "Sort lines alphabetically and remove duplicates from pasted text blocks.",
    category: "dev-tools",
    tags: ["lines", "sort", "dedupe", "text"],
    slug: "line-sorter-deduper",
    icon: "ListOrdered"
  },
  {
    id: "tool-json-diff-viewer",
    name: "JSON Diff Viewer",
    description: "Compare two JSON objects and inspect structural changes more clearly.",
    category: "dev-tools",
    tags: ["json", "diff", "compare", "viewer"],
    slug: "json-diff-viewer",
    icon: "GitCompareArrows"
  },
  {
    id: "tool-text-statistics",
    name: "Text Statistics",
    description: "Measure characters, words, lines, reading estimates, and content density quickly.",
    category: "dev-tools",
    tags: ["text", "statistics", "words", "analysis"],
    slug: "text-statistics",
    icon: "ChartColumn"
  },
  {
    id: "tool-find-replace-sandbox",
    name: "Find/Replace Sandbox",
    description: "Experiment with find and replace operations on text before applying them elsewhere.",
    category: "dev-tools",
    tags: ["find", "replace", "sandbox", "text"],
    slug: "find-replace-sandbox",
    icon: "Replace"
  },
  {
    id: "tool-markdown-diff-checker",
    name: "Markdown Diff Checker",
    description: "Compare markdown content revisions while keeping structural syntax visible.",
    category: "dev-tools",
    tags: ["markdown", "diff", "compare", "docs"],
    slug: "markdown-diff-checker",
    icon: "NotebookTabs"
  },
  {
    id: "tool-clipboard-inspector",
    name: "Clipboard Inspector",
    description: "Inspect and clean copied text content before pasting it into apps or editors.",
    category: "dev-tools",
    tags: ["clipboard", "inspector", "text", "cleanup"],
    slug: "clipboard-inspector",
    icon: "ClipboardSearch"
  },
  {
    id: "tool-json-schema-validator",
    name: "JSON Schema Validator",
    description: "Validate JSON payloads against schema-like structures during development.",
    category: "dev-tools",
    tags: ["json-schema", "validator", "json", "api"],
    slug: "json-schema-validator",
    icon: "BadgeCheck"
  },
  {
    id: "tool-email-validator",
    name: "Email Validator",
    description: "Check email formats quickly for forms, tests, and validation rules.",
    category: "dev-tools",
    tags: ["email", "validator", "forms", "input"],
    slug: "email-validator",
    icon: "MailCheck"
  },
  {
    id: "tool-ip-domain-validator",
    name: "IP/Domain Validator",
    description: "Validate IP addresses and domain strings for networking and app workflows.",
    category: "dev-tools",
    tags: ["ip", "domain", "validator", "network"],
    slug: "ip-domain-validator",
    icon: "GlobeLock"
  },
  {
    id: "tool-semver-parser-checker",
    name: "SemVer Parser/Checker",
    description: "Parse semantic versions and compare ranges for releases and package workflows.",
    category: "dev-tools",
    tags: ["semver", "version", "parser", "packages"],
    slug: "semver-parser-checker",
    icon: "GitCommitHorizontal"
  },
  {
    id: "tool-http-header-inspector",
    name: "HTTP Header Inspector",
    description: "Inspect, parse, and organize raw HTTP headers into a readable structure.",
    category: "dev-tools",
    tags: ["http", "headers", "inspector", "web"],
    slug: "http-header-inspector",
    icon: "PanelTop"
  },
  {
    id: "tool-jwt-signature-checker",
    name: "JWT Signature Checker",
    description: "Inspect JWT signature segments and validate signing assumptions locally.",
    category: "dev-tools",
    tags: ["jwt", "signature", "checker", "auth"],
    slug: "jwt-signature-checker",
    icon: "ShieldCheck"
  },
  {
    id: "tool-regex-library-cookbook",
    name: "Regex Library/Cookbook",
    description: "Browse common regex patterns, snippets, and matching recipes in one place.",
    category: "dev-tools",
    tags: ["regex", "library", "cookbook", "patterns"],
    slug: "regex-library-cookbook",
    icon: "BookMarked"
  },
  {
    id: "tool-mime-type-lookup",
    name: "MIME Type Lookup",
    description: "Look up common MIME types and file extension mappings for web development.",
    category: "dev-tools",
    tags: ["mime", "content-type", "lookup", "web"],
    slug: "mime-type-lookup",
    icon: "FileType2"
  },
  {
    id: "tool-timezone-converter",
    name: "Timezone Converter",
    description: "Convert date and time values across timezones for teams and global workflows.",
    category: "dev-tools",
    tags: ["timezone", "time", "converter", "date"],
    slug: "timezone-converter",
    icon: "Globe"
  },
  {
    id: "tool-cron-parser",
    name: "Cron Parser",
    description: "Translate cron expressions into readable schedule summaries and field breakdowns.",
    category: "dev-tools",
    tags: ["cron", "parser", "schedule", "automation"],
    slug: "cron-parser",
    icon: "CalendarClock"
  },
  {
    id: "tool-http-request-tester-mock-builder",
    name: "HTTP Request Tester Mock Builder",
    description: "Mock HTTP requests and response setups for frontend demos and API planning.",
    category: "dev-tools",
    tags: ["http", "request", "mock", "api"],
    slug: "http-request-tester-mock-builder",
    icon: "SendHorizonal"
  },
  {
    id: "tool-cookie-parser",
    name: "Cookie Parser",
    description: "Parse raw cookie strings into structured key-value fields for debugging.",
    category: "dev-tools",
    tags: ["cookie", "parser", "headers", "web"],
    slug: "cookie-parser",
    icon: "Cookie"
  },
  {
    id: "tool-cache-header-calculator",
    name: "Cache Header Calculator",
    description: "Reason about cache-control values and expiry timing for HTTP responses.",
    category: "dev-tools",
    tags: ["cache", "headers", "http", "performance"],
    slug: "cache-header-calculator",
    icon: "Gauge"
  },
  {
    id: "tool-cors-explainer-test-helper",
    name: "CORS Explainer/Test Helper",
    description: "Understand common CORS scenarios and inspect request/response header setups.",
    category: "dev-tools",
    tags: ["cors", "headers", "http", "debugging"],
    slug: "cors-explainer-test-helper",
    icon: "ShieldEllipsis"
  },
  {
    id: "tool-http-methods-reference",
    name: "HTTP Methods Reference",
    description: "Review HTTP verbs, semantics, and common usage patterns in one quick reference.",
    category: "dev-tools",
    tags: ["http", "methods", "reference", "api"],
    slug: "http-methods-reference",
    icon: "BookOpenText"
  },
  {
    id: "tool-status-header-comparison-tool",
    name: "Status/Header Comparison Tool",
    description: "Compare HTTP status and header combinations across response scenarios.",
    category: "dev-tools",
    tags: ["http", "status", "headers", "compare"],
    slug: "status-header-comparison-tool",
    icon: "SplitSquareVertical"
  },
  {
    id: "tool-bcrypt-hash-verify",
    name: "bcrypt Hash/Verify",
    description: "Generate bcrypt hashes and verify password strings during local development.",
    category: "dev-tools",
    tags: ["bcrypt", "hash", "verify", "security"],
    slug: "bcrypt-hash-verify",
    icon: "ShieldEllipsis"
  },
  {
    id: "tool-hmac-generator",
    name: "HMAC Generator",
    description: "Create keyed HMAC signatures for request signing and webhook validation flows.",
    category: "dev-tools",
    tags: ["hmac", "signature", "security", "hash"],
    slug: "hmac-generator",
    icon: "ShieldCheck"
  },
  {
    id: "tool-csr-certificate-viewer",
    name: "CSR / Certificate Viewer",
    description: "Inspect certificate requests and certificate-like metadata for local debugging.",
    category: "dev-tools",
    tags: ["csr", "certificate", "viewer", "security"],
    slug: "csr-certificate-viewer",
    icon: "FileKey2"
  },
  {
    id: "tool-csp-policy-builder",
    name: "CSP Policy Builder",
    description: "Draft content security policy directives for frontend and platform hardening.",
    category: "dev-tools",
    tags: ["csp", "security", "headers", "policy"],
    slug: "csp-policy-builder",
    icon: "Shield"
  },
  {
    id: "tool-basic-auth-header-generator",
    name: "Basic Auth Header Generator",
    description: "Generate basic authorization headers from usernames and passwords for testing.",
    category: "dev-tools",
    tags: ["basic-auth", "headers", "auth", "http"],
    slug: "basic-auth-header-generator",
    icon: "UserRoundCog"
  },
  {
    id: "tool-oauth-flow-cheat-helper",
    name: "OAuth Flow Cheat Helper",
    description: "Compare common OAuth flows and their token exchange steps in a compact helper.",
    category: "dev-tools",
    tags: ["oauth", "auth", "flow", "reference"],
    slug: "oauth-flow-cheat-helper",
    icon: "Workflow"
  },
  {
    id: "tool-webhook-signature-tester",
    name: "Webhook Signature Tester",
    description: "Test webhook signing inputs and compare generated signatures during integrations.",
    category: "dev-tools",
    tags: ["webhook", "signature", "testing", "security"],
    slug: "webhook-signature-tester",
    icon: "Webhook"
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
    id: "tool-http-methods-cheatsheet",
    name: "HTTP Methods Cheatsheet",
    description: "Quick reference for HTTP verbs, semantics, and common usage patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "http-methods-cheatsheet",
    icon: "BookOpenText"
  },
  {
    id: "tool-http-status-codes-quick-ref",
    name: "HTTP Status Codes Quick Ref",
    description: "Fast lookup for common HTTP status codes and response meanings.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "http-status-codes-quick-ref",
    icon: "BadgeInfo"
  },
  {
    id: "tool-rest-api-design-cheatsheet",
    name: "REST API Design Cheatsheet",
    description: "Reference common REST naming, resource, and response design conventions.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "rest-api-design-cheatsheet",
    icon: "Waypoints"
  },
  {
    id: "tool-graphql-syntax-cheatsheet",
    name: "GraphQL Syntax Cheatsheet",
    description: "Quick syntax guide for GraphQL queries, mutations, fragments, and schemas.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "graphql-syntax-cheatsheet",
    icon: "Orbit"
  },
  {
    id: "tool-curl-cheatsheet",
    name: "cURL Cheatsheet",
    description: "Common cURL patterns for headers, auth, payloads, and request debugging.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "curl-cheatsheet",
    icon: "ArrowLeftRight"
  },
  {
    id: "tool-postman-shortcuts-reference",
    name: "Postman Shortcuts/Reference",
    description: "Useful Postman shortcuts, request tips, and workflow reminders.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "postman-shortcuts-reference",
    icon: "Send"
  },
  {
    id: "tool-websocket-events-cheatsheet",
    name: "WebSocket Events Cheatsheet",
    description: "Quick reference for WebSocket event flow and message handling basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "websocket-events-cheatsheet",
    icon: "Radio"
  },
  {
    id: "tool-json-schema-quick-ref",
    name: "JSON Schema Quick Ref",
    description: "Quick guide to common JSON Schema keywords and validation rules.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "json-schema-quick-ref",
    icon: "FileJson2"
  },
  {
    id: "tool-kubernetes-cheatsheet",
    name: "Kubernetes Cheatsheet",
    description: "High-frequency kubectl commands and Kubernetes object basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "kubernetes-cheatsheet",
    icon: "Box"
  },
  {
    id: "tool-nginx-cheatsheet",
    name: "Nginx Cheatsheet",
    description: "Reference common Nginx config directives, reload commands, and patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "nginx-cheatsheet",
    icon: "Server"
  },
  {
    id: "tool-apache-config-cheatsheet",
    name: "Apache Config Cheatsheet",
    description: "Quick lookup for common Apache directives and server config tasks.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "apache-config-cheatsheet",
    icon: "ServerCog"
  },
  {
    id: "tool-terraform-cheatsheet",
    name: "Terraform Cheatsheet",
    description: "Reference core Terraform commands, state workflows, and IaC patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "terraform-cheatsheet",
    icon: "Blocks"
  },
  {
    id: "tool-ansible-cheatsheet",
    name: "Ansible Cheatsheet",
    description: "Quick ref for Ansible playbooks, inventories, modules, and runs.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "ansible-cheatsheet",
    icon: "Bot"
  },
  {
    id: "tool-github-actions-cheatsheet",
    name: "GitHub Actions Cheatsheet",
    description: "Reference GitHub Actions workflow syntax, jobs, and CI patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "github-actions-cheatsheet",
    icon: "Workflow"
  },
  {
    id: "tool-docker-compose-cheatsheet",
    name: "Docker Compose Cheatsheet",
    description: "Quick reference for Docker Compose services, commands, and files.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "docker-compose-cheatsheet",
    icon: "Container"
  },
  {
    id: "tool-linux-permissions-quick-ref",
    name: "Linux Permissions Quick Ref",
    description: "Fast guide to chmod, chown, permissions, and ownership patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "linux-permissions-quick-ref",
    icon: "Shield"
  },
  {
    id: "tool-systemd-cheatsheet",
    name: "Systemd Cheatsheet",
    description: "Common systemctl and journalctl commands for service management.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "systemd-cheatsheet",
    icon: "Power"
  },
  {
    id: "tool-ssh-cheatsheet",
    name: "SSH Cheatsheet",
    description: "Reference SSH connections, config, forwarding, and key workflows.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "ssh-cheatsheet",
    icon: "KeySquare"
  },
  {
    id: "tool-postgresql-cheatsheet",
    name: "PostgreSQL Cheatsheet",
    description: "Quick PostgreSQL commands, psql usage, and common query helpers.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "postgresql-cheatsheet",
    icon: "Database"
  },
  {
    id: "tool-mysql-cheatsheet",
    name: "MySQL Cheatsheet",
    description: "Common MySQL commands, query snippets, and admin shortcuts.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "mysql-cheatsheet",
    icon: "Database"
  },
  {
    id: "tool-sqlite-cheatsheet",
    name: "SQLite Cheatsheet",
    description: "Reference SQLite commands, shell usage, and lightweight query patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "sqlite-cheatsheet",
    icon: "Database"
  },
  {
    id: "tool-mongodb-cheatsheet",
    name: "MongoDB Cheatsheet",
    description: "Quick reference for MongoDB queries, updates, and shell basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "mongodb-cheatsheet",
    icon: "Database"
  },
  {
    id: "tool-redis-cheatsheet",
    name: "Redis Cheatsheet",
    description: "Useful Redis commands for strings, hashes, lists, sets, and expiry.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "redis-cheatsheet",
    icon: "DatabaseBackup"
  },
  {
    id: "tool-prisma-cheatsheet",
    name: "Prisma Cheatsheet",
    description: "Reference Prisma schema syntax, client queries, and migration tasks.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "prisma-cheatsheet",
    icon: "FileCode2"
  },
  {
    id: "tool-sql-joins-quick-ref",
    name: "SQL Joins Quick Ref",
    description: "Fast lookup for SQL join types, patterns, and matching behavior.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "sql-joins-quick-ref",
    icon: "GitMerge"
  },
  {
    id: "tool-indexing-performance-cheatsheet",
    name: "Indexing/Performance Cheatsheet",
    description: "Quick reminders for indexing basics and query performance tuning.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "indexing-performance-cheatsheet",
    icon: "Gauge"
  },
  {
    id: "tool-react-cheatsheet",
    name: "React Cheatsheet",
    description: "Everyday React syntax and patterns for components, props, state, and effects.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "react-cheatsheet",
    icon: "Atom"
  },
  {
    id: "tool-nextjs-cheatsheet",
    name: "Next.js Cheatsheet",
    description: "Quick ref for App Router, data fetching, layouts, and routing patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "nextjs-cheatsheet",
    icon: "Rocket"
  },
  {
    id: "tool-tailwind-cheatsheet",
    name: "Tailwind Cheatsheet",
    description: "Reference Tailwind utility categories, layout helpers, and spacing patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "tailwind-cheatsheet",
    icon: "Wind"
  },
  {
    id: "tool-html-semantics-cheatsheet",
    name: "HTML Semantics Cheatsheet",
    description: "Quick guide to semantic HTML elements and document structure choices.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "html-semantics-cheatsheet",
    icon: "CodeXml"
  },
  {
    id: "tool-css-flexbox-cheatsheet",
    name: "CSS Flexbox Cheatsheet",
    description: "Reference flex container and item properties with common layout combos.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "css-flexbox-cheatsheet",
    icon: "Rows3"
  },
  {
    id: "tool-css-grid-cheatsheet",
    name: "CSS Grid Cheatsheet",
    description: "Quick guide to grid layout properties, track sizing, and placement.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "css-grid-cheatsheet",
    icon: "Grid2x2"
  },
  {
    id: "tool-accessibility-quick-ref",
    name: "Accessibility Quick Ref",
    description: "Useful accessibility reminders for semantics, focus, labels, and contrast.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "accessibility-quick-ref",
    icon: "Accessibility"
  },
  {
    id: "tool-dom-events-cheatsheet",
    name: "DOM Events Cheatsheet",
    description: "Quick reference for common browser DOM events and event handling patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "dom-events-cheatsheet",
    icon: "MousePointerClick"
  },
  {
    id: "tool-browser-storage-cheatsheet",
    name: "Browser Storage Cheatsheet",
    description: "Compare localStorage, sessionStorage, cookies, and browser storage options.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "browser-storage-cheatsheet",
    icon: "HardDrive"
  },
  {
    id: "tool-java-cheatsheet",
    name: "Java Cheatsheet",
    description: "Quick Java syntax reminders for classes, collections, methods, and basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "java-cheatsheet",
    icon: "Coffee"
  },
  {
    id: "tool-csharp-cheatsheet",
    name: "C# Cheatsheet",
    description: "Reference C# syntax, LINQ basics, types, and common patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "csharp-cheatsheet",
    icon: "Hash"
  },
  {
    id: "tool-go-cheatsheet",
    name: "Go Cheatsheet",
    description: "Quick Go examples for structs, slices, interfaces, and concurrency basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "go-cheatsheet",
    icon: "ArrowRight"
  },
  {
    id: "tool-rust-cheatsheet",
    name: "Rust Cheatsheet",
    description: "Reference Rust ownership, borrowing, structs, enums, and pattern basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "rust-cheatsheet",
    icon: "Cog"
  },
  {
    id: "tool-php-cheatsheet",
    name: "PHP Cheatsheet",
    description: "Everyday PHP syntax reminders for arrays, functions, classes, and web basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "php-cheatsheet",
    icon: "FileCode2"
  },
  {
    id: "tool-ruby-cheatsheet",
    name: "Ruby Cheatsheet",
    description: "Quick Ruby examples for hashes, blocks, classes, and collection helpers.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "ruby-cheatsheet",
    icon: "Gem"
  },
  {
    id: "tool-shell-scripting-cheatsheet",
    name: "Shell Scripting Cheatsheet",
    description: "Reference shell scripting patterns for variables, loops, pipes, and guards.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "shell-scripting-cheatsheet",
    icon: "Shell"
  },
  {
    id: "tool-nodejs-quick-ref",
    name: "Node.js Quick Ref",
    description: "Quick reference for Node.js modules, scripts, env vars, and runtime basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "nodejs-quick-ref",
    icon: "SquareTerminal"
  },
  {
    id: "tool-jest-cheatsheet",
    name: "Jest Cheatsheet",
    description: "Fast reference for Jest assertions, mocks, setup, and common testing flows.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "jest-cheatsheet",
    icon: "FlaskConical"
  },
  {
    id: "tool-playwright-cheatsheet",
    name: "Playwright Cheatsheet",
    description: "Reference Playwright locators, assertions, and browser automation basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "playwright-cheatsheet",
    icon: "MonitorPlay"
  },
  {
    id: "tool-cypress-cheatsheet",
    name: "Cypress Cheatsheet",
    description: "Quick guide to Cypress commands, selectors, assertions, and test flow.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "cypress-cheatsheet",
    icon: "MonitorCheck"
  },
  {
    id: "tool-testing-library-cheatsheet",
    name: "Testing Library Cheatsheet",
    description: "Reference Testing Library queries, assertions, and testing patterns.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "testing-library-cheatsheet",
    icon: "Search"
  },
  {
    id: "tool-regex-quick-ref",
    name: "Regex Quick Ref",
    description: "Quick reference for common regex tokens, groups, assertions, and flags.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "regex-quick-ref",
    icon: "ScanSearch"
  },
  {
    id: "tool-debugging-workflow-cheatsheet",
    name: "Debugging Workflow Cheatsheet",
    description: "Useful debugging steps, inspection habits, and troubleshooting workflow reminders.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "debugging-workflow-cheatsheet",
    icon: "Bug"
  },
  {
    id: "tool-git-troubleshooting-cheatsheet",
    name: "Git Troubleshooting Cheatsheet",
    description: "Quick help for resolving common Git mistakes, conflicts, and sync issues.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "git-troubleshooting-cheatsheet",
    icon: "GitBranchPlus"
  },
  {
    id: "tool-owasp-top-10-quick-ref",
    name: "OWASP Top 10 Quick Ref",
    description: "Quick security reference for the OWASP Top 10 risk categories.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "owasp-top-10-quick-ref",
    icon: "ShieldAlert"
  },
  {
    id: "tool-jwt-cheatsheet",
    name: "JWT Cheatsheet",
    description: "Reference JWT structure, claims, signing basics, and auth considerations.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "jwt-cheatsheet",
    icon: "KeyRound"
  },
  {
    id: "tool-oauth-2-cheatsheet",
    name: "OAuth 2.0 Cheatsheet",
    description: "Quick guide to OAuth 2.0 concepts, tokens, and common grant flows.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "oauth-2-cheatsheet",
    icon: "Workflow"
  },
  {
    id: "tool-auth-flow-comparison-sheet",
    name: "Auth Flow Comparison Sheet",
    description: "Compare common authentication flows and their tradeoffs at a glance.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "auth-flow-comparison-sheet",
    icon: "SplitSquareVertical"
  },
  {
    id: "tool-csp-cheatsheet",
    name: "CSP Cheatsheet",
    description: "Reference content security policy directives and policy-building basics.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "csp-cheatsheet",
    icon: "ShieldCheck"
  },
  {
    id: "tool-common-security-headers-cheatsheet",
    name: "Common Security Headers Cheatsheet",
    description: "Quick reference for common security headers and their purpose.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "common-security-headers-cheatsheet",
    icon: "PanelTop"
  },
  {
    id: "tool-prompt-engineering-cheatsheet",
    name: "Prompt Engineering Cheatsheet",
    description: "Quick prompts guide covering structure, examples, constraints, and roles.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "prompt-engineering-cheatsheet",
    icon: "Sparkles"
  },
  {
    id: "tool-markdown-cheatsheet",
    name: "Markdown Cheatsheet",
    description: "Quick reference for Markdown syntax, formatting, links, lists, and code blocks.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "markdown-cheatsheet",
    icon: "NotebookPen"
  },
  {
    id: "tool-mermaid-cheatsheet",
    name: "Mermaid Cheatsheet",
    description: "Reference Mermaid diagram syntax for flowcharts, sequences, and graphs.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "mermaid-cheatsheet",
    icon: "Share2"
  },
  {
    id: "tool-cron-cheatsheet",
    name: "Cron Cheatsheet",
    description: "Fast lookup for cron fields, syntax patterns, and recurring schedules.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "cron-cheatsheet",
    icon: "CalendarClock"
  },
  {
    id: "tool-keyboard-shortcuts-sheet",
    name: "Keyboard Shortcuts Sheet",
    description: "Quick sheet of common editor, browser, and workflow keyboard shortcuts.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "keyboard-shortcuts-sheet",
    icon: "Keyboard"
  },
  {
    id: "tool-cli-productivity-cheatsheet",
    name: "CLI Productivity Cheatsheet",
    description: "Useful command-line productivity shortcuts, aliases, and terminal habits.",
    category: "cheatsheets",
    tags: ["cheatsheet", "reference", "quick-ref"],
    slug: "cli-productivity-cheatsheet",
    icon: "TerminalSquare"
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
