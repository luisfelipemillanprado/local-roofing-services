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
  priceAsc: (a, b) => a.price - b.price || b.rating - a.rating || b.reviews - a.reviews,
  priceDesc: (a, b) => b.price - a.price || b.rating - a.rating || b.reviews - a.reviews,
};

const inCategory = (items: ShopCatalogItem[], category: ShopCategoryKey) =>
  items.filter((item) => item.category === category);

/* phones type without accents and skip the sku's dash, so both sides are compared folded */
const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/-/g, "")
    .toLowerCase();

const matching = (items: ShopCatalogItem[], search: string) => {
  const words = fold(search).split(/\s+/).filter(Boolean);
  /* a lone dash folds to nothing, and with no word to look for every item would match */
  if (!words.length) return [];
  /* the three a buyer arrives with in one line, so the maker and the model can be typed together */
  return items.filter((item) => {
    const haystack = fold(`${item.brand} ${item.title} ${item.sku}`);
    return words.every((word) => haystack.includes(word));
  });
};

/* what the grid shows and which chip owns it: a query beats the category, a miss falls back */
export const useShopResults = ({
  items,
  category,
  defaultCategory,
  search,
  sort,
}: ShopResultsOptions): ShopResults =>
  useMemo(() => {
    const sorted = (list: ShopCatalogItem[]) => list.sort(sorters[sort]);
    /* an empty box is the whole category the chip owns, not a miss that falls back */
    if (search.trim() === "") return { items: sorted(inCategory(items, category)), category };

    const hits = matching(items, search);
    return hits.length
      ? { items: sorted(hits), category: null }
      : { items: sorted(inCategory(items, defaultCategory)), category: defaultCategory };
  }, [items, category, defaultCategory, search, sort]);
