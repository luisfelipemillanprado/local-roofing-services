import type { ProductCardProps } from "@/common/product-card/types";

export interface ProductsProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}

/* resolved per-card item for the list */
interface ProductCardItem extends Omit<ProductCardProps, "viewLabel" | "href"> {
  slug: string;
}

export interface ProductListProps {
  products: ProductCardItem[];
  viewLabel: string;
}
