import type { ReactNode } from "react";

interface ToolShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ToolShell({ title, description, children }: ToolShellProps) {
  return (
    <section className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-6">
      <div className="mb-6 space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Browser Tool</p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">{title}</h2>
        <p className="max-w-3xl text-sm leading-6 text-[#8b8b93]">{description}</p>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export function ToolPanel({
  title,
  children,
  tone = "default"
}: {
  title: string;
  children: ReactNode;
  tone?: "default" | "green" | "blue" | "violet" | "rose";
}) {
  const tones = {
    default: "border-[#27272a] bg-[#0d0d0f]",
    green: "border-[#16341d] bg-[#0b120d]",
    blue: "border-[#1b3046] bg-[#0b1018]",
    violet: "border-[#2c2247] bg-[#100d1b]",
    rose: "border-[#482026] bg-[#180c0f]"
  };

  return (
    <div className={`rounded-2xl border p-4 ${tones[tone]}`}>
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">{title}</div>
      {children}
    </div>
  );
}
