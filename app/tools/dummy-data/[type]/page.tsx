import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DummyDataGenerator } from "@/components/tools/DummyDataGenerator";

const supportedTypes = ["users", "products", "lorem-ipsum", "uuids", "ip-addresses", "colors", "countries"] as const;

export function generateStaticParams() {
  return supportedTypes.map((type) => ({ type }));
}

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  return {
    title: `${params.type} Dummy Data`,
    description: `Generate ${params.type} dummy data in JSON, CSV, or SQL.`
  };
}

export default function DummyDataPage({ params }: { params: { type: string } }) {
  if (!supportedTypes.includes(params.type as (typeof supportedTypes)[number])) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Dummy Data", href: "/dummy-data" },
            { label: params.type.replace(/-/g, " ") }
          ]}
        />

        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Dummy Data</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">{params.type.replace(/-/g, " ")}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8b8b93]">
                Generate browser-side data sets and export them as JSON, CSV, or SQL.
              </p>
            </div>
            <Link
              href="/dummy-data"
              className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
            >
              Back to Dummy Data
            </Link>
          </div>
        </div>

        <DummyDataGenerator type={params.type} />
      </div>
    </main>
  );
}
