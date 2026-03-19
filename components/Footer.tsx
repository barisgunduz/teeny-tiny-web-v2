import Link from "next/link";

const footerProjectLinks = [
  { label: "Dev Tools", href: "/dev-tools" },
  { label: "Cheatsheets", href: "/sheets" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Prompts", href: "/prompts" }
];

const footerResourceLinks = [
  { label: "Design Utils", href: "/design" },
  { label: "Dummy Data", href: "/dummy-data" },
  { label: "IT & Sysadmin", href: "/it" },
  { label: "Productivity", href: "/productivity" }
];

const creatorLinks = [
  { label: "Website", href: "https://www.barisgunduz.com" },
  { label: "GitHub", href: "https://github.com/barisgunduz" },
  { label: "My Projects", href: "https://hub.barisgunduz.com" },
  { label: "Medium", href: "https://barisgunduz.medium.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-[#27272a] py-10 text-sm text-[#8b8b93]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#27272a] bg-[#111113] font-mono text-sm font-semibold text-[#f5f5f5]">
              BG
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Creator</p>
              <h3 className="mt-2 text-lg font-semibold text-[#f5f5f5]">Baris Gunduz</h3>
              <p className="mt-3 max-w-sm leading-7 text-[#8b8b93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Project</p>
            <div className="mt-4 flex flex-col gap-3">
              {footerProjectLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-[#f5f5f5]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Explore</p>
            <div className="mt-4 flex flex-col gap-3">
              {footerResourceLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-[#f5f5f5]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717a]">Baris Online</p>
            <div className="mt-4 flex flex-col gap-3">
              {creatorLinks.map((link) => (
                <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-[#f5f5f5]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
