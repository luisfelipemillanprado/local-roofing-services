"use client";

import { useMemo } from "react";
import type {
  ShopCatalogItem,
  ShopCategoryKey,
  ShopResults,
  ShopResultsOptions,
  ShopSort,
} from "@/features/shop/catalog/types";

/* the data owns the sort set; Record makes this map match it exactly */
const sorters: Record<ShopSort, (a: ShopCatalogItem, b: ShopCatalogItem) => number> = {
  topRated: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  mostReviewed: (a, b) => b.reviews - a.reviews || b.rating - a.rating,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
};

const inCategory = (items: ShopCatalogItem[], category: ShopCategoryKey) =>
  items.filter((item) => item.category === category);

/* phones type without accents, so both sides are compared folded */
const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const matching = (items: ShopCatalogItem[], search: string) => {
  const query = fold(search.trim());
  /* the three a buyer arrives with: the name, the maker, or the reference off the box */
  return items.filter(
    (item) =>
      fold(item.title).includes(query) || fold(item.brand).includes(query) || fold(item.sku).includes(query),
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
