import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/content/seo";
import { contact, homeContent, media } from "@/content/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Salón de belleza en Dénia",
    description:
      "Y beauty es un salón de belleza en Dénia para tratamientos faciales, corporales, depilación y maquillaje. Reserva tu cita previa por WhatsApp.",
    path: "/",
    keywords: ["salón belleza cerca de mí", "estética Dénia cita previa"],
  }),
  title: "Salón de belleza en Dénia | Y beauty",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={media.heroWater.src}
            aria-hidden="true"
          >
            <source src="/video/hero-water.mp4" type="video/mp4" />
          </video>
          <div className="home-hero__shade" />
          <div className="home-hero__content">
            <p className="eyebrow">{homeContent.hero.eyebrow}</p>
            <h1>{homeContent.hero.title}</h1>
            <p>{homeContent.hero.body}</p>
            <div className="button-row">
              <a
                className="button button--light"
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Reservar cita
              </a>
              <Link className="button button--ghost-light" href="/tratamientos-faciales">
                Ver tratamientos
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="intro-section__copy">
            <p className="eyebrow">Y beauty</p>
            <h2>{homeContent.intro.title}</h2>
            <p>{homeContent.intro.body}</p>
            <p className="signature">{homeContent.intro.signature}</p>
          </div>
          <div className="intro-section__media">
            <Image
              src={media.salonFacial.src}
              alt={media.salonFacial.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
              className="cover-image"
            />
          </div>
        </section>

        <section className="principles-section">
          {homeContent.principles.map((principle) => (
            <article key={principle.title} className="principle">
              <span aria-hidden="true" />
              <h2>{principle.title}</h2>
              <p>{principle.body}</p>
            </article>
          ))}
        </section>

        <section className="treatments-preview">
          <div className="section-heading">
            <p className="eyebrow">Carta de tratamientos</p>
            <h2>Elige cómo quieres cuidarte</h2>
          </div>
          <div className="treatment-card-grid">
            {homeContent.treatmentCards.map((card) => (
              <Link href={card.href} className="treatment-card" key={card.href}>
                <span className="treatment-card__image">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className="cover-image"
                  />
                </span>
                <span className="treatment-card__content">
                  <span className="h3">{card.title}</span>
                  <span>{card.body}</span>
                  <span className="inline-link">
                    Ver carta
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="ritual-section">
          <div className="ritual-section__image">
            <Image
              src={media.spaRoom.src}
              alt={media.spaRoom.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="cover-image"
            />
          </div>
          <div className="ritual-section__copy">
            <p className="eyebrow">Belleza inspirada en la naturaleza</p>
            <h2>Mar, flores, manos expertas y una pausa real</h2>
            <p>
              El nuevo sitio conserva la calma del agua y las imágenes del salón, pero organiza la
              información para que sea clara en móvil, fácil de editar y directa para reservar.
            </p>
            <a className="inline-cta" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Pedir cita previa
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
