"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#111113]/95 px-4 py-3 text-sm text-[#d4d4d8] shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-[#3f3f46] hover:text-white"
    >
      <ArrowUp className="h-4 w-4" />
      <span>Back to top</span>
    </button>
  );
}
