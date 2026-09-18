"use client";

import { useMemo, useState } from "react";
import { ShopSearchBar } from "@/features/shop/components/molecules/ShopSearchBar";
import { CategoryStrip } from "@/features/shop/components/molecules/CategoryStrip";
import { SortSelect } from "@/features/shop/components/molecules/SortSelect";
import { ShopProductList } from "@/features/shop/components/molecules/ShopProductList";
import type { ShopBrowserProps, ShopCatalogItem, ShopSort } from "@/features/shop/types";

const sorters: Record<ShopSort, (a: ShopCatalogItem, b: ShopCatalogItem) => number> = {
  best: () => 0 /* catalog order */,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  topRated: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
};

export const ShopBrowser = ({
  items,
  categories,
  viewLabel,
  searchLabel,
  searchPlaceholder,
  accountLabels,
  sortLabel,
  sortOptions,
  previousLabel,
  nextLabel,
}: ShopBrowserProps) => {
  const [category, setCategory] = useState(categories[0]!.key);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ShopSort>("best");

  /* a query searches the whole catalog and overrides the category */
  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items
      .filter((item) =>
        query === ""
          ? item.category === category
          : item.title.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query),
      )
      .sort(sorters[sort]);
  }, [items, category, search, sort]);

  return (
    <div className="grid gap-10">
      <ShopSearchBar
        value={search}
        onChange={setSearch}
        label={searchLabel}
        placeholder={searchPlaceholder}
        accountLabels={accountLabels}
      />
      <CategoryStrip
        categories={categories}
        active={category}
        onSelect={setCategory}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
      <div className="grid gap-7">
        {/* left half stays free for the heading that lands here later */}
        <div className="justify-self-end">
          <SortSelect label={sortLabel} value={sort} options={sortOptions} onChange={setSort} />
        </div>
        <ShopProductList cards={results} viewLabel={viewLabel} />
      </div>
    </div>
  );
};
