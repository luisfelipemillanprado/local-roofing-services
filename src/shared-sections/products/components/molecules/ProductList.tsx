import { ProductCard } from "@/common/product-card/components/ProductCard";
import type { ProductListProps } from "@/shared-sections/products/types";

/* render loop: cards → ProductCard grid */
export const ProductList = ({ cards, viewLabel }: ProductListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ slug, ...card }) => (
      <ProductCard key={slug} {...card} viewLabel={viewLabel} href={`/shop/${slug}`} />
    ))}
  </div>
);
