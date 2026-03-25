"use client";

import { AlertTriangle, KeyRound, ShieldOff } from "lucide-react";
import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

function encodeBase64Url(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

const SAMPLE_HEADER = `{
  "alg": "none",
  "typ": "JWT"
}`;

const SAMPLE_PAYLOAD = `{
  "sub": "1234567890",
  "name": "Teeny Tiny Web",
  "role": "developer",
  "iat": 1710000000,
  "exp": 1910000000
}`;

export function JWTGeneratorTool() {
  const [headerInput, setHeaderInput] = useState(SAMPLE_HEADER);
  const [payloadInput, setPayloadInput] = useState(SAMPLE_PAYLOAD);

  const result = useMemo(() => {
    try {
      const header = JSON.parse(headerInput);
      const payload = JSON.parse(payloadInput);
      const encodedHeader = encodeBase64Url(JSON.stringify(header));
      const encodedPayload = encodeBase64Url(JSON.stringify(payload));
      const token = `${encodedHeader}.${encodedPayload}.`;
      const now = Math.floor(Date.now() / 1000);

      let expiryLabel = "No exp claim";
      let expiryTone: "default" | "green" | "rose" = "default";

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
        token,
        encodedHeader,
        encodedPayload,
        expiryLabel,
        expiryTone,
        error: ""
      };
    } catch (error) {
      return {
        token: "",
        encodedHeader: "",
        encodedPayload: "",
        expiryLabel: "",
        expiryTone: "default" as const,
        error: error instanceof Error ? error.message : "Invalid JSON"
      };
    }
  }, [headerInput, payloadInput]);

  return (
    <ToolShell
      title="JWT Generator"
      description="Generate local JWT header and payload structures in the browser, inspect the encoded segments, and copy the resulting unsigned token instantly."
    >
      <div className="flex items-center gap-3 rounded-2xl border border-[#1b3046] bg-[#0b1018] p-4 text-sm text-[#bfdbfe]">
        <ShieldOff className="h-4 w-4 shrink-0" />
        <span>This tool creates an unsigned local token preview using `alg: none`. It does not sign or verify JWTs.</span>
      </div>

      {result.error ? (
        <div className="flex items-center gap-3 rounded-2xl border border-[#482026] bg-[#180c0f] p-4 text-sm text-[#fecaca]">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>{result.error}</span>
        </div>
      ) : null}

      {!result.error ? (
        <div className={`flex items-center gap-3 rounded-2xl border p-4 text-sm ${result.expiryTone === "rose" ? "border-[#482026] bg-[#180c0f] text-[#fecaca]" : result.expiryTone === "green" ? "border-[#16341d] bg-[#0b120d] text-[#bbf7d0]" : "border-[#27272a] bg-[#0d0d0f] text-[#d4d4d8]"}`}>
          <KeyRound className="h-4 w-4 shrink-0" />
          <span>{result.expiryLabel}</span>
        </div>
      ) : null}

      <div className="grid gap-4 xl:grid-cols-3">
        <ToolPanel title="Header" tone="blue">
          <textarea
            value={headerInput}
            onChange={(event) => setHeaderInput(event.target.value)}
            className={`min-h-[240px] w-full rounded-2xl border bg-black/20 p-4 font-mono text-sm outline-none ${result.error ? "border-[#ef4444] text-[#fecaca]" : "border-[#1b3046] text-[#bfdbfe] focus:border-[#22c55e]"}`}
            spellCheck={false}
          />
          <div className="mt-3 flex justify-end">
            <CopyButton value={result.encodedHeader} label="Copy encoded" />
          </div>
        </ToolPanel>

        <ToolPanel title="Payload" tone="violet">
          <textarea
            value={payloadInput}
            onChange={(event) => setPayloadInput(event.target.value)}
            className={`min-h-[240px] w-full rounded-2xl border bg-black/20 p-4 font-mono text-sm outline-none ${result.error ? "border-[#ef4444] text-[#fecaca]" : "border-[#2c2247] text-[#ddd6fe] focus:border-[#22c55e]"}`}
            spellCheck={false}
          />
          <div className="mt-3 flex justify-end">
            <CopyButton value={result.encodedPayload} label="Copy encoded" />
          </div>
        </ToolPanel>

        <ToolPanel title="Token" tone={result.error ? "rose" : "green"}>
          <textarea
            readOnly
            value={result.token}
            className={`min-h-[240px] w-full rounded-2xl border bg-black/20 p-4 font-mono text-sm outline-none ${result.error ? "border-[#ef4444] text-[#fecaca]" : "border-[#16341d] text-[#bbf7d0]"}`}
            spellCheck={false}
          />
          <div className="mt-3 flex justify-end">
            <CopyButton value={result.token} label="Copy token" />
          </div>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
