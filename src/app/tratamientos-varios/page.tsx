import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Servicios varios",
  description:
    "Servicios de depilación en Dénia con cera de azuleno para piel delicada y maquillaje para eventos en Y beauty con cita previa.",
  alternates: {
    canonical: "/tratamientos-varios",
  },
};

export default function OtherServicesPage() {
  return <CategoryPage category={treatmentCategories.varios} />;
}
