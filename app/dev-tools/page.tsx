import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Dev Tools",
  description: "Developer utilities for formatting, inspecting, transforming, and validating data."
};

export default function DevToolsPage() {
  return <CategoryLanding categorySlug="dev-tools" />;
}
