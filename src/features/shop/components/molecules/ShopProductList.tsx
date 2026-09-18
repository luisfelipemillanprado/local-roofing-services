import { ProductCard } from "@/common/product-card/components/ProductCard";
import type { ShopProductListProps } from "@/features/shop/types";

/* shop render loop: catalog and related results → ProductCard grid */
export const ShopProductList = ({ cards, viewLabel }: ShopProductListProps) => (
  <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-6 lg:gap-6 xl:grid-cols-3">
    {cards.map(({ slug, ...card }) => (
      <ProductCard key={slug} {...card} viewLabel={viewLabel} href={`/shop/${slug}`} />
    ))}
  </div>
);
