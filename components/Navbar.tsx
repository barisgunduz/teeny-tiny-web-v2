"use client";

import Link from "next/link";
import { Github, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Dev Tools", href: "/dev-tools" },
  { label: "Sheets", href: "/sheets" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Prompts", href: "/prompts" },
  { label: "Design", href: "/design" },
  { label: "IT", href: "/it" }
];

export function Navbar() {
  const pathname = usePathname();

  function openPalette() {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true
      })
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0a]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#27272a] bg-[#111113] font-mono text-sm font-semibold lowercase text-[#f5f5f5]">
            tt
          </div>
          <span className="hidden font-mono text-sm lowercase tracking-tight text-[#d4d4d8] sm:inline">
            teeny tiny web
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full border px-3 py-2 text-sm transition ${active ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#111113] text-[#a1a1aa] hover:border-[#3f3f46] hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-2 rounded-xl border border-[#27272a] bg-[#111113] px-3 py-2 text-sm text-[#a1a1aa] transition hover:border-[#3f3f46] hover:text-white sm:inline-flex"
          >
            <Search className="h-4 w-4" />
            <span className="font-mono">⌘K</span>
          </button>
          <Link
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#27272a] bg-[#111113] text-[#a1a1aa] transition hover:border-[#3f3f46] hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

