"use client";

import { useMemo, useState } from "react";

import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const ports = [
  { port: 20, service: "FTP Data", description: "File Transfer Protocol data channel." },
  { port: 21, service: "FTP Control", description: "File Transfer Protocol control channel." },
  { port: 22, service: "SSH", description: "Secure shell remote access." },
  { port: 25, service: "SMTP", description: "Mail transfer between servers." },
  { port: 53, service: "DNS", description: "Domain name resolution over UDP/TCP." },
  { port: 80, service: "HTTP", description: "Unencrypted web traffic." },
  { port: 110, service: "POP3", description: "Post Office Protocol mail retrieval." },
  { port: 143, service: "IMAP", description: "Internet Message Access Protocol." },
  { port: 443, service: "HTTPS", description: "Encrypted web traffic over TLS." },
  { port: 3306, service: "MySQL", description: "Default MySQL database port." },
  { port: 5432, service: "PostgreSQL", description: "Default PostgreSQL database port." },
  { port: 6379, service: "Redis", description: "Default Redis server port." },
  { port: 8080, service: "HTTP Alt", description: "Common alternate HTTP app port." },
  { port: 27017, service: "MongoDB", description: "Default MongoDB server port." }
];

export function PortReferenceTool() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return ports.filter((item) => `${item.port} ${item.service} ${item.description}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <ToolShell
      title="Port Reference"
      description="Search common network ports and quickly identify the service or protocol typically associated with each one."
    >
      <ToolPanel title="Search ports">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by port or service..." className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 text-sm text-[#e4e4e7] outline-none placeholder:text-[#5f5f66] focus:border-[#22c55e]" />
      </ToolPanel>
      <div className="overflow-hidden rounded-2xl border border-[#27272a]">
        <div className="grid grid-cols-[100px_180px_minmax(0,1fr)] border-b border-[#27272a] bg-[#0d0d0f] px-4 py-3 text-xs font-mono uppercase tracking-[0.24em] text-[#71717a]">
          <span>Port</span>
          <span>Service</span>
          <span>Description</span>
        </div>
        {filtered.map((item) => (
          <div key={item.port} className="grid grid-cols-1 gap-2 border-t border-[#1b1b1f] px-4 py-4 md:grid-cols-[100px_180px_minmax(0,1fr)]">
            <span className="font-mono text-sm text-[#22d3ee]">{item.port}</span>
            <span className="text-sm font-medium text-[#f5f5f5]">{item.service}</span>
            <span className="text-sm text-[#8b8b93]">{item.description}</span>
          </div>
        ))}
      </div>
    </ToolShell>
  );
}
