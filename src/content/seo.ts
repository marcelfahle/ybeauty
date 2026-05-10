import type { Metadata } from "next";

import { brand, contact } from "./site";

export const siteUrl = "https://www.ybeauty.es";

const brandTitle = `${brand.name} | ${brand.tagline}`;
const defaultTitle = `Salón de belleza en ${brand.city} | ${brand.name}`;
const defaultDescription =
  "Salón de belleza en Dénia con tratamientos faciales, corporales, depilación y maquillaje. Reserva tu cita previa por WhatsApp en Y beauty.";

const defaultKeywords = [
  "salón de belleza Dénia",
  "centro estética Dénia",
  "tratamientos faciales Dénia",
  "tratamientos corporales Dénia",
  "depilación Dénia",
  "maquillaje Dénia",
  "Y beauty",
];

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Y beauty, salón de belleza en Dénia",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: "/" | `/${string}`;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${brand.name}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: brand.name,
      locale: "es_ES",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brand.name,
  title: {
    default: defaultTitle,
    template: `%s | ${brand.name}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: brand.owner }],
  creator: brand.owner,
  publisher: brand.name,
  category: "beauty salon",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description:
      "Tratamientos faciales, corporales, depilación y maquillaje en Av. Joan Fuster, Dénia. Atención con cita previa en Y beauty.",
    url: "/",
    siteName: brand.name,
    locale: "es_ES",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage.url],
  },
  appleWebApp: {
    title: brandTitle,
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "ES-VC",
    "geo.placename": brand.city,
  },
};

export const beautySalonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#salon`,
  name: brand.name,
  slogan: brand.tagline,
  description: defaultDescription,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  logo: `${siteUrl}/icon.png`,
  sameAs: [contact.googlePlaceHref],
  hasMap: contact.googlePlaceHref,
  telephone: "+34661648434",
  email: contact.email,
  priceRange: "€€",
  areaServed: `${brand.city}, Alicante`,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8346853,
    longitude: 0.1068772,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Joan Fuster 46b 1c",
    postalCode: "03700",
    addressLocality: brand.city,
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34661648434",
    contactType: "reservas",
    availableLanguage: ["es", "en"],
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
