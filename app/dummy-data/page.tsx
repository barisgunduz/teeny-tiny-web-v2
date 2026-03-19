import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Dummy Data",
  description: "Generate fake users, lorem ipsum, countries, colors, IP addresses, and more right in the browser."
};

export default function DummyDataPage() {
  return <CategoryLanding categorySlug="dummy-data" />;
}
