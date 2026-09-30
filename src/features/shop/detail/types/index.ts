import type { ReactNode } from "react";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

export interface ProductDetailProps {
  slug: string;
  tone?: SectionTone;
}

export interface ProductInfoProps {
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
