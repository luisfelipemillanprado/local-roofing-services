"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { LayoutGrid, Layers, Grid2x2, ScrollText, Droplets, Hammer, Package } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { CategoryPills } from "@/features/shop/components/molecules/CategoryPills";
import { FilterPanel } from "@/features/shop/components/molecules/FilterPanel";
import { SearchBox } from "@/features/shop/components/molecules/SearchBox";
import { SortSelect } from "@/features/shop/components/molecules/SortSelect";
import { ProductList } from "@/shared-sections/products/components/molecules/ProductList";
import { shopProductsData } from "@/data/shop/products";
import type { CategoryPill, ShopFilters, ShopProduct, ShopSort } from "@/features/shop/types";

const { items } = shopProductsData;

/* category chip icons (presentation) */
const CATEGORY_ICONS = {
  all: LayoutGrid,
  shingles: Layers,
  metal: Grid2x2,
  underlayment: ScrollText,
  sealants: Droplets,
  tools: Hammer,
  accessories: Package,
} as const;
const CATEGORY_ORDER = [
  "all",
  "shingles",
  "metal",
  "underlayment",
  "sealants",
  "tools",
  "accessories",
] as const;

/* price bracket bounds [min, max) */
const PRICE_BOUNDS: Record<string, [number, number]> = {
  all: [0, Infinity],
  b1: [0, 25],
  b2: [25, 75],
  b3: [75, 200],
  b4: [200, Infinity],
};

const SORTERS: Record<ShopSort, (a: ShopProduct, b: ShopProduct) => number> = {
  featured: (a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order,
  newest: (a, b) => b.addedAt.localeCompare(a.addedAt),
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  topRated: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
};
const SORT_ORDER: ShopSort[] = ["featured", "newest", "priceAsc", "priceDesc", "topRated"];

const NO_FILTERS: ShopFilters = { brands: [], price: "all", rating: "0", availability: [] };

export const ShopBrowser = () => {
  const t = useTranslations("shop-page");

  /* resolve once: data literals + i18n labels */
  const products = useMemo<ShopProduct[]>(
    () =>
      items.map((p, i) => ({
        slug: p.slug,
        title: t(`catalog.${p.slug}.title`),
        brand: p.brand,
        category: p.category,
        price: p.price,
        priceLabel: `$${p.price.toFixed(2)}`,
        unit: t(p.unitKey),
        rating: p.rating,
        reviews: p.reviews,
        availability: p.availability,
        availabilityLabel: t(`availability.${p.availability}`),
        addedAt: p.addedAt,
        featured: p.featured,
        order: i,
        image: p.image,
      })),
    [t],
  );

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<ShopFilters>(NO_FILTERS);
  const [sort, setSort] = useState<ShopSort>("featured");

  const pills: CategoryPill[] = CATEGORY_ORDER.map((value) => ({
    value,
    label: t(`categories.${value}`),
    icon: CATEGORY_ICONS[value],
  }));

  /* facet options with counts over the full catalog */
  const brandOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of products) counts.set(p.brand, (counts.get(p.brand) ?? 0) + 1);
    return [...counts.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([value, count]) => ({ value, label: value, count }));
  }, [products]);

  const availabilityOptions = (["in-stock", "limited-stock", "out-of-stock"] as const).map((value) => ({
    value,
    label: t(`availability.${value}`),
    count: products.filter((p) => p.availability === value).length,
  }));

  const priceOptions = [
    { value: "all", label: t("filters.priceAll") },
    { value: "b1", label: t("filters.priceUnder", { max: 25 }) },
    { value: "b2", label: t("filters.priceRange", { min: 25, max: 75 }) },
    { value: "b3", label: t("filters.priceRange", { min: 75, max: 200 }) },
    { value: "b4", label: t("filters.priceOver", { min: 200 }) },
  ];

  const ratingUp = t("filters.ratingUp");
  const ratingOptions = [
    { value: "0", label: t("filters.ratingAny") },
    { value: "4", label: `4 ★ ${ratingUp}` },
    { value: "4.5", label: `4.5 ★ ${ratingUp}` },
    { value: "5", label: `5 ★ ${ratingUp}` },
  ];

  const sortOptions = SORT_ORDER.map((value) => ({ value, label: t(`sort.${value}`) }));

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    const [min, max] = PRICE_BOUNDS[filters.price];
    const minRating = Number(filters.rating);
    return products
      .filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (query === "" || p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)) &&
          (filters.brands.length === 0 || filters.brands.includes(p.brand)) &&
          p.price >= min &&
          p.price < max &&
          p.rating >= minRating &&
          (filters.availability.length === 0 || filters.availability.includes(p.availability)),
      )
      .sort(SORTERS[sort]);
  }, [products, category, search, filters, sort]);

  const total = products.length;
  const countText =
    results.length === total
      ? t("results", { count: results.length })
      : t("resultsFiltered", { count: results.length, total });

  const reset = () => {
    setCategory("all");
    setSearch("");
    setFilters(NO_FILTERS);
  };

  return (
    <div className="grid gap-6">
      <CategoryPills pills={pills} active={category} onSelect={setCategory} />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <FilterPanel
            label={t("filters.button")}
            clearLabel={t("filters.clear")}
            applyLabel={t("filters.apply")}
            brandTitle={t("filters.brand")}
            brandOptions={brandOptions}
            priceTitle={t("filters.price")}
            priceOptions={priceOptions}
            ratingTitle={t("filters.rating")}
            ratingOptions={ratingOptions}
            availabilityTitle={t("filters.availability")}
            availabilityOptions={availabilityOptions}
            value={filters}
            onApply={setFilters}
          />
          <Text as="p" size="body" tone="muted" weight="semibold" text={countText} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder={t("filters.searchPlaceholder")}
            label={t("filters.search")}
          />
          <SortSelect label={t("sort.label")} value={sort} options={sortOptions} onChange={setSort} />
        </div>
      </div>

      {results.length === 0 ? (
        <div className="grid justify-items-center gap-3 rounded-panel border border-dashed border-line py-16 text-center">
          <Text as="p" size="lead" weight="bold" text={t("emptyTitle")} />
          <Text tone="muted" text={t("emptyHint")} />
          <button type="button" onClick={reset} className="mt-1">
            <Text as="span" size="body" weight="semibold" tone="primary" text={t("filters.clear")} />
          </button>
        </div>
      ) : (
        <ProductList cards={results} viewLabel={t("action.view")} />
      )}
    </div>
  );
};
