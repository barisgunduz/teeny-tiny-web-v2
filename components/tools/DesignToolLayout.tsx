import type { ReactNode } from "react";

import { ToolShell } from "@/components/tools/ToolShell";

interface DesignToolLayoutProps {
  title: string;
  description: string;
  preview: ReactNode;
  controls: ReactNode;
}

export function DesignToolLayout({ title, description, preview, controls }: DesignToolLayoutProps) {
  return (
    <ToolShell title={title} description={description}>
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-[#27272a] bg-[#0d0d0f] p-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Live preview</p>
          {preview}
        </div>
        <div className="rounded-3xl border border-[#27272a] bg-[#0d0d0f] p-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Controls</p>
          <div className="space-y-4">{controls}</div>
        </div>
      </div>
    </ToolShell>
  );
}
