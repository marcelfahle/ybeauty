import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { brand, contact, navItems } from "@/content/site";

import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link href="/" className="site-footer__brand" aria-label="Y beauty, inicio">
          <BrandLogo />
        </Link>

        <nav className="footer-nav" aria-label="Navegación de pie de página">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <address className="footer-contact">
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            {contact.whatsappDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={17} aria-hidden="true" />
            {contact.email}
          </a>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer">
            <MapPin size={17} aria-hidden="true" />
            {contact.address}
          </a>
        </address>
      </div>
      <p className="site-footer__fineprint">© 2026 {brand.name}. Cita previa imprescindible.</p>
    </footer>
  );
}
