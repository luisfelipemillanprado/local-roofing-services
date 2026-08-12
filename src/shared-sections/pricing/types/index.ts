export type PricingIconKey = "home" | "building" | "factory";

export interface PricingProps {
  variant: "viewAll" | "contact";
}

export interface PricingCardProps {
  icon: PricingIconKey;
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  chooseLabel: string;
  chooseHref: string;
  popular: string;
  highlighted?: boolean;
  delay?: number;
}

/* resolved per-card item for the list */
interface PricingCardItem extends Pick<
  PricingCardProps,
  "icon" | "title" | "description" | "price" | "period" | "features" | "highlighted" | "delay"
> {
  key: string;
}

export interface PricingListProps {
  cards: PricingCardItem[];
  chooseLabel: string;
  chooseHref: string;
  popular: string;
}
