import type { ProductCardItem } from "@/common/product-card-list/types";
import type { SectionWrapperTone } from "@/common/section-wrapper/types";
import type { shopCatalogData } from "@/data/features/shop/catalog";

/* the category keys the data declares; every chip, filter and result speaks this one */
export type ShopCategoryKey = (typeof shopCatalogData.categories)[number]["key"];

/* catalog entry: card fields plus what the browser filters and sorts on */
export interface ShopCatalogItem extends ProductCardItem {
  category: ShopCategoryKey;
  price: number;
  reviews: number;
}

/* one category chip: photo over its label */
interface CategoryItem {
  key: ShopCategoryKey;
  label: string;
  image: string;
}

/* the sort options the data declares; the comparator map must cover exactly these */
export type ShopSort = (typeof shopCatalogData.sortOrder)[number];

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  /* typing does not filter; the submit is what hands the query to the list */
  onSubmit: () => void;
  label: string;
  placeholder: string;
  submitLabel: string;
}

export interface CategoryStripProps {
  categories: CategoryItem[];
  active: ShopCategoryKey | null /* null while a query filters: no chip owns the result */;
  onSelect: (key: ShopCategoryKey) => void;
}

export interface SortDropdownProps {
  label: string;
  value: ShopSort;
  options: { value: ShopSort; label: string }[];
  onChange: (value: ShopSort) => void;
}

export interface ShopBrowserProps {
  items: ShopCatalogItem[];
  categories: CategoryItem[];
  viewLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchSubmitLabel: string;
  sortLabel: string;
  sortOptions: { value: ShopSort; label: string }[];
}

export interface ShopCatalogProps {
  tone?: SectionWrapperTone;
}

/* what the result list is filtered and sorted by */
export interface ShopResultsOptions {
  items: ShopCatalogItem[];
  category: ShopCategoryKey;
  /* where a query with no hits lands, so the grid is never left empty */
  defaultCategory: ShopCategoryKey;
  search: string;
  sort: ShopSort;
}

/* the grid's contents and which category owns them; null while a query is what filters */
export interface ShopResults {
  items: ShopCatalogItem[];
  category: ShopCategoryKey | null;
}
