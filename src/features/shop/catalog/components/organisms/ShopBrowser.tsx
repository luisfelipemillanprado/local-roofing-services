"use client";

import { useState } from "react";
import { SearchBar } from "@/features/shop/catalog/components/molecules/SearchBar";
import { CategoryStrip } from "@/features/shop/catalog/components/molecules/CategoryStrip";
import { SortDropdown } from "@/features/shop/catalog/components/molecules/SortDropdown";
import { ProductCardList } from "@/common/product-card-list/components/ProductCardList";
import { useShopResults } from "@/utils/hooks/shop/useShopResults";
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
    <div className="grid gap-10 sm:gap-11 md:gap-12">
      {/* search takes the row, sort rides beside it from md */}
      <div className="grid gap-10 sm:gap-11 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
        <SearchBar
          value={query}
          onChange={(next) => {
            setQuery(next);
            /* an empty box drops the search, however it was emptied */
            if (next === "") setSearch("");
          }}
          onSubmit={() => setSearch(query)}
          label={searchLabel}
          placeholder={searchPlaceholder}
          submitLabel={searchSubmitLabel}
        />
        {/* centred while it owns the line; on a phone the control nearly fills the row anyway */}
        <div className="grid sm:justify-center">
          <SortDropdown label={sortLabel} value={sort} options={sortOptions} onChange={setSort} />
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
      />
      <ProductCardList cards={results.items} viewLabel={viewLabel} />
    </div>
  );
};
