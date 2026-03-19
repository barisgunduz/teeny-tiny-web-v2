"use client";

import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function ipToInt(ip: string) {
  const parts = ip.split(".").map(Number);

  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part) || part < 0 || part > 255)) {
    return null;
  }

  return (((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0;
}

function intToIp(value: number) {
  return [value >>> 24, (value >>> 16) & 255, (value >>> 8) & 255, value & 255].join(".");
}

export function SubnetCalculatorTool() {
  const [ip, setIp] = useState("192.168.1.10");
  const [cidr, setCidr] = useState("24");

  const details = useMemo(() => {
    const ipInt = ipToInt(ip);
    const prefix = Number(cidr);

    if (ipInt === null || Number.isNaN(prefix) || prefix < 0 || prefix > 32) {
      return null;
    }

    const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
    const network = ipInt & mask;
    const broadcast = network | (~mask >>> 0);
    const firstHost = prefix >= 31 ? network : network + 1;
    const lastHost = prefix >= 31 ? broadcast : broadcast - 1;
    const hosts = prefix >= 31 ? (prefix === 31 ? 2 : 1) : Math.max(2 ** (32 - prefix) - 2, 0);

    return {
      network: intToIp(network),
      broadcast: intToIp(broadcast),
      range: `${intToIp(firstHost)} - ${intToIp(lastHost)}`,
      hosts,
      mask: intToIp(mask)
    };
  }, [cidr, ip]);

  return (
    <ToolShell
      title="Subnet Calculator"
      description="Calculate network boundaries, host ranges, and broadcast addresses from an IPv4 address and CIDR prefix."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <ToolPanel title="IP address">
          <input value={ip} onChange={(event) => setIp(event.target.value)} className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" />
        </ToolPanel>
        <ToolPanel title="CIDR prefix">
          <input value={cidr} onChange={(event) => setCidr(event.target.value)} className="w-full rounded-2xl border border-[#27272a] bg-black/20 px-4 py-3 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]" />
        </ToolPanel>
      </div>

      {details ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Network", details.network],
            ["Broadcast", details.broadcast],
            ["Range", details.range],
            ["Usable hosts", String(details.hosts)],
            ["Subnet mask", details.mask]
          ].map(([label, value]) => (
            <ToolPanel key={label} title={label} tone="green">
              <div className="mb-3 flex justify-end">
                <CopyButton value={value} label="Copy" />
              </div>
              <p className="font-mono text-sm text-[#bbf7d0]">{value}</p>
            </ToolPanel>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#482026] bg-[#180c0f] p-4 text-sm text-[#fecaca]">Enter a valid IPv4 address and CIDR prefix.</div>
      )}
    </ToolShell>
  );
}
