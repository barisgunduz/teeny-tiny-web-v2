"use client";

import { Moon, Stars } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [glowMode, setGlowMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("ttw-glow-mode");
    setGlowMode(stored === "on");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.glow = glowMode ? "on" : "off";
    window.localStorage.setItem("ttw-glow-mode", glowMode ? "on" : "off");
  }, [glowMode]);

  return (
    <button
      type="button"
      onClick={() => setGlowMode((current) => !current)}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#27272a] bg-[#111113] px-3 text-sm text-[#a1a1aa] transition hover:border-[#3f3f46] hover:text-white"
      aria-label="Toggle subtle glow mode"
      aria-pressed={glowMode}
    >
      {glowMode ? <Stars className="h-4 w-4 text-[#22c55e]" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">Glow</span>
    </button>
  );
}
