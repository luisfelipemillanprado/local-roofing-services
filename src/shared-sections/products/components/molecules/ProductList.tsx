import clsx from "clsx";
import { ProductCard } from "@/common/product-card/components/ProductCard";
import type { ProductListProps } from "@/shared-sections/products/types";

/* render loop: cards → ProductCard grid */
export const ProductList = ({ cards, viewLabel, trimLastOnMobile = false }: ProductListProps) => (
  <div
    className={clsx(
      "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
      /* teaser (6): last card hidden on mobile, shown from md up */
      trimLastOnMobile && "[&>*:last-child]:hidden md:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ slug, ...card }) => (
      <ProductCard key={slug} {...card} viewLabel={viewLabel} href={`/shop/${slug}`} />
    ))}
  </div>
);
