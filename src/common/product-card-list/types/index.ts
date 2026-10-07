import type { ProductAvailability } from "@/common/availability-dot/types";

/* product card: resolved fields + view CTA */
export interface ProductCardProps {
  title: string;
  brand: string;
  image: string;
  priceLabel: string;
  unit: string;
  rating: number;
  reviews: number;
  availability: ProductAvailability;
  availabilityLabel: string;
  viewLabel: string;
  href: string;
}

/* one card in the grid; the list hands the same view label to every card */
export interface ProductCardItem extends Omit<ProductCardProps, "viewLabel"> {
  slug: string /* list key; the route is resolved where the data is */;
}

export interface ProductCardListProps {
  cards: ProductCardItem[];
  viewLabel: string;
  trimLastOnMobile?: boolean /* teaser (6): hide the last card on mobile, show from sm */;
}
