export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceItem = {
  name: string;
  description?: string;
  duration?: string;
  price?: string;
  note?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  intro?: string;
  items: ServiceItem[];
};

export type TreatmentCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: ImageAsset;
  groups: ServiceGroup[];
};
