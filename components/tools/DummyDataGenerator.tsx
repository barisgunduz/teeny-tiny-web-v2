"use client";

import { Download, RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";

import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const firstNames = ["Ada", "Linus", "Grace", "Mina", "Jules", "Sam", "Nora", "Kai", "Iris", "Leo"];
const lastNames = ["Nguyen", "Hopper", "Turing", "Silva", "Khan", "Patel", "Morgan", "Lee", "Chen", "Lopez"];
const streets = ["Maple Ave", "Oak Street", "Pine Road", "Sunset Blvd", "River Lane", "Willow Way"];
const cities = ["Austin", "Berlin", "Tokyo", "Lisbon", "Toronto", "Istanbul", "Seoul"];
const products = ["Mechanical Keyboard", "4K Monitor", "USB-C Hub", "Desk Lamp", "Noise Cancelling Headphones", "Laptop Stand"];
const countries = ["United States", "Germany", "Japan", "Brazil", "Canada", "Turkey", "South Korea", "France"];
const colorNames = ["Sky", "Mint", "Coral", "Lavender", "Amber", "Slate", "Rose", "Cyan"];
const loremWords = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");

const typeLabels: Record<string, string> = {
  users: "Users",
  products: "Products",
  "lorem-ipsum": "Lorem Ipsum",
  uuids: "UUIDs",
  "ip-addresses": "IP Addresses",
  colors: "Colors",
  countries: "Countries"
};

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
}

function randomUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function generateUsers(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const first = randomItem(firstNames);
    const last = randomItem(lastNames);
    const city = randomItem(cities);
    const street = `${randomInt(10, 999)} ${randomItem(streets)}`;
    const email = `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.dev`;

    return {
      id: index + 1,
      name: `${first} ${last}`,
      email,
      phone: `+1-555-${randomInt(100, 999)}-${randomInt(1000, 9999)}`,
      address: `${street}, ${city}`
    };
  });
}

function generateProducts(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: randomItem(products),
    sku: `SKU-${randomInt(1000, 9999)}`,
    price: Number((Math.random() * 250 + 10).toFixed(2)),
    inStock: Math.random() > 0.35
  }));
}

function generateLorem(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    paragraph: Array.from({ length: randomInt(24, 48) }, () => randomItem(loremWords)).join(" ") + "."
  }));
}

function generateUuids(count: number) {
  return Array.from({ length: count }, (_, index) => ({ id: index + 1, uuid: randomUuid() }));
}

function generateIpAddresses(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    ipv4: `${randomInt(1, 223)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(1, 254)}`,
    ipv6: Array.from({ length: 8 }, () => randomInt(0, 65535).toString(16)).join(":")
  }));
}

function generateColors(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `${randomItem(colorNames)} ${index + 1}`,
    hex: randomHex()
  }));
}

function generateCountries(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    country: randomItem(countries),
    code: String.fromCharCode(65 + (index % 26), 65 + ((index + 5) % 26))
  }));
}

const generatorMap: Record<string, (count: number) => Record<string, unknown>[]> = {
  users: generateUsers,
  products: generateProducts,
  "lorem-ipsum": generateLorem,
  uuids: generateUuids,
  "ip-addresses": generateIpAddresses,
  colors: generateColors,
  countries: generateCountries
};

function toCsv(rows: Record<string, unknown>[]) {
  if (!rows.length) {
    return "";
  }

  const headers = Object.keys(rows[0]);
  const escape = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`;

  return [headers.join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n");
}

function toSql(tableName: string, rows: Record<string, unknown>[]) {
  if (!rows.length) {
    return "";
  }

  const headers = Object.keys(rows[0]);
  const formatValue = (value: unknown) => {
    if (typeof value === "number") return String(value);
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    return `'${String(value ?? "").replace(/'/g, "''")}'`;
  };

  return rows
    .map((row) => `INSERT INTO ${tableName} (${headers.join(", ")}) VALUES (${headers.map((header) => formatValue(row[header])).join(", ")});`)
    .join("\n");
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function DummyDataGenerator({ type }: { type: string }) {
  const [count, setCount] = useState(12);
  const [format, setFormat] = useState<"JSON" | "CSV" | "SQL">("JSON");
  const [seed, setSeed] = useState(0);

  const data = useMemo(() => {
    void seed;
    const generator = generatorMap[type];
    return generator ? generator(count) : [];
  }, [count, seed, type]);

  const output = useMemo(() => {
    if (format === "JSON") {
      return JSON.stringify(data, null, 2);
    }

    if (format === "CSV") {
      return toCsv(data);
    }

    return toSql(type.replace(/-/g, "_"), data);
  }, [data, format, type]);

  return (
    <ToolShell
      title={`${typeLabels[type] ?? "Dummy Data"} Generator`}
      description="Generate realistic-looking data directly in the browser, switch output formats, and export the result instantly."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ToolPanel title={`Count: ${count}`}>
          <input
            type="range"
            min="1"
            max="100"
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
            className="w-full accent-[#22c55e]"
          />
          <div className="mt-3 flex justify-between text-xs text-[#71717a]">
            <span>1</span>
            <span>100</span>
          </div>
        </ToolPanel>

        <ToolPanel title="Format">
          <div className="flex flex-wrap gap-3">
            {(["JSON", "CSV", "SQL"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFormat(item)}
                className={`rounded-xl border px-4 py-2 text-sm transition ${format === item ? "border-[#22c55e] bg-[#0f1a12] text-white" : "border-[#27272a] bg-[#0d0d0f] text-[#c4c4cb] hover:border-[#3f3f46]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </ToolPanel>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSeed((current) => current + 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
          Generate
        </button>
        <CopyButton value={output} label="Copy output" />
        <button
          type="button"
          onClick={() => downloadText(`${type}.${format.toLowerCase()}`, output)}
          className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
      </div>

      <ToolPanel title="Output" tone="green">
        <pre className="max-h-[540px] overflow-auto rounded-2xl border border-[#16341d] bg-black/20 p-4 font-mono text-sm text-[#bbf7d0]">{output}</pre>
      </ToolPanel>
    </ToolShell>
  );
}

