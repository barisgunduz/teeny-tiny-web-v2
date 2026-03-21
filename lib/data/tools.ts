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
    id: "tool-raw-http-header-parser",
    name: "Raw HTTP Header Parser",
    description: "Inspect, parse, and organize raw HTTP headers into a readable structure.",
    category: "dev-tools",
    tags: ["http", "headers", "inspector", "web"],
    slug: "raw-http-header-parser",
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
    id: "tool-fake-company-generator",
    name: "Fake Company Generator",
    description: "Generate company names, domains, industries, and simple business profile fields.",
    category: "dummy-data",
    tags: ["company", "business", "seed", "mock-data"],
    slug: "fake-company-generator",
    icon: "Building2",
    isFeatured: true
  },
  {
    id: "tool-address-list-generator",
    name: "Address List Generator",
    description: "Create realistic address entries with street, city, region, postal code, and country fields.",
    category: "dummy-data",
    tags: ["address", "location", "forms", "fixtures"],
    slug: "address-list-generator",
    icon: "MapPinHouse"
  },
  {
    id: "tool-phone-number-generator",
    name: "Phone Number Generator",
    description: "Generate formatted sample phone numbers for signup forms, CRM records, and demos.",
    category: "dummy-data",
    tags: ["phone", "contacts", "forms", "mock-data"],
    slug: "phone-number-generator",
    icon: "Phone"
  },
  {
    id: "tool-job-title-generator",
    name: "Job Title Generator",
    description: "Build realistic job titles, departments, seniority levels, and role labels for people data.",
    category: "dummy-data",
    tags: ["jobs", "roles", "people", "hr"],
    slug: "job-title-generator",
    icon: "BriefcaseBusiness"
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
    id: "tool-blog-post-generator",
    name: "Blog Post Generator",
    description: "Generate sample blog posts with titles, excerpts, categories, tags, and author metadata.",
    category: "dummy-data",
    tags: ["blog", "cms", "content", "fixtures"],
    slug: "blog-post-generator",
    icon: "NotebookText"
  },
  {
    id: "tool-comment-thread-generator",
    name: "Comment Thread Generator",
    description: "Create nested comments with authors, timestamps, reactions, and moderation-friendly fields.",
    category: "dummy-data",
    tags: ["comments", "social", "threads", "content"],
    slug: "comment-thread-generator",
    icon: "MessagesSquare"
  },
  {
    id: "tool-faq-generator",
    name: "FAQ Generator",
    description: "Generate question-and-answer pairs for help centers, onboarding, and support content mocks.",
    category: "dummy-data",
    tags: ["faq", "support", "content", "help-center"],
    slug: "faq-generator",
    icon: "MessageCircleQuestion"
  },
  {
    id: "tool-support-ticket-generator",
    name: "Support Ticket Generator",
    description: "Create realistic support tickets with status, priority, requester, and issue fields.",
    category: "dummy-data",
    tags: ["support", "tickets", "crm", "helpdesk"],
    slug: "support-ticket-generator",
    icon: "Ticket"
  },
  {
    id: "tool-email-thread-generator",
    name: "Email Thread Generator",
    description: "Generate sample email conversations with subjects, senders, replies, and timestamps.",
    category: "dummy-data",
    tags: ["email", "messages", "threads", "fixtures"],
    slug: "email-thread-generator",
    icon: "Mail"
  },
  {
    id: "tool-event-list-generator",
    name: "Event List Generator",
    description: "Create event records with dates, venues, speakers, statuses, and registration-style fields.",
    category: "dummy-data",
    tags: ["events", "calendar", "schedules", "mock-data"],
    slug: "event-list-generator",
    icon: "CalendarRange"
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
    id: "tool-order-data-generator",
    name: "Order Data Generator",
    description: "Generate ecommerce-style orders with customers, items, totals, and fulfillment statuses.",
    category: "dummy-data",
    tags: ["orders", "commerce", "payments", "fixtures"],
    slug: "order-data-generator",
    icon: "PackageOpen"
  },
  {
    id: "tool-invoice-generator",
    name: "Invoice Generator",
    description: "Create invoice records with line items, tax, due dates, and payment status fields.",
    category: "dummy-data",
    tags: ["invoice", "billing", "finance", "documents"],
    slug: "invoice-generator",
    icon: "ReceiptText",
    isFeatured: true
  },
  {
    id: "tool-transaction-generator",
    name: "Transaction Generator",
    description: "Generate payment and ledger-like transaction rows with amounts, methods, and outcomes.",
    category: "dummy-data",
    tags: ["transactions", "payments", "finance", "seed"],
    slug: "transaction-generator",
    icon: "WalletCards"
  },
  {
    id: "tool-inventory-generator",
    name: "Inventory Generator",
    description: "Create stock records with SKUs, quantities, warehouses, reorder flags, and availability.",
    category: "dummy-data",
    tags: ["inventory", "warehouse", "products", "operations"],
    slug: "inventory-generator",
    icon: "Boxes"
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
    id: "tool-device-list-generator",
    name: "Device List Generator",
    description: "Generate device catalogs with model names, platforms, screen sizes, and ownership states.",
    category: "dummy-data",
    tags: ["devices", "hardware", "inventory", "fixtures"],
    slug: "device-list-generator",
    icon: "LaptopMinimal"
  },
  {
    id: "tool-sql-seed-generator",
    name: "SQL Seed Generator",
    description: "Generate starter SQL insert statements from realistic-looking fixture records.",
    category: "dummy-data",
    tags: ["sql", "seed", "database", "fixtures"],
    slug: "sql-seed-generator",
    icon: "DatabaseZap"
  },
  {
    id: "tool-api-payload-generator",
    name: "API Payload Generator",
    description: "Create sample request and response payloads for CRUD-style API demos and testing.",
    category: "dummy-data",
    tags: ["api", "payload", "json", "mock-data"],
    slug: "api-payload-generator",
    icon: "Waypoints"
  },
  {
    id: "tool-env-file-generator",
    name: "ENV File Generator",
    description: "Generate realistic-looking .env examples with app, database, and service config keys.",
    category: "dummy-data",
    tags: ["env", "config", "secrets", "examples"],
    slug: "env-file-generator",
    icon: "FileCog"
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
    id: "tool-mobile-developer-roadmap",
    name: "Mobile Developer Roadmap",
    description: "Build a clear path through native concepts, app architecture, and mobile shipping workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "mobile-developer-roadmap",
    icon: "Smartphone"
  },
  {
    id: "tool-data-engineering-roadmap",
    name: "Data Engineering Roadmap",
    description: "Learn pipelines, warehousing, orchestration, and the systems behind production data workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "data-engineering-roadmap",
    icon: "DatabaseBackup"
  },
  {
    id: "tool-cybersecurity-roadmap",
    name: "Cybersecurity Roadmap",
    description: "Work through modern security concepts, defensive practices, and foundational cyber workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "cybersecurity-roadmap",
    icon: "Shield"
  },
  {
    id: "tool-react-roadmap",
    name: "React Roadmap",
    description: "Learn React from component basics through state, rendering, testing, and production patterns.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "react-roadmap",
    icon: "Atom"
  },
  {
    id: "tool-nextjs-roadmap",
    name: "Next.js Roadmap",
    description: "Follow a focused learning path for routing, data fetching, rendering, and shipping apps with Next.js.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "nextjs-roadmap",
    icon: "Rocket"
  },
  {
    id: "tool-vue-roadmap",
    name: "Vue Roadmap",
    description: "Build up from Vue fundamentals to components, state, routing, and app architecture.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "vue-roadmap",
    icon: "Triangle"
  },
  {
    id: "tool-angular-roadmap",
    name: "Angular Roadmap",
    description: "Learn Angular modules, components, services, forms, and enterprise app structure.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "angular-roadmap",
    icon: "Hexagon"
  },
  {
    id: "tool-react-native-roadmap",
    name: "React Native Roadmap",
    description: "Learn cross-platform mobile development with React Native from setup to shipping.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "react-native-roadmap",
    icon: "SmartphoneCharging"
  },
  {
    id: "tool-flutter-roadmap",
    name: "Flutter Roadmap",
    description: "Build a roadmap for widgets, app layout, state handling, and Flutter delivery.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "flutter-roadmap",
    icon: "PanelsTopLeft"
  },
  {
    id: "tool-api-developer-roadmap",
    name: "API Developer Roadmap",
    description: "Focus on API design, contracts, auth, versioning, observability, and reliability.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "api-developer-roadmap",
    icon: "Waypoints"
  },
  {
    id: "tool-nodejs-backend-roadmap",
    name: "Node.js Backend Roadmap",
    description: "Learn backend development with Node.js, services, APIs, data access, and deployment.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "nodejs-backend-roadmap",
    icon: "SquareTerminal"
  },
  {
    id: "tool-python-backend-roadmap",
    name: "Python Backend Roadmap",
    description: "Build Python backend skills across APIs, services, databases, and async workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "python-backend-roadmap",
    icon: "Bug"
  },
  {
    id: "tool-java-backend-roadmap",
    name: "Java Backend Roadmap",
    description: "Follow a backend path for Java services, frameworks, APIs, and production architecture.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "java-backend-roadmap",
    icon: "Coffee"
  },
  {
    id: "tool-dotnet-backend-roadmap",
    name: ".NET Backend Roadmap",
    description: "Learn .NET backend patterns for APIs, data access, architecture, and deployment.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "dotnet-backend-roadmap",
    icon: "Hash"
  },
  {
    id: "tool-go-backend-roadmap",
    name: "Go Backend Roadmap",
    description: "Build backend systems in Go with services, concurrency, APIs, and production tooling.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "go-backend-roadmap",
    icon: "ArrowRight"
  },
  {
    id: "tool-microservices-roadmap",
    name: "Microservices Roadmap",
    description: "Understand service boundaries, messaging, contracts, resilience, and distributed systems tradeoffs.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "microservices-roadmap",
    icon: "Network"
  },
  {
    id: "tool-database-engineer-roadmap",
    name: "Database Engineer Roadmap",
    description: "Focus on schema design, performance, indexing, replication, and database operations.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "database-engineer-roadmap",
    icon: "Database"
  },
  {
    id: "tool-software-architect-roadmap",
    name: "Software Architect Roadmap",
    description: "Study systems thinking, tradeoffs, patterns, reliability, and large-scale technical design.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "software-architect-roadmap",
    icon: "Blocks"
  },
  {
    id: "tool-kubernetes-roadmap",
    name: "Kubernetes Roadmap",
    description: "Learn Kubernetes concepts, workloads, networking, storage, operations, and production readiness.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "kubernetes-roadmap",
    icon: "Box"
  },
  {
    id: "tool-aws-roadmap",
    name: "AWS Roadmap",
    description: "Build cloud foundations across AWS services, networking, IAM, deployment, and operations.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "aws-roadmap",
    icon: "Cloud"
  },
  {
    id: "tool-azure-roadmap",
    name: "Azure Roadmap",
    description: "Learn Azure services, identity, deployment patterns, and platform operations.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "azure-roadmap",
    icon: "CloudCog"
  },
  {
    id: "tool-gcp-roadmap",
    name: "GCP Roadmap",
    description: "Follow a Google Cloud roadmap across compute, storage, networking, and managed services.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "gcp-roadmap",
    icon: "CloudLightning"
  },
  {
    id: "tool-sre-roadmap",
    name: "SRE Roadmap",
    description: "Focus on reliability, observability, incident response, SLIs, SLOs, and production health.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "sre-roadmap",
    icon: "Activity"
  },
  {
    id: "tool-platform-engineer-roadmap",
    name: "Platform Engineer Roadmap",
    description: "Build internal platform skills for developer experience, infrastructure, and service enablement.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "platform-engineer-roadmap",
    icon: "ServerCog"
  },
  {
    id: "tool-cloud-security-roadmap",
    name: "Cloud Security Roadmap",
    description: "Learn cloud-native security concepts across IAM, networks, secrets, and posture management.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "cloud-security-roadmap",
    icon: "ShieldCheck"
  },
  {
    id: "tool-networking-engineer-roadmap",
    name: "Networking Engineer Roadmap",
    description: "Develop networking fundamentals across routing, switching, addressing, DNS, and troubleshooting.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "networking-engineer-roadmap",
    icon: "Cable"
  },
  {
    id: "tool-linux-administrator-roadmap",
    name: "Linux Administrator Roadmap",
    description: "Learn Linux administration, services, permissions, logs, networking, and system operations.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "linux-administrator-roadmap",
    icon: "TerminalSquare"
  },
  {
    id: "tool-data-analyst-roadmap",
    name: "Data Analyst Roadmap",
    description: "Build analysis skills around SQL, spreadsheets, dashboards, metrics, and storytelling.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "data-analyst-roadmap",
    icon: "ChartColumn"
  },
  {
    id: "tool-data-scientist-roadmap",
    name: "Data Scientist Roadmap",
    description: "Learn statistics, modeling, experimentation, feature work, and practical data science workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "data-scientist-roadmap",
    icon: "Microscope"
  },
  {
    id: "tool-machine-learning-engineer-roadmap",
    name: "Machine Learning Engineer Roadmap",
    description: "Focus on ML systems, training pipelines, serving, evaluation, and production model workflows.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "machine-learning-engineer-roadmap",
    icon: "BrainCircuit"
  },
  {
    id: "tool-mlops-roadmap",
    name: "MLOps Roadmap",
    description: "Learn how to operate machine learning systems with automation, tracking, deployment, and monitoring.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "mlops-roadmap",
    icon: "GitBranchPlus"
  },
  {
    id: "tool-llm-engineer-roadmap",
    name: "LLM Engineer Roadmap",
    description: "Build a roadmap for prompts, retrieval, agents, evaluation, and LLM-powered product systems.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "llm-engineer-roadmap",
    icon: "Sparkles"
  },
  {
    id: "tool-prompt-engineer-roadmap",
    name: "Prompt Engineer Roadmap",
    description: "Learn prompt design, examples, role framing, evaluation, and workflow integration.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "prompt-engineer-roadmap",
    icon: "MessageSquareQuote"
  },
  {
    id: "tool-ai-product-builder-roadmap",
    name: "AI Product Builder Roadmap",
    description: "Focus on shipping AI products by combining UX, orchestration, prompts, and product thinking.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "ai-product-builder-roadmap",
    icon: "Bot"
  },
  {
    id: "tool-cybersecurity-beginner-roadmap",
    name: "Cybersecurity Beginner Roadmap",
    description: "Start learning cybersecurity with a beginner-first path through core concepts and safety practices.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "cybersecurity-beginner-roadmap",
    icon: "ShieldAlert"
  },
  {
    id: "tool-web-application-security-roadmap",
    name: "Web Application Security Roadmap",
    description: "Learn to secure web apps through auth, input safety, headers, abuse prevention, and testing.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "web-application-security-roadmap",
    icon: "ShieldHalf"
  },
  {
    id: "tool-penetration-testing-roadmap",
    name: "Penetration Testing Roadmap",
    description: "Build offensive security knowledge around recon, enumeration, exploitation, and reporting.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "penetration-testing-roadmap",
    icon: "SearchSlash"
  },
  {
    id: "tool-blue-team-roadmap",
    name: "Blue Team Roadmap",
    description: "Focus on defensive security workflows, monitoring, detection, and operational response.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "blue-team-roadmap",
    icon: "ShieldPlus"
  },
  {
    id: "tool-soc-analyst-roadmap",
    name: "SOC Analyst Roadmap",
    description: "Learn alert triage, incident investigation, logging, and detection workflows for SOC work.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "soc-analyst-roadmap",
    icon: "Radar"
  },
  {
    id: "tool-security-engineer-roadmap",
    name: "Security Engineer Roadmap",
    description: "Build toward security engineering with systems, appsec, cloud, and automation practices.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "security-engineer-roadmap",
    icon: "Shield"
  },
  {
    id: "tool-iam-roadmap",
    name: "IAM Roadmap",
    description: "Learn identity and access management concepts, policies, federation, roles, and governance.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "iam-roadmap",
    icon: "UsersRound"
  },
  {
    id: "tool-qa-engineer-roadmap",
    name: "QA Engineer Roadmap",
    description: "Build testing discipline through quality strategy, test design, coverage, and release confidence.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "qa-engineer-roadmap",
    icon: "ClipboardCheck"
  },
  {
    id: "tool-test-automation-roadmap",
    name: "Test Automation Roadmap",
    description: "Learn how to automate quality workflows across UI, API, and regression testing.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "test-automation-roadmap",
    icon: "TestTube2"
  },
  {
    id: "tool-playwright-testing-roadmap",
    name: "Playwright Testing Roadmap",
    description: "Build end-to-end testing skills using Playwright for automation, assertions, and CI integration.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "playwright-testing-roadmap",
    icon: "MonitorPlay"
  },
  {
    id: "tool-performance-testing-roadmap",
    name: "Performance Testing Roadmap",
    description: "Learn load, stress, and performance-testing workflows for systems and APIs.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "performance-testing-roadmap",
    icon: "Gauge"
  },
  {
    id: "tool-reliability-engineering-roadmap",
    name: "Reliability Engineering Roadmap",
    description: "Focus on reliability, failure handling, operational excellence, and resilient system design.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "reliability-engineering-roadmap",
    icon: "HeartPulse"
  },
  {
    id: "tool-ui-designer-roadmap",
    name: "UI Designer Roadmap",
    description: "Learn visual hierarchy, layout, typography, components, and polished interface design.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "ui-designer-roadmap",
    icon: "Palette"
  },
  {
    id: "tool-ux-designer-roadmap",
    name: "UX Designer Roadmap",
    description: "Build user experience skills around research, flows, usability, and interaction design.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "ux-designer-roadmap",
    icon: "Users"
  },
  {
    id: "tool-product-designer-roadmap",
    name: "Product Designer Roadmap",
    description: "Combine UX, UI, product thinking, and systems design into a practical design roadmap.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "product-designer-roadmap",
    icon: "PenTool"
  },
  {
    id: "tool-design-systems-roadmap",
    name: "Design Systems Roadmap",
    description: "Learn the structure, governance, tokens, components, and adoption patterns behind design systems.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "design-systems-roadmap",
    icon: "Component"
  },
  {
    id: "tool-product-manager-roadmap",
    name: "Product Manager Roadmap",
    description: "Follow a product path through discovery, prioritization, delivery, communication, and metrics.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "product-manager-roadmap",
    icon: "BriefcaseBusiness"
  },
  {
    id: "tool-technical-writer-roadmap",
    name: "Technical Writer Roadmap",
    description: "Build technical writing skills for docs, onboarding, reference content, and product communication.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "technical-writer-roadmap",
    icon: "FilePenLine"
  },
  {
    id: "tool-computer-science-fundamentals-roadmap",
    name: "Computer Science Fundamentals Roadmap",
    description: "Study algorithms, data structures, complexity, systems, and core programming concepts.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "computer-science-fundamentals-roadmap",
    icon: "BookOpen"
  },
  {
    id: "tool-open-source-contributor-roadmap",
    name: "Open Source Contributor Roadmap",
    description: "Learn how to navigate codebases, contribute cleanly, collaborate, and build an OSS track record.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "open-source-contributor-roadmap",
    icon: "GitPullRequest"
  },
  {
    id: "tool-freelance-developer-roadmap",
    name: "Freelance Developer Roadmap",
    description: "Build a roadmap for freelance delivery, client communication, scoping, and professional systems.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "freelance-developer-roadmap",
    icon: "BadgeDollarSign"
  },
  {
    id: "tool-indie-hacker-roadmap",
    name: "Indie Hacker Roadmap",
    description: "Learn to design, build, launch, validate, and iterate on solo software products.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "indie-hacker-roadmap",
    icon: "Lightbulb"
  },
  {
    id: "tool-startup-cto-roadmap",
    name: "Startup CTO Roadmap",
    description: "Build leadership, architecture, hiring, delivery, and scaling judgment for startup technical leadership.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "startup-cto-roadmap",
    icon: "Building2"
  },
  {
    id: "tool-junior-to-senior-developer-roadmap",
    name: "Junior-to-Senior Developer Roadmap",
    description: "Develop the habits, technical depth, communication, and ownership needed to grow as an engineer.",
    category: "roadmaps",
    tags: ["roadmap", "learning", "career"],
    slug: "junior-to-senior-developer-roadmap",
    icon: "TrendingUp"
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
    id: "tool-focus-list",
    name: "Focus List",
    description: "Keep a tiny prioritized task list with must-do, should-do, and could-do buckets.",
    category: "productivity",
    tags: ["tasks", "focus", "priorities", "planning"],
    slug: "focus-list",
    icon: "ListTodo"
  },
  {
    id: "tool-priority-matrix-tool",
    name: "Priority Matrix Tool",
    description: "Sort work into urgent-important quadrants to decide what to do, defer, delegate, or drop.",
    category: "productivity",
    tags: ["priorities", "matrix", "planning", "tasks"],
    slug: "priority-matrix-tool",
    icon: "Grid2x2",
    isFeatured: true
  },
  {
    id: "tool-task-batching-planner",
    name: "Task Batching Planner",
    description: "Group similar tasks into focused batches to reduce context switching across the day.",
    category: "productivity",
    tags: ["task-batching", "focus", "planning", "workflow"],
    slug: "task-batching-planner",
    icon: "Layers3"
  },
  {
    id: "tool-daily-standup-planner",
    name: "Daily Standup Planner",
    description: "Prepare concise standup updates around yesterday, today, blockers, and follow-ups.",
    category: "productivity",
    tags: ["standup", "team", "updates", "planning"],
    slug: "daily-standup-planner",
    icon: "MessagesSquare"
  },
  {
    id: "tool-goal-breakdown-planner",
    name: "Goal Breakdown Planner",
    description: "Break a bigger goal into milestones, tasks, dependencies, and manageable next steps.",
    category: "productivity",
    tags: ["goals", "planning", "milestones", "execution"],
    slug: "goal-breakdown-planner",
    icon: "Route"
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
    id: "tool-meeting-agenda-builder",
    name: "Meeting Agenda Builder",
    description: "Build focused meeting agendas with goals, discussion blocks, owners, and timeboxes.",
    category: "productivity",
    tags: ["meeting", "agenda", "planning", "collaboration"],
    slug: "meeting-agenda-builder",
    icon: "ClipboardList"
  },
  {
    id: "tool-one-on-one-template-builder",
    name: "One-on-One Template Builder",
    description: "Create reusable one-on-one agendas with topics, follow-ups, wins, and blockers.",
    category: "productivity",
    tags: ["1:1", "meetings", "management", "templates"],
    slug: "one-on-one-template-builder",
    icon: "UsersRound"
  },
  {
    id: "tool-retrospective-notes-builder",
    name: "Retrospective Notes Builder",
    description: "Structure retro notes around wins, friction, experiments, and action items.",
    category: "productivity",
    tags: ["retro", "team", "notes", "improvement"],
    slug: "retrospective-notes-builder",
    icon: "RefreshCcw"
  },
  {
    id: "tool-decision-log-template-generator",
    name: "Decision Log Template Generator",
    description: "Capture decisions with context, options considered, owners, and follow-up notes.",
    category: "productivity",
    tags: ["decision-log", "documentation", "templates", "team"],
    slug: "decision-log-template-generator",
    icon: "FileCheck"
  },
  {
    id: "tool-cron-schedule-builder",
    name: "Cron Schedule Builder",
    description: "Create and validate cron schedules with human-readable explanations.",
    category: "productivity",
    tags: ["cron", "scheduler", "automation", "time"],
    slug: "cron-schedule-builder",
    icon: "CalendarClock"
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
    id: "tool-time-block-planner",
    name: "Time Block Planner",
    description: "Lay out focused work, admin, meetings, and breaks across a more realistic day plan.",
    category: "productivity",
    tags: ["time-blocking", "schedule", "planning", "calendar"],
    slug: "time-block-planner",
    icon: "CalendarRange",
    isFeatured: true
  },
  {
    id: "tool-deadline-countdown-calculator",
    name: "Deadline Countdown Calculator",
    description: "See how much time remains until a deadline in days, hours, and workable time chunks.",
    category: "productivity",
    tags: ["deadline", "countdown", "time", "planning"],
    slug: "deadline-countdown-calculator",
    icon: "Hourglass"
  },
  {
    id: "tool-task-time-estimator",
    name: "Task Time Estimator",
    description: "Estimate task duration using optimistic, likely, and pessimistic time ranges.",
    category: "productivity",
    tags: ["estimation", "tasks", "planning", "time"],
    slug: "task-time-estimator",
    icon: "Clock3"
  },
  {
    id: "tool-capacity-planning-calculator",
    name: "Capacity Planning Calculator",
    description: "Estimate available team capacity from headcount, time off, and non-project overhead.",
    category: "productivity",
    tags: ["capacity", "planning", "team", "estimation"],
    slug: "capacity-planning-calculator",
    icon: "Users"
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
    id: "tool-note-cleanup",
    name: "Note Cleanup Tool",
    description: "Turn messy meeting notes into structured action items and follow-ups.",
    category: "productivity",
    tags: ["notes", "cleanup", "meetings", "writing"],
    slug: "note-cleanup-tool",
    icon: "FileStack"
  },
  {
    id: "tool-bullet-list-cleaner",
    name: "Bullet List Cleaner",
    description: "Normalize messy bullet lists into cleaner spacing, casing, and readable structure.",
    category: "productivity",
    tags: ["lists", "cleanup", "notes", "writing"],
    slug: "bullet-list-cleaner",
    icon: "List"
  },
  {
    id: "tool-meeting-minutes-generator",
    name: "Meeting Minutes Generator",
    description: "Turn rough meeting notes into a cleaner minutes-style summary with actions and owners.",
    category: "productivity",
    tags: ["meeting-minutes", "notes", "docs", "writing"],
    slug: "meeting-minutes-generator",
    icon: "FileText"
  },
  {
    id: "tool-status-update-generator",
    name: "Status Update Generator",
    description: "Draft concise status updates with progress, risks, wins, and next steps.",
    category: "productivity",
    tags: ["status", "updates", "communication", "writing"],
    slug: "status-update-generator",
    icon: "Send"
  },
  {
    id: "tool-change-log-entry-builder",
    name: "Change Log Entry Builder",
    description: "Create cleaner changelog entries with grouped changes, fixes, and upgrade notes.",
    category: "productivity",
    tags: ["changelog", "release-notes", "docs", "writing"],
    slug: "change-log-entry-builder",
    icon: "FileDiff"
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
    id: "tool-habit-streak-tracker",
    name: "Habit Streak Tracker",
    description: "Track lightweight daily habits and visualize simple consistency streaks.",
    category: "productivity",
    tags: ["habits", "tracker", "streaks", "personal"],
    slug: "habit-streak-tracker",
    icon: "Flame"
  },
  {
    id: "tool-clipboard-note-organizer",
    name: "Clipboard Note Organizer",
    description: "Paste rough text snippets and reorganize them into grouped notes or action buckets.",
    category: "productivity",
    tags: ["clipboard", "notes", "organizer", "cleanup"],
    slug: "clipboard-note-organizer",
    icon: "ClipboardPen"
  },
  {
    id: "tool-simple-decision-journal",
    name: "Simple Decision Journal",
    description: "Record small decisions with date, context, options, and a brief outcome note.",
    category: "productivity",
    tags: ["journal", "decisions", "reflection", "notes"],
    slug: "simple-decision-journal",
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
    id: "tool-cidr-notation-guide",
    name: "CIDR Notation Guide",
    description: "Understand CIDR blocks, prefixes, address counts, and subnet sizing.",
    category: "it-sysadmin",
    tags: ["cidr", "networking", "guide", "ip"],
    slug: "cidr-notation-guide",
    icon: "Route"
  },
  {
    id: "tool-cidr-ip-range-converter",
    name: "CIDR / IP Range Converter",
    description: "Convert between CIDR blocks, subnet masks, and start-end IP ranges.",
    category: "it-sysadmin",
    tags: ["cidr", "ip-range", "converter", "networking"],
    slug: "cidr-ip-range-converter",
    icon: "ArrowLeftRight"
  },
  {
    id: "tool-ipv6-expand-compress",
    name: "IPv6 Expand / Compress",
    description: "Expand shorthand IPv6 addresses and compress full notation safely.",
    category: "it-sysadmin",
    tags: ["ipv6", "address", "converter", "networking"],
    slug: "ipv6-expand-compress",
    icon: "Globe"
  },
  {
    id: "tool-wildcard-mask-calculator",
    name: "Wildcard Mask Calculator",
    description: "Calculate wildcard masks alongside subnet masks for ACL and routing workflows.",
    category: "it-sysadmin",
    tags: ["wildcard-mask", "subnet", "acl", "calculator"],
    slug: "wildcard-mask-calculator",
    icon: "Calculator"
  },
  {
    id: "tool-vlsm-subnet-splitter",
    name: "VLSM Subnet Splitter",
    description: "Split larger networks into practical smaller subnets using VLSM planning.",
    category: "it-sysadmin",
    tags: ["vlsm", "subnetting", "cidr", "planning"],
    slug: "vlsm-subnet-splitter",
    icon: "Split"
  },
  {
    id: "tool-private-public-ip-classifier",
    name: "Private / Public IP Classifier",
    description: "Classify IPv4 and IPv6 addresses against private, loopback, link-local, and reserved ranges.",
    category: "it-sysadmin",
    tags: ["ip", "private", "public", "validation"],
    slug: "private-public-ip-classifier",
    icon: "ShieldCheck"
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
    id: "tool-dns-record-builder",
    name: "DNS Record Builder",
    description: "Build common DNS records with value hints, examples, and copy-ready output.",
    category: "it-sysadmin",
    tags: ["dns", "records", "builder", "zones"],
    slug: "dns-record-builder",
    icon: "FilePen",
    isFeatured: true
  },
  {
    id: "tool-dns-zone-file-generator",
    name: "DNS Zone File Generator",
    description: "Generate basic zone file entries with SOA, NS, and common host records.",
    category: "it-sysadmin",
    tags: ["dns", "zone-file", "bind", "generator"],
    slug: "dns-zone-file-generator",
    icon: "FileCode2"
  },
  {
    id: "tool-reverse-dns-ptr-helper",
    name: "Reverse DNS / PTR Helper",
    description: "Turn IP addresses into PTR lookup names and explain reverse DNS structure.",
    category: "it-sysadmin",
    tags: ["dns", "ptr", "reverse-dns", "ip"],
    slug: "reverse-dns-ptr-helper",
    icon: "Waypoints"
  },
  {
    id: "tool-spf-record-builder",
    name: "SPF Record Builder",
    description: "Compose SPF TXT records with include, ip4, ip6, a, mx, and all mechanisms.",
    category: "it-sysadmin",
    tags: ["spf", "dns", "email", "security"],
    slug: "spf-record-builder",
    icon: "MailCheck"
  },
  {
    id: "tool-dkim-record-formatter",
    name: "DKIM Record Formatter",
    description: "Format DKIM selector records into readable TXT values for DNS publishing.",
    category: "it-sysadmin",
    tags: ["dkim", "dns", "email", "formatter"],
    slug: "dkim-record-formatter",
    icon: "FileKey2"
  },
  {
    id: "tool-dmarc-record-builder",
    name: "DMARC Record Builder",
    description: "Generate DMARC records with policy, rua, ruf, alignment, and reporting options.",
    category: "it-sysadmin",
    tags: ["dmarc", "dns", "email", "policy"],
    slug: "dmarc-record-builder",
    icon: "ShieldCheck"
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
    id: "tool-http-status-codes",
    name: "HTTP Status Codes",
    description: "Browse HTTP status codes with categories, meanings, and typical use cases.",
    category: "it-sysadmin",
    tags: ["http", "status-codes", "web", "reference"],
    slug: "http-status-codes",
    icon: "BadgeInfo"
  },
  {
    id: "tool-http-header-inspector",
    name: "HTTP Header Inspector",
    description: "Parse raw HTTP headers into structured fields for faster troubleshooting.",
    category: "it-sysadmin",
    tags: ["http", "headers", "inspector", "debugging"],
    slug: "http-header-inspector",
    icon: "PanelTop",
    isFeatured: true
  },
  {
    id: "tool-security-headers-checker",
    name: "Security Headers Checker",
    description: "Review common response security headers and understand what each one protects.",
    category: "it-sysadmin",
    tags: ["security", "headers", "http", "reference"],
    slug: "security-headers-checker",
    icon: "Shield"
  },
  {
    id: "tool-cache-control-builder",
    name: "Cache-Control Builder",
    description: "Compose Cache-Control directives and preview the behavior they imply.",
    category: "it-sysadmin",
    tags: ["cache-control", "http", "headers", "builder"],
    slug: "cache-control-builder",
    icon: "Gauge"
  },
  {
    id: "tool-cors-header-builder",
    name: "CORS Header Builder",
    description: "Generate CORS response headers for common API and browser scenarios.",
    category: "it-sysadmin",
    tags: ["cors", "http", "headers", "api"],
    slug: "cors-header-builder",
    icon: "ShieldEllipsis"
  },
  {
    id: "tool-cookie-inspector",
    name: "Cookie Inspector",
    description: "Inspect Set-Cookie and Cookie header values with attribute-by-attribute breakdowns.",
    category: "it-sysadmin",
    tags: ["cookies", "http", "headers", "debugging"],
    slug: "cookie-inspector",
    icon: "Cookie"
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
    id: "tool-ssh-config-builder",
    name: "SSH Config Builder",
    description: "Build reusable SSH config blocks with host aliases, ports, users, and identity files.",
    category: "it-sysadmin",
    tags: ["ssh", "config", "builder", "access"],
    slug: "ssh-config-builder",
    icon: "TerminalSquare"
  },
  {
    id: "tool-ssh-known-hosts-parser",
    name: "SSH Known Hosts Parser",
    description: "Parse known_hosts lines to explain host patterns, key types, and hashed entries.",
    category: "it-sysadmin",
    tags: ["ssh", "known-hosts", "parser", "security"],
    slug: "ssh-known-hosts-parser",
    icon: "ScanSearch"
  },
  {
    id: "tool-pem-crt-csr-inspector",
    name: "PEM / CRT / CSR Inspector",
    description: "Inspect PEM certificates, chains, and CSRs without sending them anywhere.",
    category: "it-sysadmin",
    tags: ["pem", "certificate", "csr", "tls"],
    slug: "pem-crt-csr-inspector",
    icon: "FileKey2"
  },
  {
    id: "tool-certificate-chain-explainer",
    name: "Certificate Chain Explainer",
    description: "Understand leaf, intermediate, and root certificate chain relationships clearly.",
    category: "it-sysadmin",
    tags: ["certificates", "chain", "tls", "security"],
    slug: "certificate-chain-explainer",
    icon: "ShieldCheck"
  },
  {
    id: "tool-openssl-command-builder",
    name: "OpenSSL Command Builder",
    description: "Assemble common OpenSSL commands for inspecting keys, certs, CSRs, and fingerprints.",
    category: "it-sysadmin",
    tags: ["openssl", "tls", "certificates", "commands"],
    slug: "openssl-command-builder",
    icon: "Command"
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
    id: "tool-nginx-log-parser",
    name: "Nginx Log Parser",
    description: "Parse nginx access logs into readable request, status, timing, and client fields.",
    category: "it-sysadmin",
    tags: ["nginx", "logs", "parser", "http"],
    slug: "nginx-log-parser",
    icon: "Logs"
  },
  {
    id: "tool-syslog-parser",
    name: "Syslog Parser",
    description: "Parse syslog-style lines into timestamps, hosts, facilities, severities, and messages.",
    category: "it-sysadmin",
    tags: ["syslog", "logs", "parser", "linux"],
    slug: "syslog-parser",
    icon: "Logs"
  },
  {
    id: "tool-linux-cron-builder",
    name: "Linux Cron Builder",
    description: "Build cron schedules with presets, field explanations, and human-readable summaries.",
    category: "it-sysadmin",
    tags: ["cron", "scheduler", "linux", "automation"],
    slug: "linux-cron-builder",
    icon: "CalendarClock"
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
    id: "tool-file-permission-calculator",
    name: "File Permission Calculator",
    description: "Calculate Linux file permissions across owner, group, and others with instant octal output.",
    category: "it-sysadmin",
    tags: ["permissions", "linux", "chmod", "calculator"],
    slug: "file-permission-calculator",
    icon: "Lock"
  },
  {
    id: "tool-chmod-symbolic-numeric-converter",
    name: "chmod Symbolic / Numeric Converter",
    description: "Convert chmod symbolic permission strings into octal values and back again.",
    category: "it-sysadmin",
    tags: ["chmod", "permissions", "linux", "converter"],
    slug: "chmod-symbolic-numeric-converter",
    icon: "RefreshCw"
  },
  {
    id: "tool-systemd-unit-file-builder",
    name: "systemd Unit File Builder",
    description: "Generate starter systemd service unit files with common directives and defaults.",
    category: "it-sysadmin",
    tags: ["systemd", "linux", "services", "builder"],
    slug: "systemd-unit-file-builder",
    icon: "ServerCog"
  },

  {
    id: "tool-accessible-palette-generator",
    name: "Accessible Palette Generator",
    description: "Generate more accessible color palettes with stronger contrast-aware combinations.",
    category: "design-utils",
    tags: ["palette", "accessibility", "color", "generator"],
    slug: "accessible-palette-generator",
    icon: "Palette"
  },
  {
    id: "tool-gradient-mesh-generator",
    name: "Gradient Mesh Generator",
    description: "Build soft multi-point gradient backgrounds for more expressive visual surfaces.",
    category: "design-utils",
    tags: ["gradient", "mesh", "background", "design"],
    slug: "gradient-mesh-generator",
    icon: "Blend"
  },
  {
    id: "tool-duotone-generator",
    name: "Duotone Generator",
    description: "Create duotone color treatments for graphics, hero art, and visual experiments.",
    category: "design-utils",
    tags: ["duotone", "color", "effects", "design"],
    slug: "duotone-generator",
    icon: "SwatchBook"
  },
  {
    id: "tool-brand-color-extractor",
    name: "Brand Color Extractor",
    description: "Pull out likely brand colors and swatches from a source palette or image input.",
    category: "design-utils",
    tags: ["brand", "color", "extractor", "palette"],
    slug: "brand-color-extractor",
    icon: "Pipette"
  },
  {
    id: "tool-image-to-palette-picker",
    name: "Image to Palette Picker",
    description: "Extract a practical color palette from an uploaded visual reference.",
    category: "design-utils",
    tags: ["image", "palette", "picker", "colors"],
    slug: "image-to-palette-picker",
    icon: "Image"
  },
  {
    id: "tool-color-blindness-simulator",
    name: "Color Blindness Simulator",
    description: "Preview how palettes and interfaces may look across common color-vision variations.",
    category: "design-utils",
    tags: ["accessibility", "color-blindness", "simulation", "preview"],
    slug: "color-blindness-simulator",
    icon: "Eye"
  },
  {
    id: "tool-opacity-scale-generator",
    name: "Opacity Scale Generator",
    description: "Generate opacity ramps for overlays, borders, and interface layering systems.",
    category: "design-utils",
    tags: ["opacity", "scale", "ui", "generator"],
    slug: "opacity-scale-generator",
    icon: "Droplets"
  },
  {
    id: "tool-font-pairing-explorer",
    name: "Font Pairing Explorer",
    description: "Explore headline and body font pairings for clearer visual hierarchy.",
    category: "design-utils",
    tags: ["fonts", "pairing", "typography", "design"],
    slug: "font-pairing-explorer",
    icon: "Type"
  },
  {
    id: "tool-line-height-calculator",
    name: "Line-height Calculator",
    description: "Calculate readable line-height ratios for body copy and display text.",
    category: "design-utils",
    tags: ["line-height", "typography", "readability", "calculator"],
    slug: "line-height-calculator",
    icon: "BetweenHorizontalStart"
  },
  {
    id: "tool-letter-spacing-visualizer",
    name: "Letter-spacing Visualizer",
    description: "Preview how tracking changes affect display text, labels, and dense UI copy.",
    category: "design-utils",
    tags: ["letter-spacing", "tracking", "typography", "visualizer"],
    slug: "letter-spacing-visualizer",
    icon: "TextCursorInput"
  },
  {
    id: "tool-type-specimen-builder",
    name: "Type Specimen Builder",
    description: "Build a specimen sheet to preview headings, paragraphs, and UI text together.",
    category: "design-utils",
    tags: ["type", "specimen", "typography", "preview"],
    slug: "type-specimen-builder",
    icon: "FileType2"
  },
  {
    id: "tool-responsive-typography-clamp-generator",
    name: "Responsive Typography Clamp Generator",
    description: "Generate fluid typography values using CSS clamp() for responsive type systems.",
    category: "design-utils",
    tags: ["typography", "clamp", "responsive", "css"],
    slug: "responsive-typography-clamp-generator",
    icon: "Scaling"
  },
  {
    id: "tool-reading-width-calculator",
    name: "Reading Width Calculator",
    description: "Estimate comfortable text measure widths for article and documentation layouts.",
    category: "design-utils",
    tags: ["reading-width", "measure", "typography", "layout"],
    slug: "reading-width-calculator",
    icon: "Ruler"
  },
  {
    id: "tool-variable-font-axis-tester",
    name: "Variable Font Axis Tester",
    description: "Preview weight, width, and optical size axis combinations for variable fonts.",
    category: "design-utils",
    tags: ["variable-font", "axis", "typography", "preview"],
    slug: "variable-font-axis-tester",
    icon: "SlidersHorizontal"
  },
  {
    id: "tool-text-shadow-generator",
    name: "Text Shadow Generator",
    description: "Tune text-shadow treatments for hero headings, badges, and layered typography.",
    category: "design-utils",
    tags: ["text-shadow", "css", "typography", "generator"],
    slug: "text-shadow-generator",
    icon: "SunMedium"
  },
  {
    id: "tool-css-grid-builder",
    name: "CSS Grid Builder",
    description: "Visually construct CSS Grid layouts and export practical template rules.",
    category: "design-utils",
    tags: ["grid", "css", "layout", "builder"],
    slug: "css-grid-builder",
    icon: "Grid2x2"
  },
  {
    id: "tool-flexbox-playground",
    name: "Flexbox Playground",
    description: "Experiment with flex direction, wrapping, alignment, and spacing behaviors.",
    category: "design-utils",
    tags: ["flexbox", "css", "layout", "playground"],
    slug: "flexbox-playground",
    icon: "Rows3"
  },
  {
    id: "tool-spacing-scale-generator",
    name: "Spacing Scale Generator",
    description: "Generate a consistent spacing scale for padding, gaps, and layout rhythm.",
    category: "design-utils",
    tags: ["spacing", "scale", "design-system", "layout"],
    slug: "spacing-scale-generator",
    icon: "Space"
  },
  {
    id: "tool-container-padding-calculator",
    name: "Container/Padding Calculator",
    description: "Balance container widths and padding values for responsive page layouts.",
    category: "design-utils",
    tags: ["container", "padding", "layout", "calculator"],
    slug: "container-padding-calculator",
    icon: "SquareStack"
  },
  {
    id: "tool-aspect-ratio-helper",
    name: "Aspect Ratio Helper",
    description: "Work out consistent aspect-ratio values for images, media, and cards.",
    category: "design-utils",
    tags: ["aspect-ratio", "media", "layout", "helper"],
    slug: "aspect-ratio-helper",
    icon: "Ratio"
  },
  {
    id: "tool-breakpoint-preview-tool",
    name: "Breakpoint Preview Tool",
    description: "Preview layout decisions across common viewport breakpoint ranges.",
    category: "design-utils",
    tags: ["breakpoints", "responsive", "preview", "layout"],
    slug: "breakpoint-preview-tool",
    icon: "MonitorCog"
  },
  {
    id: "tool-z-index-scale-planner",
    name: "Z-index Scale Planner",
    description: "Plan a clean z-index hierarchy for overlays, nav, modals, and popovers.",
    category: "design-utils",
    tags: ["z-index", "scale", "layers", "ui"],
    slug: "z-index-scale-planner",
    icon: "Layers3"
  },
  {
    id: "tool-layout-alignment-visualizer",
    name: "Layout Alignment Visualizer",
    description: "Visualize alignment rules and element relationships across layout groups.",
    category: "design-utils",
    tags: ["alignment", "layout", "visualizer", "ui"],
    slug: "layout-alignment-visualizer",
    icon: "AlignCenter"
  },
  {
    id: "tool-neumorphism-generator",
    name: "Neumorphism Generator",
    description: "Generate soft neumorphic shadows and highlights for raised or inset surfaces.",
    category: "design-utils",
    tags: ["neumorphism", "shadow", "css", "effects"],
    slug: "neumorphism-generator",
    icon: "CircleEllipsis"
  },
  {
    id: "tool-skeleton-loader-generator",
    name: "Skeleton Loader Generator",
    description: "Build loading placeholders with shimmer styles for interface states.",
    category: "design-utils",
    tags: ["skeleton", "loader", "ui", "generator"],
    slug: "skeleton-loader-generator",
    icon: "LoaderCircle"
  },
  {
    id: "tool-css-filter-playground",
    name: "CSS Filter Playground",
    description: "Preview CSS filter chains for blur, brightness, contrast, and image treatment.",
    category: "design-utils",
    tags: ["css-filter", "effects", "image", "playground"],
    slug: "css-filter-playground",
    icon: "Sliders"
  },
  {
    id: "tool-backdrop-blur-generator",
    name: "Backdrop Blur Generator",
    description: "Generate backdrop-filter blur combinations for overlays and frosted UI layers.",
    category: "design-utils",
    tags: ["backdrop-blur", "css", "glass", "generator"],
    slug: "backdrop-blur-generator",
    icon: "PanelsTopLeft"
  },
  {
    id: "tool-noise-grain-background-generator",
    name: "Noise/Grain Background Generator",
    description: "Create subtle grain and noise overlays for textured backgrounds.",
    category: "design-utils",
    tags: ["noise", "grain", "background", "texture"],
    slug: "noise-grain-background-generator",
    icon: "ScanLine"
  },
  {
    id: "tool-pattern-background-generator",
    name: "Pattern Background Generator",
    description: "Generate repeatable pattern backgrounds for sections, cards, and landing pages.",
    category: "design-utils",
    tags: ["pattern", "background", "generator", "css"],
    slug: "pattern-background-generator",
    icon: "Wallpaper"
  },
  {
    id: "tool-blob-shape-generator",
    name: "Blob Shape Generator",
    description: "Generate organic blob shapes for decorative graphics and layout accents.",
    category: "design-utils",
    tags: ["blob", "shape", "svg", "generator"],
    slug: "blob-shape-generator",
    icon: "Shapes"
  },
  {
    id: "tool-svg-wave-divider-generator",
    name: "SVG Wave Divider Generator",
    description: "Create SVG wave separators for section transitions and hero layouts.",
    category: "design-utils",
    tags: ["svg", "wave", "divider", "generator"],
    slug: "svg-wave-divider-generator",
    icon: "Waves"
  },
  {
    id: "tool-mask-image-overlay-generator",
    name: "Mask/Image Overlay Generator",
    description: "Build CSS mask and image-overlay treatments for richer visual layering.",
    category: "design-utils",
    tags: ["mask", "image", "overlay", "css"],
    slug: "mask-image-overlay-generator",
    icon: "ImagePlus"
  },
  {
    id: "tool-svg-path-visualizer",
    name: "SVG Path Visualizer",
    description: "Inspect and preview SVG path commands with a clearer visual representation.",
    category: "design-utils",
    tags: ["svg", "path", "visualizer", "vector"],
    slug: "svg-path-visualizer",
    icon: "Route"
  },
  {
    id: "tool-svg-icon-wrapper-generator",
    name: "SVG Icon Wrapper Generator",
    description: "Wrap SVG assets into reusable icon component patterns and containers.",
    category: "design-utils",
    tags: ["svg", "icon", "wrapper", "generator"],
    slug: "svg-icon-wrapper-generator",
    icon: "BadgePlus"
  },
  {
    id: "tool-polygon-shape-builder",
    name: "Polygon/Shape Builder",
    description: "Create custom polygons and shapes for CSS, SVG, and decorative layouts.",
    category: "design-utils",
    tags: ["polygon", "shape", "builder", "vector"],
    slug: "polygon-shape-builder",
    icon: "Pentagon"
  },
  {
    id: "tool-bezier-curve-editor",
    name: "Bezier Curve Editor",
    description: "Adjust cubic-bezier curves visually for motion and animation timing.",
    category: "design-utils",
    tags: ["bezier", "curve", "animation", "editor"],
    slug: "bezier-curve-editor",
    icon: "Spline"
  },
  {
    id: "tool-border-image-mask-builder",
    name: "Border/Image Mask Builder",
    description: "Build border-image and mask combinations for unusual framed interface styles.",
    category: "design-utils",
    tags: ["border-image", "mask", "builder", "css"],
    slug: "border-image-mask-builder",
    icon: "Frame"
  },
  {
    id: "tool-favicon-app-icon-previewer",
    name: "Favicon/App Icon Previewer",
    description: "Preview app icons, favicons, and small-brand assets across common use cases.",
    category: "design-utils",
    tags: ["favicon", "app-icon", "preview", "branding"],
    slug: "favicon-app-icon-previewer",
    icon: "AppWindow"
  },
  {
    id: "tool-viewbox-helper",
    name: "ViewBox Helper",
    description: "Understand and generate SVG viewBox values for scalable graphic assets.",
    category: "design-utils",
    tags: ["viewbox", "svg", "helper", "vector"],
    slug: "viewbox-helper",
    icon: "Scan"
  },
  {
    id: "tool-svg-optimizer-preview",
    name: "SVG Optimizer Preview",
    description: "Preview simplified SVG output and cleanup opportunities before export.",
    category: "design-utils",
    tags: ["svg", "optimize", "preview", "export"],
    slug: "svg-optimizer-preview",
    icon: "Shrink"
  },
  {
    id: "tool-design-token-generator",
    name: "Design Token Generator",
    description: "Generate token sets for color, spacing, type, radius, and layered UI systems.",
    category: "design-utils",
    tags: ["design-tokens", "generator", "system", "ui"],
    slug: "design-token-generator",
    icon: "Blocks"
  },
  {
    id: "tool-css-variables-exporter",
    name: "CSS Variables Exporter",
    description: "Export palette and sizing decisions as organized CSS custom properties.",
    category: "design-utils",
    tags: ["css-variables", "export", "tokens", "css"],
    slug: "css-variables-exporter",
    icon: "Variable"
  },
  {
    id: "tool-tailwind-theme-token-helper",
    name: "Tailwind Theme Token Helper",
    description: "Translate visual decisions into a cleaner Tailwind theme token structure.",
    category: "design-utils",
    tags: ["tailwind", "tokens", "theme", "helper"],
    slug: "tailwind-theme-token-helper",
    icon: "Wind"
  },
  {
    id: "tool-component-state-previewer",
    name: "Component State Previewer",
    description: "Preview hover, focus, disabled, active, and error states for UI components.",
    category: "design-utils",
    tags: ["components", "states", "preview", "ui"],
    slug: "component-state-previewer",
    icon: "Component"
  },
  {
    id: "tool-button-style-generator",
    name: "Button Style Generator",
    description: "Generate button variants with readable hierarchy, spacing, and interaction states.",
    category: "design-utils",
    tags: ["button", "ui", "generator", "components"],
    slug: "button-style-generator",
    icon: "MousePointerSquare"
  },
  {
    id: "tool-card-style-generator",
    name: "Card Style Generator",
    description: "Build card surfaces with border, padding, shadow, and layering decisions.",
    category: "design-utils",
    tags: ["card", "ui", "generator", "layout"],
    slug: "card-style-generator",
    icon: "PanelsTopLeft"
  },
  {
    id: "tool-form-theme-builder",
    name: "Form Theme Builder",
    description: "Style inputs, labels, validation states, and helper text as a form system.",
    category: "design-utils",
    tags: ["form", "theme", "builder", "ui"],
    slug: "form-theme-builder",
    icon: "FormInput"
  },
  {
    id: "tool-dark-light-token-comparer",
    name: "Dark/Light Token Comparer",
    description: "Compare parallel dark and light token sets for consistency and contrast.",
    category: "design-utils",
    tags: ["dark-mode", "light-mode", "tokens", "comparison"],
    slug: "dark-light-token-comparer",
    icon: "SunMoon"
  },
  {
    id: "tool-focus-ring-generator",
    name: "Focus Ring Generator",
    description: "Generate focus ring treatments that stay visible and accessible across surfaces.",
    category: "design-utils",
    tags: ["focus-ring", "accessibility", "generator", "ui"],
    slug: "focus-ring-generator",
    icon: "Focus"
  },
  {
    id: "tool-touch-target-checker",
    name: "Touch Target Checker",
    description: "Check whether buttons and controls meet comfortable touch target sizes.",
    category: "design-utils",
    tags: ["touch-target", "accessibility", "ui", "checker"],
    slug: "touch-target-checker",
    icon: "Hand"
  },
  {
    id: "tool-accessible-form-color-checker",
    name: "Accessible Form Color Checker",
    description: "Check form state colors for readability, semantics, and accessible contrast.",
    category: "design-utils",
    tags: ["forms", "accessibility", "colors", "checker"],
    slug: "accessible-form-color-checker",
    icon: "CheckCheck"
  },
  {
    id: "tool-motion-safe-animation-helper",
    name: "Motion-safe Animation Helper",
    description: "Preview motion-safe animation approaches that respect reduced-motion preferences.",
    category: "design-utils",
    tags: ["motion", "animation", "accessibility", "helper"],
    slug: "motion-safe-animation-helper",
    icon: "Move"
  },
  {
    id: "tool-contrast-pair-finder",
    name: "Contrast Pair Finder",
    description: "Find usable foreground and background combinations with strong contrast ratios.",
    category: "design-utils",
    tags: ["contrast", "colors", "accessibility", "finder"],
    slug: "contrast-pair-finder",
    icon: "Contrast"
  },
  {
    id: "tool-semantic-color-ramp-builder",
    name: "Semantic Color Ramp Builder",
    description: "Build semantic ramps for success, warning, error, info, and neutral states.",
    category: "design-utils",
    tags: ["semantic-colors", "ramp", "system", "ui"],
    slug: "semantic-color-ramp-builder",
    icon: "Palette"
  },
  {
    id: "tool-browser-frame-preview",
    name: "Browser Frame Preview",
    description: "Preview interface shots inside a lightweight browser-frame presentation.",
    category: "design-utils",
    tags: ["browser-frame", "preview", "mockup", "presentation"],
    slug: "browser-frame-preview",
    icon: "AppWindow"
  },
  {
    id: "tool-device-mock-frame-generator",
    name: "Device Mock Frame Generator",
    description: "Wrap screenshots in simple device frames for previews and landing pages.",
    category: "design-utils",
    tags: ["device-frame", "mockup", "preview", "screenshots"],
    slug: "device-mock-frame-generator",
    icon: "SmartphoneNfc"
  },
  {
    id: "tool-open-graph-image-previewer",
    name: "Open Graph Image Previewer",
    description: "Preview social image layouts and content hierarchy for open graph assets.",
    category: "design-utils",
    tags: ["open-graph", "social", "preview", "image"],
    slug: "open-graph-image-previewer",
    icon: "ImageUp"
  },
  {
    id: "tool-avatar-placeholder-generator",
    name: "Avatar Placeholder Generator",
    description: "Generate simple avatar placeholders for user states, profiles, and lists.",
    category: "design-utils",
    tags: ["avatar", "placeholder", "generator", "ui"],
    slug: "avatar-placeholder-generator",
    icon: "CircleUserRound"
  },
  {
    id: "tool-logo-spacing-clearspace-visualizer",
    name: "Logo Spacing/Clearspace Visualizer",
    description: "Visualize logo clearspace and surrounding layout rules for branding systems.",
    category: "design-utils",
    tags: ["logo", "spacing", "branding", "visualizer"],
    slug: "logo-spacing-clearspace-visualizer",
    icon: "Badge"
  },
  {
    id: "tool-app-screenshot-frame-tool",
    name: "App Screenshot Frame Tool",
    description: "Frame and present application screenshots in cleaner product marketing layouts.",
    category: "design-utils",
    tags: ["screenshots", "frame", "presentation", "marketing"],
    slug: "app-screenshot-frame-tool",
    icon: "MonitorDot"
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
