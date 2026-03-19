# teeny-tiny-web

A compact, search-first toolbox built with Next.js 14 for developers, designers, and technical teams. It combines browser-based utilities, cheatsheets, dummy data generators, roadmaps, AI prompts, and design helpers inside one fast, dark, keyboard-friendly interface.

## Overview

`teeny-tiny-web` is organized as a content-driven app. Most sections are powered by shared TypeScript data files, while the UI layer renders category hubs, dynamic detail pages, and interactive tools on top of that data.

Current sections include:

- Dev Tools
- Cheatsheets
- Dummy Data
- Roadmaps
- AI Prompts
- Productivity
- IT / Sysadmin
- Design Utilities

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- `cmdk` for the command palette
- `next-themes` for theme plumbing
- `fuse.js` for fuzzy search
- `lucide-react` for icons
- Geist and Geist Mono fonts

## Architecture

### App Routing

The app is split into category landing pages, dynamic content pages, and tool-specific interfaces.

- `app/page.tsx`
  Home page with search-first entry, featured tools, and category navigation.
- `app/dev-tools/page.tsx`
  Landing page for developer utilities.
- `app/sheets/page.tsx`
  Landing page for cheatsheets.
- `app/dummy-data/page.tsx`
  Landing page for dummy data generators.
- `app/roadmaps/page.tsx`
  Landing page for roadmap content.
- `app/productivity/page.tsx`
  Landing page for productivity-related tools.
- `app/it/page.tsx`
  Landing page for IT and sysadmin tools.
- `app/design/page.tsx`
  Landing page for design utilities.
- `app/prompts/page.tsx`
  Prompt library and prompt improver.
- `app/tools/[slug]/page.tsx`
  Dynamic route for general tool pages.
- `app/tools/design/[slug]/page.tsx`
  Dynamic route for design-specific tools.
- `app/tools/dummy-data/[type]/page.tsx`
  Dynamic route for dummy data generators.
- `app/sheets/[slug]/page.tsx`
  Dynamic route for cheatsheets.
- `app/roadmaps/[slug]/page.tsx`
  Dynamic route for roadmap details.

### Data Layer

The project is largely data-driven. These files define what appears in the UI:

- `lib/data/categories.ts`
  Category definitions, icon names, descriptions, and accent colors.
- `lib/data/tools.ts`
  Tool catalog used by homepage search, category pages, command palette, and dynamic routes.
- `lib/data/cheatsheets.ts`
  Cheatsheet content.
- `lib/data/prompts.ts`
  Prompt library content.
- `lib/data/roadmaps.ts`
  Roadmap definitions and steps.
- `lib/category-sections.ts`
  Grouping configuration for category landing pages.
- `lib/category-routes.ts`
  Canonical top-level routes for each content category.
- `lib/tool-routes.ts`
  Route resolver for tool/detail links.
- `lib/search.ts`
  Fuse.js-powered fuzzy search helper.

### UI Components

Shared interface building blocks live under `components/`.

- `components/Navbar.tsx`
  Sticky global navigation.
- `components/CommandPalette.tsx`
  Global search palette with keyboard shortcut support.
- `components/Breadcrumbs.tsx`
  Reusable breadcrumb navigation.
- `components/BackToTopButton.tsx`
  Scroll-aware back-to-top control.
- `components/categories/CategoryLanding.tsx`
  Reusable category hub page renderer.
- `components/cheatsheets/CheatsheetViewer.tsx`
  Cheatsheet table/search UI.
- `components/prompts/PromptLibrary.tsx`
  Prompt cards, filtering, modal, and prompt improver.
- `components/tools/*`
  Interactive browser-side tool implementations.

### Tool Rendering Strategy

There are three main rendering paths for tools:

1. General tools render through `app/tools/[slug]/page.tsx`.
2. Design tools render through `app/tools/design/[slug]/page.tsx`.
3. Dummy data tools render through `app/tools/dummy-data/[type]/page.tsx`.

This lets the app keep a shared catalog while still using specialized layouts where needed.

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  prompts/
  roadmaps/
  sheets/
  tools/
  design/
  dev-tools/
  dummy-data/
  it/
  productivity/
components/
  categories/
  cheatsheets/
  prompts/
  tools/
lib/
  data/
  search.ts
  category-routes.ts
  category-sections.ts
  tool-routes.ts
types/
  index.ts
```

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

## Content Workflows

### Add a New Tool

1. Add the tool metadata to `lib/data/tools.ts`.
2. If it belongs to the general tool system, create a component under `components/tools/`.
3. Wire the slug to a component in `app/tools/[slug]/page.tsx`.
4. If the tool belongs to a specialized section, update the matching route in `app/tools/design/[slug]/page.tsx` or `app/tools/dummy-data/[type]/page.tsx`.
5. If needed, place the tool into the right category group in `lib/category-sections.ts`.

### Add a Cheatsheet

1. Add the new cheatsheet object to `lib/data/cheatsheets.ts`.
2. Give it a unique `slug`, `title`, `category`, and `sections`.
3. The page under `app/sheets/[slug]/page.tsx` will pick it up automatically.
4. Add its slug into the proper section inside `lib/category-sections.ts` if you want it surfaced on the Sheets hub.

### Add a Roadmap

1. Add the roadmap to `lib/data/roadmaps.ts`.
2. Define a unique `slug`, `description`, and `steps`.
3. Each step should include `title`, `description`, `resources`, and `status`.
4. Add the roadmap slug into the Roadmaps grouping in `lib/category-sections.ts`.

## Search and Navigation

The app uses two main search entry points:

- Homepage search in `app/page.tsx`
- Global command palette in `components/CommandPalette.tsx`

Both use the shared tool data and route helpers, which keeps navigation consistent across the app.

## Creator

Built by **Baris Gunduz**.

- GitHub: [github.com/barisgunduz](https://github.com/barisgunduz)
- Portfolio: [barisgunduz.dev](https://barisgunduz.dev)
- X / Twitter: [x.com/barisgunduz](https://x.com/barisgunduz)
- LinkedIn: [linkedin.com/in/barisgunduz](https://linkedin.com/in/barisgunduz)

## Useful Links
- Repository: [github.com/barisgunduz/teeny-tiny-web](https://github.com/barisgunduz/teeny-tiny-web)
- Live Demo: [teeny-tiny-web.vercel.app](https://teeny-tiny-web.vercel.app)
- Issues: [github.com/barisgunduz/teeny-tiny-web/issues](https://github.com/barisgunduz/teeny-tiny-web/issues)
- Roadmap Board: [github.com/barisgunduz/teeny-tiny-web/projects](https://github.com/barisgunduz/teeny-tiny-web/projects)

## Credentials
- Vercel Project: `teeny-tiny-web`
- Production Domain: `https://teeny-tiny-web.vercel.app`

## Sponsors

Sponsor slots are open.

- Primary Sponsor: `Available`
- Tooling Sponsor: `Available`
- Hosting Sponsor: `Available`
- Community Sponsor: `Available`
- GitHub Sponsors: `https://github.com/sponsors/barisgunduz`
- Buy Me a Coffee: `https://buymeacoffee.com/barisgunduz`

## Notes

- Everything is designed to run browser-first for the interactive tools already implemented.
- Much of the catalog is intentionally data-driven, so new content can be added without rewriting the app shell.
- Some links in this README are placeholders and can be updated after the GitHub repository goes live.
