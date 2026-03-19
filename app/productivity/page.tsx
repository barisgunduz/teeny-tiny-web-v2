import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Productivity",
  description: "Tiny workflow helpers for focus, planning, schedules, and documentation."
};

export default function ProductivityPage() {
  return <CategoryLanding categorySlug="productivity" />;
}
