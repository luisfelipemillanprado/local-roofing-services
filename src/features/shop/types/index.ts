import type { LucideIcon } from "lucide-react";
import type { ProductAvailability } from "@/shared-sections/products/types";

type ShopCategory = "shingles" | "metal" | "underlayment" | "sealants" | "tools" | "accessories";
export type ShopSort = "featured" | "newest" | "priceAsc" | "priceDesc" | "topRated";

/* resolved product for the browser: data literals + i18n labels */
export interface ShopProduct {
  slug: string;
  title: string;
  brand: string;
  category: ShopCategory;
  price: number;
  priceLabel: string;
  unit: string;
  rating: number;
  reviews: number;
  availability: ProductAvailability;
  availabilityLabel: string;
  addedAt: string;
  featured: boolean;
  order: number /* original catalog index; drives the Featured sort */;
  image: string;
}

/* top category chip */
export interface CategoryPill {
  value: string /* "all" | ShopCategory */;
  label: string;
  icon: LucideIcon;
}

export interface CategoryPillsProps {
  pills: CategoryPill[];
  active: string;
  onSelect: (value: string) => void;
}

/* one selectable filter row */
interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
  variant: "check" | "radio";
}

/* committed filter set (search, category, sort all live outside the panel) */
export interface ShopFilters {
  brands: string[];
  price: string;
  rating: string;
  availability: string[];
}

export interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export interface FilterPanelProps {
  label: string;
  clearLabel: string;
  applyLabel: string;
  brandTitle: string;
  brandOptions: FilterOption[];
  priceTitle: string;
  priceOptions: FilterOption[];
  ratingTitle: string;
  ratingOptions: FilterOption[];
  availabilityTitle: string;
  availabilityOptions: FilterOption[];
  value: ShopFilters;
  onApply: (next: ShopFilters) => void;
}

export interface SortSelectProps {
  label: string;
  value: ShopSort;
  options: { value: ShopSort; label: string }[];
  onChange: (value: ShopSort) => void;
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
