export interface ProductsProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}

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

/* resolved per-card item for the list */
interface ProductCardItem extends Omit<ProductCardProps, "viewLabel" | "href"> {
  slug: string;
}

export interface ProductListProps {
  products: ProductCardItem[];
  viewLabel: string;
}
