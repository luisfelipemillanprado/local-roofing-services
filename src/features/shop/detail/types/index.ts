import type { ProductAvailability } from "@/common/availability-dot/types";
import type { productDetailData } from "@/data/features/shop/product-detail";
import type { shopProductsData } from "@/data/features/shop/products";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* the catalog entry the route already resolved, handed down whole */
type ShopProduct = (typeof shopProductsData.items)[number];

export interface ProductDetailProps {
  product: ShopProduct;
  tone?: SectionTone;
}

export interface ProductInfoProps {
  product: ShopProduct;
  tone?: SectionTone;
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
interface ProductSpecRow {
  key: string;
  label: string;
  value: string;
}

/* strip and table take the same resolved rows, each in its own finish */
export interface ProductSpecProps {
  rows: ProductSpecRow[];
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
  key: string;
  label: string;
  items: string[];
}

/* what it pairs with in the catalog, then the ticked lists that follow it */
export interface ProductFeaturesProps {
  compatibleLabel: string;
  compatible: CompatibleItem[];
  checklists: ChecklistItem[];
}

/* the tab keys the data declares, so a renamed one fails the build */
type ProductTabKey = (typeof productDetailData.tabs)[number];

/* the resolved tabs, then whatever each panel renders */
export interface ProductTabsProps {
  tabs: { key: ProductTabKey; label: string }[];
  paragraphs: string[];
  specRows: ProductSpecRow[];
  compatibleLabel: string;
  compatible: CompatibleItem[];
  checklists: ChecklistItem[];
}
