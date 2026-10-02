"use client";

import { useState } from "react";
import { ShopSearchBar } from "@/features/shop/catalog/components/molecules/ShopSearchBar";
import { CategoryStrip } from "@/features/shop/catalog/components/molecules/CategoryStrip";
import { SortSelect } from "@/features/shop/catalog/components/molecules/SortSelect";
import { ShopProductList } from "@/features/shop/catalog/components/molecules/ShopProductList";
import { useShopResults } from "@/hooks/shop/useShopResults";
import type { ShopBrowserProps, ShopSort } from "@/features/shop/catalog/types";

export const ShopBrowser = ({
  items,
  categories,
  viewLabel,
  searchLabel,
  searchPlaceholder,
  account,
  sortLabel,
  sortOptions,
  previousLabel,
  nextLabel,
}: ShopBrowserProps) => {
  const [category, setCategory] = useState(categories[0]!.key);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ShopSort>("best");

  const results = useShopResults({ items, category, search, sort });

  return (
    <div className="grid gap-10">
      <ShopSearchBar
        value={search}
        onChange={setSearch}
        label={searchLabel}
        placeholder={searchPlaceholder}
        account={account}
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
