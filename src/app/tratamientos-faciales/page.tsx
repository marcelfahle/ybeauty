import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Tratamientos faciales",
  description:
    "Tratamientos faciales en Dénia: Phytomer, Fleurs, Phytoceane, limpieza facial, Kobido y peeling renovador en Y beauty con cita previa.",
  alternates: {
    canonical: "/tratamientos-faciales",
  },
};

export default function FacialTreatmentsPage() {
  return <CategoryPage category={treatmentCategories.faciales} />;
}
