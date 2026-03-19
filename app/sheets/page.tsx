import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Sheets",
  description: "Browse cheatsheets for Git, Linux CLI, Docker, Vim, SQL, JavaScript, TypeScript, Bash, and more."
};

export default function SheetsPage() {
  return <CategoryLanding categorySlug="cheatsheets" />;
}
