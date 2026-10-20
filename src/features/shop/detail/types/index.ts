import type { ProductAvailability } from "@/common/availability-dot/types";
import type { SectionWrapperTone } from "@/common/section-wrapper/types";
import type { productDetailData } from "@/data/features/shop/product-detail";
import type { shopProductsData } from "@/data/features/shop/products";

/* the catalog entry the route already resolved, handed down whole */
type ShopProduct = (typeof shopProductsData.items)[number];

export interface ProductOverviewProps {
  product: ShopProduct;
  tone?: SectionWrapperTone;
}

export interface ProductInfoProps {
  product: ShopProduct;
  tone?: SectionWrapperTone;
}

export interface ProductPriceProps {
  price: string;
  unit: string;
  availability: ProductAvailability;
  availabilityLabel: string;
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
interface SpecRow {
  key: string;
  label: string;
  value: string;
}

/* strip and table take the same resolved rows, each in its own finish */
export interface ProductSpecStripProps {
  rows: SpecRow[];
}

export interface ProductSpecTableProps {
  rows: SpecRow[];
}

export interface ProductAboutProps {
  paragraphs: string[];
}

/* a product this one pairs with, linked to its own page */
interface CompatibleItem {
  key: string;
  title: string;
  href: string;
}

/* one ticked list: its heading and its lines */
interface ChecklistItem {
  key: ProductFeatureKey;
  label: string;
  items: string[];
}

/* the pairings block: its heading plus the linked rows */
export interface ProductCompatibleListProps {
  label: string;
  items: CompatibleItem[];
}

/* the ticked lists that follow the pairings */
export interface ProductChecklistsProps {
  lists: ChecklistItem[];
}

/* the strip rows the data declares; the value map must cover exactly these */
export type ProductSpecStripKey = (typeof productDetailData.specStrip)[number];

/* the tab keys the data declares; the panel map must cover exactly these */
export type ProductTabKey = (typeof productDetailData.tabs)[number];

/* the checklist panels the data declares, each with its own label and lines */
type ProductFeatureKey = (typeof productDetailData.features)[number];

/* the resolved tabs, then whatever each panel renders */
export interface ProductTabsProps {
  tabs: { key: ProductTabKey; label: string }[];
  paragraphs: string[];
  specRows: SpecRow[];
  compatible: ProductCompatibleListProps;
  checklists: ChecklistItem[];
}
