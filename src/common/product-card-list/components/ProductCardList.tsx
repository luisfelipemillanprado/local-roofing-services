import clsx from "clsx";
import { ProductCard } from "@/common/product-card-list/components/ProductCard";
import type { ProductCardListProps } from "@/common/product-card-list/types";

/* product card grid: two columns from sm, three from xl */
export const ProductCardList = ({ cards, viewLabel, trimLastOnMobile = false }: ProductCardListProps) => (
  <div
    className={clsx(
      "grid gap-7 sm:grid-cols-2 sm:gap-x-6 lg:gap-6 xl:grid-cols-3",
      /* teaser (6): last card hidden on mobile, shown from sm up */
      trimLastOnMobile && "[&>*:last-child]:hidden sm:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ slug, ...card }) => (
      <ProductCard key={slug} {...card} viewLabel={viewLabel} />
    ))}
  </div>
);
