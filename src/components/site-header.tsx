import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";

import { contact, navItems } from "@/content/site";

import { BrandLogo } from "./brand-logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__brand" aria-label="Y beauty, inicio">
        <BrandLogo />
      </Link>

      <nav className="site-header__nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="site-header__cta" href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle size={18} aria-hidden="true" />
        Reservar
      </a>

      <details className="mobile-menu">
        <summary aria-label="Abrir menú">
          <Menu size={22} aria-hidden="true" />
        </summary>
        <nav className="mobile-menu__panel" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            Reservar por WhatsApp
          </a>
        </nav>
      </details>
    </header>
  );
}
