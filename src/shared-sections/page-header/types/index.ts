export interface HeroShowcaseProps {
  /* route aware CTA, already resolved to its label + destination */
  cta: { label: string; href: string };
}

/* one resolved material teaser card */
interface HeroMaterialItem {
  key: string;
  image: string;
  linked: boolean;
  eyebrow: string;
  imageAlt: string;
  specs: string;
}

export interface HeroMaterialCardsProps {
  items: HeroMaterialItem[];
  href: string;
  linkAria: string;
}

export interface HeroMaterialCardProps {
  item: HeroMaterialItem;
  /* fan placement: 0 back left · 1 front center · 2 back right */
  position: number;
  href: string;
  linkAria: string;
}

export interface PageHeaderProps {
  titleLead: string;
  titleAccent: string;
  description: string;
  /* rotating ghost CTA target per page */
  secondaryCta: "services" | "projects" | "shop" | "work";
  /* background variant (paired src + alt); defaults to the shared image */
  image?: "default" | "shop" | "areas";
  id?: string;
}
