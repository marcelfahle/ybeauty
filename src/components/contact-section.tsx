import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

import { contact, media } from "@/content/site";

type ContactSectionProps = {
  compact?: boolean;
};

export function ContactSection({ compact = false }: ContactSectionProps) {
  return (
    <section className={compact ? "contact-section contact-section--compact" : "contact-section"}>
      <div className="contact-section__media" aria-hidden="true">
        <Image
          src={media.contactWater.src}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          className="cover-image"
        />
      </div>
      <div className="contact-section__content">
        <p className="eyebrow">Cita previa imprescindible</p>
        <h2>Reserva tu momento de cuidado</h2>
        <div className="contact-grid">
          <div>
            <Clock size={20} aria-hidden="true" />
            <div>
              <h3>Horario</h3>
              {contact.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div>
            <MapPin size={20} aria-hidden="true" />
            <div>
              <h3>Ubicación</h3>
              <p>{contact.address}</p>
              <a href={contact.mapsHref} target="_blank" rel="noreferrer">
                Cómo llegar en Google Maps
              </a>
            </div>
          </div>
          <div>
            <MessageCircle size={20} aria-hidden="true" />
            <div>
              <h3>WhatsApp</h3>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                {contact.whatsappDisplay}
              </a>
            </div>
          </div>
          <div>
            <Mail size={20} aria-hidden="true" />
            <div>
              <h3>Email</h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
