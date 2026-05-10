import { media } from "./site";
import type { TreatmentCategory } from "./types";

export const treatmentCategories = {
  faciales: {
    slug: "tratamientos-faciales",
    title: "Tratamientos faciales",
    eyebrow: "Rostro, luminosidad y bienestar",
    summary:
      "Una carta facial completa con tratamientos marinos, florales, hidratantes, purificantes, antiedad y servicios esenciales para cuidar la piel con calma.",
    image: media.facialMask,
    groups: [
      {
        id: "phytomer",
        title: "Phytomer",
        items: [
          {
            name: "Tratamiento lujo revelador juventud",
            description:
              "Tratamiento antiedad que trabaja intensamente rostro, cuello y escote. Recupera al instante la firmeza y luminosidad en pieles maduras e incluye barro marino descontracturante en espalda durante el tratamiento.",
            duration: "90 min",
            price: "80€",
          },
          {
            name: "Hydra Originel",
            description:
              "Tratamiento que hidrata en profundidad la piel con alga nori ecológica cultivada en estanques abiertos en Portugal.",
            duration: "1 h",
            price: "55€",
          },
          {
            name: "Oligoforce luminosidad",
            description:
              "Tratamiento antiedad ultracompleto para tez, manchas y arrugas. Ilumina la piel, atenúa las manchas y alisa las arrugas con exfoliación ácida al 20% y mascarilla rica en Oligomer.",
            duration: "75 min",
            price: "65€",
          },
          {
            name: "Perfect Mirada",
            description:
              "Tratamiento de ojos para una mirada rejuvenecida. Ilumina el contorno, reduce la visibilidad de bolsas y suaviza arrugas.",
            duration: "30 min",
            price: "30€",
          },
          {
            name: "Phytomer Man",
            description: "Tratamiento hidratante redensificante y antiedad global para hombre.",
            duration: "75 min",
            price: "65€",
          },
          {
            name: "Citadine",
            description:
              "Tratamiento frescura de piel anticontaminación. Un soplo de oxígeno con beneficios marinos para eliminar toxinas, revitalizar, iluminar y rehidratar.",
            duration: "1 h",
            price: "60€",
          },
        ],
      },
      {
        id: "fleurs",
        title: "Fleurs",
        items: [
          {
            name: "Smoothie floral facial hidratante",
            description:
              "Resplandor instantáneo con texturas refrescantes para hidratar y aumentar la luminosidad de piel deshidratada y tez apagada.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Suavidad floral",
            description:
              "Tratamiento calmante renovador con flores delicadas, concentrado de extrema suavidad y mascarilla untuosa para pieles frágiles y reactivas.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Pureza floral frescor",
            description:
              "Tratamiento purificante con flores y cítricos para olvidarse de imperfecciones y tez apagada.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "1001 flores hidratante de alta nutrición",
            description:
              "Mil flores, Tahití y monoi en texturas nutritivas para hidratación duradera y nutrición de pieles secas.",
            duration: "1 h",
            price: "65€",
          },
          {
            name: "Floraskin",
            description: "Tratamiento antiedad global.",
            duration: "75 min",
            price: "65€",
          },
          {
            name: "Ritual Golden Spa rostro y cuerpo",
            description:
              "Experiencia de belleza con propiedades antiedad para rejuvenecer rostro y cuerpo, con polvo de oro de 24 quilates y extractos de flores.",
            duration: "75 min",
            price: "75€",
          },
          {
            name: "Ritual delicioso rostro y cuerpo",
            description:
              "Exfoliación corporal floral, mascarilla en zonas secas, masaje con extracto de amapola y mini tratamiento facial para aportar luminosidad inmediata.",
            duration: "75 min",
            price: "75€",
          },
        ],
      },
      {
        id: "phytoceane",
        title: "Phytoceane",
        items: [
          {
            name: "Destino Ocean",
            description:
              "Tratamiento juventud con crista marina ecológica y wakame ecológica. Como un baño de juventud revitalizante procedente del océano.",
            duration: "75 min",
            price: "65€",
          },
          {
            name: "Destino Shirakami",
            description:
              "Tratamiento hidratante bio con agua de aosa ecológica. Un viaje renovador al corazón de Japón para conseguir una piel profundamente hidratada.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Destino Fiordos",
            description:
              "Tratamiento oxigenante luminosidad con agua de Islandia para conseguir una piel hidratada, oxigenada y una tez radiante.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Destino Yucatán",
            description:
              "Tratamiento calmante con aloe vera ecológico de México para una sensación inmediata de confort.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Explosión de luminosidad",
            description:
              "Tratamiento uniformizante de manchas. En solo una hora, las manchas de pigmentación se atenúan y la tez queda más homogénea.",
            duration: "75 min",
            price: "65€",
          },
          {
            name: "Velo de pureza",
            description:
              "Tratamiento purificante para devolver equilibrio a la epidermis. Reduce brillos e imperfecciones y afina la textura de la piel.",
            duration: "1 h",
            price: "60€",
          },
        ],
      },
      {
        id: "esenciales",
        title: "Servicios esenciales",
        items: [
          {
            name: "Limpieza facial",
            duration: "1 h",
            price: "50€",
          },
          {
            name: "Masaje lifting japonés Kobido",
            duration: "1 h",
            price: "45€",
          },
          {
            name: "Peeling triácidos renovador",
            description:
              "Peeling Utsukusy con triácidos para renovar la piel. Mejora manchas, marcas de acné, cicatrices y líneas de expresión.",
            duration: "50 min",
            price: "45€",
          },
        ],
      },
    ],
  },
  corporales: {
    slug: "tratamientos-corporales",
    title: "Tratamientos corporales",
    eyebrow: "Rituales, masajes y envolturas",
    summary:
      "Tratamientos corporales para relajar, renovar y reconectar: envolturas marinas, exfoliaciones, masajes y rituales de inspiración sensorial.",
    image: media.bodyMassage,
    groups: [
      {
        id: "phytomer",
        title: "Phytomer",
        items: [
          {
            name: "Sculpt Zone",
            description:
              "Masaje y envoltura térmica anticelulitis para abdomen, glúteos y muslos. Combina exfoliación intensiva, masaje localizado y envoltura termoescultora.",
            duration: "75 min",
            price: "60€",
          },
          {
            name: "Envoltura marina detox",
            description:
              "Tratamiento con intensa exfoliación y cálida envoltura que aporta una agradable sensación de burbujeo mientras ayuda a liberar toxinas.",
            duration: "75 min",
            price: "70€",
          },
          {
            name: "Velo de satén",
            description:
              "Exfoliación con cristales de sal marina combinada con masaje hidratante para una belleza exprés que deja la piel suave y sedosa.",
            duration: "45 min",
            price: "45€",
          },
          {
            name: "Descontracturante espalda",
            description:
              "Masaje para destensar espalda, cuero cabelludo y pies con envoltura marina remineralizante.",
            duration: "1 h",
            price: "55€",
          },
          {
            name: "Piernas ligeras",
            description:
              "Embellece, relaja y alivia piernas cansadas. Incluye exfoliación, envoltura con gel frío y masaje.",
            duration: "45 min",
            price: "45€",
          },
          {
            name: "Sea Holistic",
            description:
              "Exfoliación y masaje corporal de inspiración thai con bolus de cristales de sal marina y flores de lavanda. Incluye desmaquillado y masaje facial aromático.",
            duration: "75 min",
            price: "75€",
          },
          {
            name: "Wellness Experience",
            description:
              "Masaje ultra relajante con aceites marinos altamente nutritivos inspirado en masaje ayurveda.",
            duration: "1 h",
            price: "60€",
          },
          {
            name: "Barro marino autocalentador descontracturante",
            description:
              "Aplicación de barro marino descontracturante en espalda para una relajación extrema. Puede añadirse a cualquier ritual Phytomer.",
            duration: "20 min",
            price: "15€",
          },
        ],
      },
      {
        id: "fleurs",
        title: "Fleurs",
        items: [
          {
            name: "Ritual Golden Spa rostro y cuerpo",
            description:
              "Experiencia de belleza con propiedades antiedad para rejuvenecer rostro y cuerpo, con polvo de oro de 24 quilates y extractos de flores.",
            duration: "75 min",
            price: "75€",
          },
          {
            name: "Ritual delicioso rostro y cuerpo",
            description:
              "Exfoliación corporal floral, mascarilla en zonas secas, masaje con extracto de amapola y mini tratamiento facial para aportar luminosidad al rostro.",
            duration: "75 min",
            price: "75€",
          },
        ],
      },
      {
        id: "phytoceane",
        title: "Phytoceane",
        items: [
          {
            name: "Escapada Esmeralda",
            description:
              "Masaje relajante con té verde ecológico y piedra caliente. Inspirado en Tui Na para una profunda relajación de la cabeza a los pies.",
            duration: "1 h",
            price: "65€",
          },
          {
            name: "Escapada Zanzíbar",
            description:
              "Exfoliación y masaje corporal relajante con aceite virgen de coco. Una escapada exótica para desconectar cuerpo y alma.",
            duration: "75 min",
            price: "70€",
          },
          {
            name: "Destino Bora-Bora",
            description:
              "Exfoliación con arena de Bora-Bora y masaje fundente con azafrán de Oceanía y perfume avainillado exótico.",
            duration: "75 min",
            price: "70€",
          },
          {
            name: "Masaje de bienestar Jardín Oriental",
            description:
              "Tratamiento con aroma de ámbar y sándalo para una escapada relajante que invita a viajar con los sentidos.",
            duration: "1 h",
            price: "60€",
          },
        ],
      },
    ],
  },
  varios: {
    slug: "tratamientos-varios",
    title: "Servicios varios",
    eyebrow: "Depilación y maquillaje",
    summary:
      "Servicios esenciales para completar la visita al salón, con depilación de cera de azuleno indicada para pieles delicadas y maquillaje para eventos.",
    image: media.waxing,
    groups: [
      {
        id: "depilaciones",
        title: "Depilaciones",
        intro:
          "Todas las depilaciones se realizan con cera de azuleno, indicada para las pieles más delicadas.",
        items: [
          { name: "Labio superior", price: "4€" },
          { name: "Cejas", price: "5€" },
          { name: "Diseño cejas", price: "10€" },
          { name: "Ingles básicas", price: "7€" },
          { name: "Ingles media", price: "10€" },
          { name: "Ingles completa", price: "20€" },
          { name: "Axilas", price: "6€" },
          { name: "Medias piernas", price: "15€" },
          { name: "Piernas completas", price: "23€" },
          { name: "Brazos", price: "8€" },
          {
            name: "Zonas varias",
            price: "6€-20€",
            note: "El precio varía dependiendo de la zona.",
          },
        ],
      },
      {
        id: "maquillaje",
        title: "Maquillaje",
        items: [
          {
            name: "Eventos",
            price: "40€",
            note: "Días festivos bajo disponibilidad y suplemento adicional.",
          },
        ],
      },
    ],
  },
} satisfies Record<string, TreatmentCategory>;
