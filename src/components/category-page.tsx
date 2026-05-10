import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

import { contact } from "@/content/site";
import type { ServiceGroup, TreatmentCategory } from "@/content/types";

import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type CategoryPageProps = {
  category: TreatmentCategory;
};

export function CategoryPage({ category }: CategoryPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="route-hero">
          <Image
            src={category.image.src}
            alt={category.image.alt}
            fill
            priority
            sizes="100vw"
            className="cover-image"
          />
          <div className="route-hero__shade" />
          <div className="route-hero__content">
            <p className="eyebrow">{category.eyebrow}</p>
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            <a
              className="button button--light"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Reservar por WhatsApp
            </a>
          </div>
        </section>

        <section className="service-shell" aria-label={`Carta de ${category.title}`}>
          <aside className="service-index">
            <p className="eyebrow">Carta</p>
            {category.groups.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.title}
              </a>
            ))}
          </aside>
          <div className="service-groups">
            {category.groups.map((group) => (
              <ServiceGroupBlock key={group.id} group={group} />
            ))}
          </div>
        </section>

        <ContactSection compact />
      </main>
      <SiteFooter />
    </>
  );
}

function ServiceGroupBlock({ group }: { group: ServiceGroup }) {
  return (
    <section className="service-group" id={group.id}>
      <div className="service-group__head">
        <p className="eyebrow">Tratamientos</p>
        <h2>{group.title}</h2>
        {group.intro ? <p>{group.intro}</p> : null}
      </div>
      <div className="service-list">
        {group.items.map((item) => (
          <article className="service-item" key={`${group.id}-${item.name}`}>
            <div className="service-item__head">
              <h3>{item.name}</h3>
              <div className="service-item__meta">
                {item.duration ? <span>{item.duration}</span> : null}
                {item.price ? <strong>{item.price}</strong> : null}
              </div>
            </div>
            {item.description ? <p>{item.description}</p> : null}
            {item.note ? <p className="service-item__note">{item.note}</p> : null}
          </article>
        ))}
      </div>
      <a className="inline-cta" href={contact.whatsappHref} target="_blank" rel="noreferrer">
        Consultar disponibilidad
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
