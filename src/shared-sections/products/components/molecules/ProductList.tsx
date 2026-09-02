import clsx from "clsx";
import { ProductCard } from "@/common/product-card/components/ProductCard";
import type { ProductListProps } from "@/shared-sections/products/types";

/* render loop: cards → ProductCard grid */
export const ProductList = ({ cards, viewLabel, trimLastOnMobile = false }: ProductListProps) => (
  <div
    className={clsx(
      "grid gap-7 sm:grid-cols-2 sm:gap-x-6 lg:gap-6 xl:grid-cols-3",
      /* teaser (6): last card hidden on mobile, shown from sm up */
      trimLastOnMobile && "[&>*:last-child]:hidden sm:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ slug, ...card }) => (
      <ProductCard key={slug} {...card} viewLabel={viewLabel} href={`/shop/${slug}`} />
    ))}
  </div>
);
