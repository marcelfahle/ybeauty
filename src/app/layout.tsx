import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ybeauty.es"),
  title: {
    default: "Y beauty | Salón de belleza en Dénia",
    template: "%s | Y beauty",
  },
  description:
    "Y beauty es un salón de belleza en Dénia con tratamientos faciales, corporales, depilación y maquillaje. Reserva cita previa por WhatsApp.",
  openGraph: {
    title: "Y beauty | Salón de belleza en Dénia",
    description:
      "Tratamientos faciales, corporales, depilación y maquillaje en Av. Joan Fuster, Dénia. Atención con cita previa en Y beauty.",
    url: "https://www.ybeauty.es",
    siteName: "Y beauty",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/media/logo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Y beauty, salón de belleza en Dénia",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Y beauty",
  url: "https://www.ybeauty.es",
  image: "https://www.ybeauty.es/media/logo-og.jpg",
  telephone: "+34661648434",
  email: "info@ybeauty.es",
  priceRange: "€€",
  areaServed: "Dénia, Alicante",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Joan Fuster 46b 1c",
    postalCode: "03700",
    addressLocality: "Dénia",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
