"use client";

import { useMemo } from "react";
import type {
  ShopCatalogItem,
  ShopResults,
  ShopResultsOptions,
  ShopSort,
} from "@/features/shop/catalog/types";

/* the data owns the sort set; Record makes this map match it exactly */
const sorters: Record<ShopSort, (a: ShopCatalogItem, b: ShopCatalogItem) => number> = {
  best: () => 0 /* catalog order */,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  topRated: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
};

const inCategory = (items: ShopCatalogItem[], category: string) =>
  items.filter((item) => item.category === category);

const matching = (items: ShopCatalogItem[], search: string) => {
  const query = search.trim().toLowerCase();
  return items.filter(
    (item) => item.title.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query),
  );
};

/* what the grid shows and which chip owns it: a query beats the category, a miss falls back */
export const useShopResults = ({
  items,
  category,
  defaultCategory,
  search,
  sort,
}: ShopResultsOptions): ShopResults =>
  /* named options, so category and search cannot be passed in the wrong order */
  useMemo(() => {
    const sorted = (list: ShopCatalogItem[]) => list.sort(sorters[sort]);
    if (search.trim() === "") return { items: sorted(inCategory(items, category)), category };

    const hits = matching(items, search);
    return hits.length
      ? { items: sorted(hits), category: null }
      : { items: sorted(inCategory(items, defaultCategory)), category: defaultCategory };
  }, [items, category, defaultCategory, search, sort]);
