import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Tratamientos corporales",
  description:
    "Tratamientos corporales en Dénia: masajes, envolturas marinas, exfoliaciones y rituales de bienestar en Y beauty con cita previa.",
  alternates: {
    canonical: "/tratamientos-corporales",
  },
};

export default function BodyTreatmentsPage() {
  return <CategoryPage category={treatmentCategories.corporales} />;
}
