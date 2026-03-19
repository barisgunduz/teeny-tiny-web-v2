import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "Roadmaps",
  description: "Follow structured learning roadmaps for frontend, backend, DevOps, full-stack, AI/ML basics, and more."
};

export default function RoadmapsPage() {
  return <CategoryLanding categorySlug="roadmaps" />;
}
