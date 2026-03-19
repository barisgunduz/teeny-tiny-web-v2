import type { Metadata } from "next";

import { CategoryLanding } from "@/components/categories/CategoryLanding";

export const metadata: Metadata = {
  title: "IT & Sysadmin",
  description: "Infrastructure and networking tools for subnetting, ports, HTTP, DNS, SSH, and request building."
};

export default function ITPage() {
  return <CategoryLanding categorySlug="it-sysadmin" />;
}
