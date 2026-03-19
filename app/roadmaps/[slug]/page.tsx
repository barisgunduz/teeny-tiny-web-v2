import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { roadmaps } from "@/lib/data/roadmaps";

const difficultyClasses = {
  beginner: {
    badge: "border-[#16341d] bg-[#0b120d] text-[#86efac]",
    dot: "bg-[#22c55e]"
  },
  intermediate: {
    badge: "border-[#45311a] bg-[#171109] text-[#fcd34d]",
    dot: "bg-[#f59e0b]"
  },
  advanced: {
    badge: "border-[#482026] bg-[#180c0f] text-[#fca5a5]",
    dot: "bg-[#ef4444]"
  }
};

export function generateStaticParams() {
  return roadmaps.map((roadmap) => ({ slug: roadmap.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const roadmap = roadmaps.find((entry) => entry.slug === params.slug);

  return {
    title: roadmap ? `${roadmap.title} Roadmap` : "Roadmap Not Found",
    description: roadmap?.description
  };
}

export default function RoadmapPage({ params }: { params: { slug: string } }) {
  const roadmap = roadmaps.find((entry) => entry.slug === params.slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-[#e4e4e7] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Roadmaps", href: "/roadmaps" },
            { label: roadmap.title }
          ]}
        />

        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#71717a]">Roadmap</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f5f5f5]">{roadmap.title}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8b8b93]">{roadmap.description}</p>
            </div>
            <Link
              href="/roadmaps"
              className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white"
            >
              Back to Roadmaps
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-[#27272a] bg-[#111113] p-5 sm:p-6">
          <div className="space-y-8">
            {roadmap.steps.map((step, index) => {
              const style = difficultyClasses[step.status];
              const isLast = index === roadmap.steps.length - 1;

              return (
                <div key={step.id} className="grid gap-4 md:grid-cols-[56px_minmax(0,1fr)]">
                  <div className="relative flex justify-center">
                    <div className={`relative z-10 mt-1 h-5 w-5 rounded-full border-4 border-[#111113] ${style.dot}`} />
                    {!isLast ? <div className="absolute top-6 h-[calc(100%+2rem)] w-px bg-[#27272a]" /> : null}
                  </div>

                  <article className="rounded-2xl border border-[#27272a] bg-[#0d0d0f] p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold tracking-tight text-[#f5f5f5]">{step.title}</h2>
                      <span className={`rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] ${style.badge}`}>
                        {step.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#8b8b93]">{step.description}</p>

                    <div className="mt-4 space-y-2">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#71717a]">Resources</p>
                      <div className="flex flex-col gap-2">
                        {step.resources.map((resource) => (
                          <a
                            key={resource}
                            href={resource}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-[#27272a] bg-black/20 px-3 py-2 text-sm text-[#93c5fd] transition hover:border-[#3f3f46] hover:text-white"
                          >
                            {resource}
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
