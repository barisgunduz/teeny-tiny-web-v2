"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#27272a] bg-[#111113] px-3 text-sm text-[#a1a1aa] transition hover:border-[#3f3f46] hover:text-white"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
    >
      {isDark ? <Sun className="h-4 w-4 text-[#facc15]" /> : <Moon className="h-4 w-4 text-[#6366f1]" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
