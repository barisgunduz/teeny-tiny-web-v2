import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Design Utils",
  description: "Design-side generators and references for gradients, shadows, palettes, typography, and CSS experiments."
};

export default function DesignPage() {
  return <CategoryLanding categorySlug="design-utils" />;
}
