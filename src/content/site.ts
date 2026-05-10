import type { ImageAsset, NavItem } from "./types";

export const brand = {
  name: "Y beauty",
  tagline: "Cuida de ti",
  city: "Dénia",
  owner: "Yoya Cobos",
};

export const navItems: NavItem[] = [
  { label: "Tratamientos faciales", href: "/tratamientos-faciales" },
  { label: "Tratamientos corporales", href: "/tratamientos-corporales" },
  { label: "Servicios varios", href: "/tratamientos-varios" },
];

export const contact = {
  email: "info@ybeauty.es",
  whatsappDisplay: "661 64 84 34",
  whatsappHref:
    "https://wa.me/34661648434?text=Hola%20Y%20beauty%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita.",
  address: "Av. Joan Fuster 46b 1c, 03700 Dénia",
  googlePlaceHref:
    "https://www.google.com/maps/place/Ybeauty/data=!4m7!3m6!1s0x129e1b213d536c65:0x8eb93513f05c63c5!8m2!3d38.8346853!4d0.1068772!16s%2Fg%2F11c2ld4ltg",
  mapsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Ybeauty%2C%20Av.%20de%20Joan%20Fuster%2046B%201%C2%B0C%2C%2003700%20D%C3%A9nia%2C%20Alicante&destination_place_id=ChIJZWxTPSEbnhIRxWNc8BM1uY4",
  hours: [
    "Martes, jueves y viernes: 9:30-19:00",
    "Miércoles: 9:30-16:00",
    "Sábado: 10:00-15:00",
    "Domingo y lunes: cerrado",
  ],
};

export const media = {
  heroWater: {
    src: "/media/hero-water.jpg",
    alt: "Agua y vegetación junto al salón Y beauty",
    width: 1920,
    height: 1080,
  },
  salonFacial: {
    src: "/media/salon-facial.jpg",
    alt: "Tratamiento facial relajante en cabina",
    width: 1200,
    height: 1600,
  },
  massageFace: {
    src: "/media/massage-face.jpg",
    alt: "Masaje facial durante un tratamiento",
    width: 1200,
    height: 1500,
  },
  treatmentHands: {
    src: "/media/treatment-hands.jpg",
    alt: "Manos aplicando un tratamiento estético",
    width: 900,
    height: 1400,
  },
  treatmentOil: {
    src: "/media/treatment-oil.jpg",
    alt: "Detalle de tratamiento corporal con aceite",
    width: 900,
    height: 1400,
  },
  spaRoom: {
    src: "/media/spa-room.jpg",
    alt: "Cabina de belleza preparada para un tratamiento",
    width: 1400,
    height: 1000,
  },
  contactWater: {
    src: "/media/contact-water.jpg",
    alt: "Agua en movimiento como detalle natural",
    width: 1600,
    height: 900,
  },
  facialNeck: {
    src: "/media/facial-neck.jpg",
    alt: "Tratamiento facial y cuello",
    width: 1200,
    height: 1400,
  },
  facialMask: {
    src: "/media/facial-mask.jpg",
    alt: "Aplicación de mascarilla facial",
    width: 1300,
    height: 1500,
  },
  facialGlow: {
    src: "/media/facial-glow.jpg",
    alt: "Ritual facial relajante",
    width: 1200,
    height: 1400,
  },
  facialProduct: {
    src: "/media/facial-product.jpg",
    alt: "Producto y textura de tratamiento facial",
    width: 1300,
    height: 1500,
  },
  bodyMassage: {
    src: "/media/body-massage.jpg",
    alt: "Masaje corporal en cabina",
    width: 1200,
    height: 1500,
  },
  bodyStones: {
    src: "/media/body-stones.jpg",
    alt: "Piedras calientes para masaje",
    width: 1300,
    height: 1200,
  },
  bodyRelax: {
    src: "/media/body-relax.jpg",
    alt: "Tratamiento corporal relajante",
    width: 1300,
    height: 1200,
  },
  waxing: {
    src: "/media/waxing.jpg",
    alt: "Preparación para depilación con cera",
    width: 1300,
    height: 1500,
  },
  makeup: {
    src: "/media/makeup.jpg",
    alt: "Maquillaje profesional para eventos",
    width: 1200,
    height: 1400,
  },
} satisfies Record<string, ImageAsset>;

export const homeContent = {
  hero: {
    eyebrow: "Salón de belleza en Dénia",
    title: "Belleza, calma y cuidado real",
    body: "Tratamientos faciales, corporales y servicios esenciales con cita previa, pensados para que desconectes y vuelvas a sentirte bien en tu piel.",
  },
  intro: {
    title: "El placer de dejarse cuidar",
    body: "Toda la vida he pensado que la belleza es algo más que una simple apariencia física. Es una sensación que se siente desde dentro y se refleja en el exterior. Por eso, me esfuerzo por ofrecer una experiencia completa que también tenga en cuenta el bienestar mental y emocional de mis clientes.",
    signature: "Yoya Cobos",
  },
  principles: [
    {
      title: "Desconecta",
      body: "Un momento de relajación y cuidado personal para bajar el ritmo y dedicarte unos minutos a ti.",
    },
    {
      title: "Naturaleza",
      body: "Tratamientos inspirados en el mar, las flores y activos naturales para mejorar la salud y belleza de la piel.",
    },
    {
      title: "Cita previa",
      body: "Atención tranquila y personalizada. Cada visita se reserva con tiempo para cuidar bien los detalles.",
    },
  ],
  treatmentCards: [
    {
      title: "Tratamientos faciales",
      body: "Rituales Phytomer, Fleurs, Phytoceane, limpieza facial, Kobido y tratamientos renovadores.",
      href: "/tratamientos-faciales",
      image: media.facialNeck,
    },
    {
      title: "Tratamientos corporales",
      body: "Masajes, envolturas, exfoliaciones, rituales relajantes y tratamientos corporales inspirados en el mar.",
      href: "/tratamientos-corporales",
      image: media.bodyMassage,
    },
    {
      title: "Servicios varios",
      body: "Depilación con cera de azuleno para pieles delicadas y maquillaje para eventos.",
      href: "/tratamientos-varios",
      image: media.makeup,
    },
  ],
};
