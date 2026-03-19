import type { Prompt } from "@/types";

export const prompts: Prompt[] = [
  {
    id: "prompt-coding-review",
    title: "PR Review Assistant",
    description: "Review a change for correctness, risk, and missing tests.",
    category: "coding",
    tags: ["review", "tests", "bugs"],
    prompt: "You are a senior engineer reviewing a pull request. Analyze the code or diff below for bugs, regressions, edge cases, maintainability issues, and missing tests. Return findings ordered by severity. For each finding include: title, why it matters, a concrete failure scenario, and a recommended fix. Keep any summary brief and focus on actionable review comments.\n\nInput:\n{{input}}"
  },
  {
    id: "prompt-coding-refactor",
    title: "Refactor Planner",
    description: "Turn a messy implementation into a low-risk refactor plan.",
    category: "coding",
    tags: ["refactor", "planning", "architecture"],
    prompt: "Act as a staff engineer planning a safe refactor. Study the code below and produce a phased refactor plan with: current problems, target design, migration steps, testing strategy, rollout risks, and the smallest valuable first step. Optimize for incremental delivery and minimal breakage.\n\nCode:\n{{input}}"
  },
  {
    id: "prompt-coding-api",
    title: "API Design Critique",
    description: "Critique an endpoint or schema for usability and future growth.",
    category: "coding",
    tags: ["api", "backend", "design"],
    prompt: "Review the API draft below as if you were the lead backend engineer. Evaluate naming, consistency, versioning, auth implications, validation, pagination, error design, and future extensibility. Then propose a revised version with tradeoffs explained.\n\nAPI draft:\n{{input}}"
  },
  {
    id: "prompt-coding-testplan",
    title: "Test Plan Generator",
    description: "Generate unit, integration, and end-to-end tests from requirements.",
    category: "coding",
    tags: ["testing", "qa", "coverage"],
    prompt: "Create a test plan from the requirements below. Include happy paths, edge cases, failure states, permission scenarios, and regression checks. Label each suggested test as unit, integration, or end-to-end.\n\nRequirements:\n{{input}}"
  },
  {
    id: "prompt-coding-migration",
    title: "Migration Checklist",
    description: "Plan a schema or platform migration with rollback safety.",
    category: "coding",
    tags: ["migration", "database", "ops"],
    prompt: "Create a migration checklist for the change below. Include prerequisites, sequencing, data safety checks, rollback steps, monitoring, and post-migration validation. Assume the migration must be done with minimal downtime.\n\nMigration context:\n{{input}}"
  },
  {
    id: "prompt-writing-blog",
    title: "Technical Blog Draft",
    description: "Turn notes into a practical technical article.",
    category: "writing",
    tags: ["blog", "content", "technical-writing"],
    prompt: "Write a technical blog post using the notes below. Include a strong introduction, clear subheadings, worked examples, key takeaways, and a practical conclusion. Keep the tone confident and helpful rather than promotional.\n\nNotes:\n{{input}}"
  },
  {
    id: "prompt-writing-rewrite",
    title: "Audience Rewrite",
    description: "Rewrite text for a different audience and tone.",
    category: "writing",
    tags: ["rewrite", "tone", "audience"],
    prompt: "Rewrite the text below for the specified audience and tone. Preserve the core meaning, improve clarity, remove filler, and tighten the structure. After the rewrite, add a short note summarizing the biggest changes you made.\n\nAudience and tone:\n{{audience}}\n\nOriginal text:\n{{input}}"
  },
  {
    id: "prompt-writing-email",
    title: "Executive Email Writer",
    description: "Draft a concise, high-signal email update.",
    category: "writing",
    tags: ["email", "executive", "communication"],
    prompt: "Write an executive-ready email from the context below. Keep it concise, direct, and high-signal. Include the situation, what changed, current risks, and the one decision or action needed from the reader.\n\nContext:\n{{input}}"
  },
  {
    id: "prompt-writing-jobpost",
    title: "Job Description Builder",
    description: "Create a realistic job post without buzzword spam.",
    category: "writing",
    tags: ["hiring", "job-post", "recruiting"],
    prompt: "Write a job description using the hiring brief below. Include role summary, responsibilities, must-have skills, nice-to-have skills, and what success looks like in the first 90 days. Keep the expectations realistic and avoid vague corporate language.\n\nHiring brief:\n{{input}}"
  },
  {
    id: "prompt-writing-release",
    title: "Release Notes Writer",
    description: "Convert changelog bullets into polished release notes.",
    category: "writing",
    tags: ["release-notes", "product", "docs"],
    prompt: "Turn the raw release details below into polished release notes. Organize them into improvements, fixes, and noteworthy changes. Make the writing clear for product users, not just engineers.\n\nRelease details:\n{{input}}"
  },
  {
    id: "prompt-analysis-research",
    title: "Research Brief",
    description: "Build a focused research plan with scope and source guidance.",
    category: "analysis",
    tags: ["research", "brief", "sources"],
    prompt: "Prepare a research brief for the topic below. Include the objective, key questions, scope boundaries, recommended source types, assumptions to validate, and an outline for the final deliverable. Optimize for a practical investigation rather than a generic summary.\n\nTopic:\n{{input}}"
  },
  {
    id: "prompt-analysis-competitor",
    title: "Competitor Analysis",
    description: "Compare products with a consistent evaluation framework.",
    category: "analysis",
    tags: ["competition", "market", "strategy"],
    prompt: "Analyze the competitors listed below. Create a comparison table covering positioning, target user, pricing, strengths, weaknesses, differentiators, and likely blind spots. Finish with strategic opportunities for our product.\n\nCompetitors and context:\n{{input}}"
  },
  {
    id: "prompt-analysis-risk",
    title: "Risk Register Generator",
    description: "Turn a project overview into a structured risk register.",
    category: "analysis",
    tags: ["risk", "planning", "delivery"],
    prompt: "Assess the project below and produce a risk register. For each risk include probability, impact, leading indicators, mitigation steps, contingency plan, and an owner role. Prioritize risks that could materially affect timeline, quality, or trust.\n\nProject:\n{{input}}"
  },
  {
    id: "prompt-analysis-metrics",
    title: "Metric Review",
    description: "Interpret metrics and suggest next actions.",
    category: "analysis",
    tags: ["metrics", "analysis", "reporting"],
    prompt: "Review the metrics below and explain what they suggest. Highlight anomalies, possible causes, what needs validation, and the most useful next actions. Present the result in a way that both product and engineering stakeholders can understand.\n\nMetrics:\n{{input}}"
  },
  {
    id: "prompt-analysis-retro",
    title: "Sprint Retrospective Synthesizer",
    description: "Turn team notes into patterns and next-sprint experiments.",
    category: "analysis",
    tags: ["retro", "team", "process"],
    prompt: "Use the retrospective notes below to identify patterns. Summarize what went well, what did not, likely root causes, and three specific experiments the team should try next sprint. Keep the output practical and implementation-ready.\n\nRetrospective notes:\n{{input}}"
  },
  {
    id: "prompt-system-role",
    title: "System Prompt Generator",
    description: "Create a robust system prompt from requirements.",
    category: "system prompts",
    tags: ["system", "behavior", "assistant"],
    prompt: "Create a production-grade system prompt for an AI assistant using the requirements below. Include role, priorities, constraints, formatting rules, escalation rules, and examples of ideal behavior. Keep it operational and specific rather than generic.\n\nRequirements:\n{{input}}"
  },
  {
    id: "prompt-system-support",
    title: "Support Agent System Prompt",
    description: "Define behavior for a calm, helpful support assistant.",
    category: "system prompts",
    tags: ["support", "system", "customer-service"],
    prompt: "Write a system prompt for a customer support AI. It should be empathetic, concise, honest about uncertainty, strict about not inventing account details, and clear about when to escalate to a human. Include formatting rules and examples.\n\nContext:\n{{input}}"
  },
  {
    id: "prompt-system-tutor",
    title: "Tutor System Prompt",
    description: "Build a teaching-oriented system prompt with pacing controls.",
    category: "system prompts",
    tags: ["tutor", "education", "system"],
    prompt: "Create a system prompt for an AI tutor. The tutor should adapt to skill level, avoid giving away answers too quickly, ask guiding questions when useful, and summarize lessons clearly. Include constraints, interaction style, and example responses.\n\nTeaching scope:\n{{input}}"
  },
  {
    id: "prompt-system-coder",
    title: "Coding Agent System Prompt",
    description: "Shape the behavior of an implementation-focused coding assistant.",
    category: "system prompts",
    tags: ["coding-agent", "system", "developer-tools"],
    prompt: "Write a system prompt for a coding assistant that works in a shared repository. It should inspect context before editing, avoid reverting unrelated changes, explain decisions succinctly, verify work when possible, and prioritize shipping complete fixes over partial analysis.\n\nRepository context:\n{{input}}"
  },
  {
    id: "prompt-system-moderation",
    title: "Moderation Policy Prompt",
    description: "Create a policy-enforcing moderator instruction set.",
    category: "system prompts",
    tags: ["moderation", "policy", "safety"],
    prompt: "Create a system prompt for a moderation assistant that classifies user content against policy. The prompt should emphasize consistency, careful reading, explicit uncertainty handling, and a structured output format containing category, confidence, reasoning summary, and escalation guidance.\n\nPolicy notes:\n{{input}}"
  },
  {
    id: "prompt-debugging-bug",
    title: "Bug Reproduction Guide",
    description: "Turn a vague issue report into reproducible steps and hypotheses.",
    category: "debugging",
    tags: ["bug", "repro", "debugging"],
    prompt: "You are a debugging assistant. Rewrite the bug report below into a clear reproduction guide. Include environment assumptions, exact steps, expected result, actual result, likely root causes ranked by probability, and the next three debugging actions.\n\nBug report:\n{{input}}"
  },
  {
    id: "prompt-debugging-logs",
    title: "Log Triage Prompt",
    description: "Extract likely failure signals from noisy logs.",
    category: "debugging",
    tags: ["logs", "triage", "incident"],
    prompt: "Analyze the logs below and identify the most likely failure point. Separate symptoms from root-cause hypotheses, cite the most important log lines, suggest what to inspect next, and call out any misleading noise that could waste time.\n\nLogs:\n{{input}}"
  },
  {
    id: "prompt-debugging-performance",
    title: "Performance Investigation",
    description: "Guide a performance debugging session.",
    category: "debugging",
    tags: ["performance", "profiling", "latency"],
    prompt: "Investigate the performance issue described below. Provide likely bottlenecks, what data to capture, how to isolate the slow path, and an ordered debugging plan. Include both application-level and infrastructure-level possibilities where relevant.\n\nIssue:\n{{input}}"
  },
  {
    id: "prompt-debugging-regression",
    title: "Regression Isolation",
    description: "Plan how to narrow down a newly introduced regression.",
    category: "debugging",
    tags: ["regression", "bisect", "qa"],
    prompt: "The behavior below regressed recently. Propose a strategy to isolate the change that introduced it. Include likely scope, observability gaps, experiments to run, and how to use version history or feature flags to narrow it down safely.\n\nRegression details:\n{{input}}"
  },
  {
    id: "prompt-debugging-jwt",
    title: "Auth Failure Debugger",
    description: "Troubleshoot broken authentication or authorization flows.",
    category: "debugging",
    tags: ["auth", "jwt", "permissions"],
    prompt: "Diagnose the authentication or authorization issue below. Explain likely causes across tokens, sessions, cookies, middleware, clock skew, permissions, and environment differences. Return a debugging checklist ordered from fastest validation to deepest investigation.\n\nIssue details:\n{{input}}"
  }
];
