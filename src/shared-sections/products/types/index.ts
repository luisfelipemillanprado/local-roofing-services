export interface ProductsProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}

export interface ProductCardProps {
  image: string;
  brand: string;
  title: string;
  price: string;
  unit: string;
  rating: number;
  reviews: number;
  quoteLabel: string;
  quoteHref: string;
  delay?: number;
}

/* resolved per-card item for the list */
interface ProductCardItem extends Pick<
  ProductCardProps,
  "image" | "brand" | "title" | "price" | "unit" | "rating" | "reviews" | "delay"
> {
  key: string;
}

export interface ProductListProps {
  cards: ProductCardItem[];
  quoteLabel: string;
  quoteHref: string;
  /* 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
