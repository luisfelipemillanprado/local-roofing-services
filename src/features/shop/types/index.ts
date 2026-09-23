import type { ReactNode } from "react";
import type { ProductCardProps } from "@/common/product-card/types";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

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

export interface ShopCatalogProps {
  tone?: SectionTone;
}

export interface ProductDetailProps {
  slug: string;
  tone?: SectionTone;
}

export interface ProductInfoProps {
  slug: string;
  tone?: SectionTone;
}

export interface RelatedProductsProps {
  slug: string;
  tone?: SectionTone;
}

export interface ProductGalleryProps {
  images: string[];
  title: string;
  description: string;
  zoomLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

/* resolved spec row: data value + its i18n label */
interface ProductSpecRow {
  key: string;
  label: string;
  value: string;
}

export interface ProductSpecStripProps {
  rows: ProductSpecRow[];
}

export interface ProductSpecTableProps {
  rows: ProductSpecRow[];
}

export interface ProductHighlightsProps {
  items: string[];
}

export interface ProductAboutProps {
  paragraphs: string[];
}

/* what it pairs with in the catalog, then how it goes on and what is covered */
export interface ProductFeaturesProps {
  compatibleLabel: string;
  compatible: { key: string; title: string; href: string }[];
  installLabel: string;
  install: string[];
  coverageLabel: string;
  coverage: string[];
}

/* one tab: its label plus the already-built panel content */
export interface ProductTabsProps {
  tabs: { key: string; label: string; panel: ReactNode }[];
}
