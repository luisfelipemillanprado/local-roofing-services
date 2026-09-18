import type { ProductCardProps } from "@/common/product-card/types";

/* resolved product card: data literals + i18n labels, keyed by slug */
export interface ShopProduct extends Omit<ProductCardProps, "viewLabel" | "href"> {
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

export type ShopSort = "best" | "priceAsc" | "priceDesc" | "topRated";

/* account row icons; no logic behind them yet */
interface ShopAccountLabels {
  saved: string;
  account: string;
  orders: string;
  cart: string;
}

export interface ShopSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  accountLabels: ShopAccountLabels;
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
  accountLabels: ShopAccountLabels;
  sortLabel: string;
  sortOptions: { value: ShopSort; label: string }[];
  previousLabel: string;
  nextLabel: string;
}

export interface ProductDetailProps {
  slug: string;
}

export interface RelatedProductsProps {
  slug: string;
  tone?: "base" | "muted";
}

export interface ProductGalleryProps {
  images: string[];
  active: number;
  onSelect: (index: number) => void;
  alt: string;
}

export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  decreaseLabel: string;
  increaseLabel: string;
}

export interface ProductTabsProps {
  tabs: { key: string; label: string; body: string }[];
  active: string;
  onSelect: (key: string) => void;
}
