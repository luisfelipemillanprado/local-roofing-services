"use client";

import { useMemo } from "react";
import type { ShopCatalogItem, ShopResultsOptions, ShopSort } from "@/features/shop/catalog/types";

/* the data owns the sort set; Record makes this map match it exactly */
const sorters: Record<ShopSort, (a: ShopCatalogItem, b: ShopCatalogItem) => number> = {
  best: () => 0 /* catalog order */,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  topRated: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
};

/* a query searches the whole catalog and overrides the category */
export const useShopResults = ({ items, category, search, sort }: ShopResultsOptions) =>
  /* named options, so category and search cannot be passed in the wrong order */
  useMemo(() => {
    const query = search.trim().toLowerCase();
    return items
      .filter((item) =>
        query === ""
          ? item.category === category
          : item.title.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query),
      )
      .sort(sorters[sort]);
  }, [items, category, search, sort]);
