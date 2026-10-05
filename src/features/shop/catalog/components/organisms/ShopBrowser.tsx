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
  searchSubmitLabel,
  searchClearLabel,
  sortLabel,
  sortOptions,
  previousLabel,
  nextLabel,
}: ShopBrowserProps) => {
  const [category, setCategory] = useState(categories[0]!.key);
  /* query is what the box holds; search is what the list has been told to use */
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ShopSort>("best");

  const results = useShopResults({ items, category, search, sort });

  return (
    <div className="grid gap-10">
      {/* search takes the row, sort sits in the slot the account icons used to hold */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
        <ShopSearchBar
          value={query}
          onChange={setQuery}
          onSubmit={() => setSearch(query)}
          onClear={() => {
            setQuery("");
            setSearch("");
          }}
          label={searchLabel}
          placeholder={searchPlaceholder}
          submitLabel={searchSubmitLabel}
          clearLabel={searchClearLabel}
        />
        {/* content-width on phones too, or the grid stretches the select across */}
        <div className="justify-self-start lg:justify-self-end">
          <SortSelect label={sortLabel} value={sort} options={sortOptions} onChange={setSort} />
        </div>
      </div>
      <CategoryStrip
        categories={categories}
        active={category}
        onSelect={setCategory}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
      <ShopProductList cards={results} viewLabel={viewLabel} />
    </div>
  );
};
