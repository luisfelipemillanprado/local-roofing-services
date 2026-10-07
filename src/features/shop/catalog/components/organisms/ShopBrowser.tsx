"use client";

import { useState } from "react";
import { ShopSearchBar } from "@/features/shop/catalog/components/molecules/ShopSearchBar";
import { CategoryStrip } from "@/features/shop/catalog/components/molecules/CategoryStrip";
import { SortSelect } from "@/features/shop/catalog/components/molecules/SortSelect";
import { ShopProductList } from "@/features/shop/catalog/components/molecules/ShopProductList";
import { useShopResults } from "@/hooks/shop/useShopResults";
import type { ShopBrowserProps } from "@/features/shop/catalog/types";

export const ShopBrowser = ({
  items,
  categories,
  viewLabel,
  searchLabel,
  searchPlaceholder,
  searchSubmitLabel,
  sortLabel,
  sortOptions,
  previousLabel,
  nextLabel,
}: ShopBrowserProps) => {
  const [category, setCategory] = useState(categories[0]!.key);
  /* query is what the box holds; search is what the list has been told to use */
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(sortOptions[0]!.value);

  const results = useShopResults({
    items,
    category,
    defaultCategory: categories[0]!.key,
    search,
    sort,
  });

  return (
    <div className="grid gap-10">
      {/* search takes the row, sort rides beside it from lg */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
        <ShopSearchBar
          value={query}
          onChange={(next) => {
            setQuery(next);
            /* an empty box means the whole catalog, however it was emptied */
            if (next === "") setSearch("");
          }}
          onSubmit={() => setSearch(query)}
          label={searchLabel}
          placeholder={searchPlaceholder}
          submitLabel={searchSubmitLabel}
        />
        {/* content-width on phones too, or the grid stretches the control across */}
        <div className="justify-self-start lg:justify-self-end">
          <SortSelect label={sortLabel} value={sort} options={sortOptions} onChange={setSort} />
        </div>
      </div>
      <CategoryStrip
        categories={categories}
        active={results.category}
        /* the box belongs to whoever types in it: a category drops the filter, not the text */
        onSelect={(key) => {
          setCategory(key);
          setSearch("");
        }}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
      <ShopProductList cards={results.items} viewLabel={viewLabel} />
    </div>
  );
};
