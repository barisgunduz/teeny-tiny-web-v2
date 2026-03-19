import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#0a0a0a] px-4 py-16 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#27272a] bg-[#111113] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#71717a]">Terminal Output</p>
        <h1 className="mt-6 font-mono text-3xl tracking-tight text-[#f5f5f5] sm:text-5xl">
          ERROR 404: tool not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#8b8b93] sm:text-base">
          The route resolved to nowhere. The tool may have moved, the slug may be wrong, or this page was never deployed.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-5 py-3 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
