import type { ProductCardProps } from "@/common/product-card/types";
import type { shopProductsData } from "@/data/features/shop/products";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* resolved product card: data literals + i18n labels, keyed by slug */
interface ShopProduct extends Omit<ProductCardProps, "viewLabel" | "href"> {
  slug: string;
}

export interface ShopProductListProps {
  cards: ShopProduct[];
  viewLabel: string;
}

/* catalog entry: card fields plus what the browser filters and sorts on */
export interface ShopCatalogItem extends ShopProduct {
  category: string;
  price: number;
}

/* one category chip: photo over its label */
interface ShopCategoryItem {
  key: string;
  label: string;
  image: string;
}

/* the sort options the data declares; the comparator map must cover exactly these */
export type ShopSort = (typeof shopProductsData.sortOrder)[number];

export interface ShopSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  /* typing no longer filters; these two are what commit and reset the query */
  onSubmit: () => void;
  onClear: () => void;
  label: string;
  placeholder: string;
  submitLabel: string;
  clearLabel: string;
}

export interface CategoryStripProps {
  categories: ShopCategoryItem[];
  active: string;
  onSelect: (key: string) => void;
  previousLabel: string;
  nextLabel: string;
}

export interface SortSelectProps {
  label: string;
  value: ShopSort;
  options: { value: ShopSort; label: string }[];
  onChange: (value: ShopSort) => void;
}

export interface ShopBrowserProps {
  items: ShopCatalogItem[];
  categories: ShopCategoryItem[];
  viewLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchSubmitLabel: string;
  searchClearLabel: string;
  sortLabel: string;
  sortOptions: { value: ShopSort; label: string }[];
  previousLabel: string;
  nextLabel: string;
}

export interface ShopCatalogProps {
  tone?: SectionTone;
}

/* what the result list is filtered and sorted by */
export interface ShopResultsOptions {
  items: ShopCatalogItem[];
  category: string;
  search: string;
  sort: ShopSort;
}
