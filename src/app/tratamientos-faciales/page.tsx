import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { createPageMetadata } from "@/content/seo";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = createPageMetadata({
  title: "Tratamientos faciales en Dénia",
  description:
    "Tratamientos faciales en Dénia: limpieza facial, Kobido, Phytomer, Fleurs y Phytoceane para hidratar, iluminar y renovar tu piel.",
  path: "/tratamientos-faciales",
  keywords: ["limpieza facial Dénia", "Kobido Dénia", "Phytomer Dénia"],
});

export default function FacialTreatmentsPage() {
  return <CategoryPage category={treatmentCategories.faciales} />;
}
