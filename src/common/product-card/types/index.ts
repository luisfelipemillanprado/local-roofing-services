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
