import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="rounded-2xl border border-[#27272a] bg-[#111113] px-4 py-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[#8b8b93]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight className="h-3.5 w-3.5 text-[#5f5f66]" /> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[#f5f5f5]" : "text-[#a1a1aa]"}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
