import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { createPageMetadata } from "@/content/seo";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = createPageMetadata({
  title: "Depilación y maquillaje en Dénia",
  description:
    "Depilación con cera de azuleno y maquillaje para eventos en Dénia. Servicios esenciales de belleza con cita previa en Y beauty.",
  path: "/tratamientos-varios",
  keywords: ["depilación Dénia", "cera azuleno Dénia", "maquillaje eventos Dénia"],
});

export default function OtherServicesPage() {
  return <CategoryPage category={treatmentCategories.varios} />;
}
