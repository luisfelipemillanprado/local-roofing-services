import { ProductCard } from "@/shared-sections/products/components/molecules/ProductCard";
import type { ProductListProps } from "@/shared-sections/products/types";

/* render loop: cards → ProductCard grid */
export const ProductList = ({ cards, quoteLabel, quoteHref, collapseBelowLg = false }: ProductListProps) => (
  <div
    className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
      collapseBelowLg ? "[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:grid" : ""
    }`}
  >
    {cards.map(({ key, ...card }) => (
      <ProductCard key={key} {...card} quoteLabel={quoteLabel} quoteHref={quoteHref} />
    ))}
  </div>
);
