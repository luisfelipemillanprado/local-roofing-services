export type ProductAvailability = "in-stock" | "limited-stock" | "out-of-stock";

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
