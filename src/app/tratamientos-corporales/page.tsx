import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { createPageMetadata } from "@/content/seo";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = createPageMetadata({
  title: "Tratamientos corporales en Dénia",
  description:
    "Tratamientos corporales en Dénia: masajes, envolturas marinas, exfoliaciones y rituales relajantes para cuidar cuerpo y mente.",
  path: "/tratamientos-corporales",
  keywords: ["masaje Dénia", "masaje relajante Dénia", "exfoliación corporal Dénia"],
});

export default function BodyTreatmentsPage() {
  return <CategoryPage category={treatmentCategories.corporales} />;
}
