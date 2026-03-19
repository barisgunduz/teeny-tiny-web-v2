"use client";

import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

type ParsedToken = {
  headerText: string;
  payloadText: string;
  signature: string;
  expiryLabel: string;
  expiryTone: "green" | "rose" | "default";
};

type DecodeResult = ParsedToken | { error: string } | null;

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function JWTDecoderTool() {
  const [token, setToken] = useState("");

  const decoded = useMemo<DecodeResult>(() => {
    if (!token.trim()) {
      return null;
    }

    const parts = token.split(".");

    if (parts.length < 2) {
      return { error: "JWT must include at least header and payload sections." };
    }

    try {
      const headerText = decodeBase64Url(parts[0]);
      const payloadText = decodeBase64Url(parts[1]);
      const header = JSON.parse(headerText);
      const payload = JSON.parse(payloadText);
      const signature = parts[2] ?? "";
      const now = Math.floor(Date.now() / 1000);

      let expiryLabel = "No exp claim";
      let expiryTone: ParsedToken["expiryTone"] = "default";

      if (typeof payload.exp === "number") {
        if (payload.exp > now) {
          expiryLabel = `Valid until ${new Date(payload.exp * 1000).toLocaleString()}`;
          expiryTone = "green";
        } else {
          expiryLabel = `Expired at ${new Date(payload.exp * 1000).toLocaleString()}`;
          expiryTone = "rose";
        }
      }

      return {
        headerText: JSON.stringify(header, null, 2),
        payloadText: JSON.stringify(payload, null, 2),
        signature,
        expiryLabel,
        expiryTone
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unable to decode token"
      };
    }
  }, [token]);

  const parsedToken: ParsedToken | null = decoded && "headerText" in decoded ? decoded : null;
  const isExpired = parsedToken?.expiryTone === "rose";

  return (
    <ToolShell
      title="JWT Decoder"
      description="Inspect JWT header and payload claims safely in the browser, review the signature segment, and check token expiry at a glance."
    >
      <ToolPanel title="Paste token">
        <textarea
          value={token}
          onChange={(event) => setToken(event.target.value.trim())}
          className="min-h-[140px] w-full rounded-2xl border border-[#27272a] bg-black/20 p-4 font-mono text-sm text-[#e4e4e7] outline-none focus:border-[#22c55e]"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          spellCheck={false}
        />
      </ToolPanel>

      {decoded && "error" in decoded ? (
        <div className="flex items-center gap-3 rounded-2xl border border-[#482026] bg-[#180c0f] p-4 text-sm text-[#fecaca]">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>{decoded.error}</span>
        </div>
      ) : null}

      {parsedToken ? (
        <>
          <div className={`flex items-center gap-3 rounded-2xl border p-4 text-sm ${isExpired ? "border-[#482026] bg-[#180c0f] text-[#fecaca]" : parsedToken.expiryTone === "green" ? "border-[#16341d] bg-[#0b120d] text-[#bbf7d0]" : "border-[#27272a] bg-[#0d0d0f] text-[#d4d4d8]"}`}>
            {isExpired ? <AlertTriangle className="h-4 w-4 shrink-0" /> : parsedToken.expiryTone === "green" ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <Clock3 className="h-4 w-4 shrink-0" />}
            <span>{parsedToken.expiryLabel}</span>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <ToolPanel title="Header" tone="blue">
              <div className="mb-3 flex justify-end">
                <CopyButton value={parsedToken.headerText} label="Copy" />
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-[#1b3046] bg-black/20 p-4 font-mono text-sm text-[#bfdbfe]">{parsedToken.headerText}</pre>
            </ToolPanel>

            <ToolPanel title="Payload" tone="violet">
              <div className="mb-3 flex justify-end">
                <CopyButton value={parsedToken.payloadText} label="Copy" />
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-[#2c2247] bg-black/20 p-4 font-mono text-sm text-[#ddd6fe]">{parsedToken.payloadText}</pre>
            </ToolPanel>

            <ToolPanel title="Signature" tone="green">
              <div className="mb-3 flex justify-end">
                <CopyButton value={parsedToken.signature} label="Copy" />
              </div>
              <pre className="overflow-x-auto break-all rounded-2xl border border-[#16341d] bg-black/20 p-4 font-mono text-sm text-[#bbf7d0]">{parsedToken.signature || "No signature section"}</pre>
            </ToolPanel>
          </div>
        </>
      ) : null}
    </ToolShell>
  );
}
