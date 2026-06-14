import {
  Droplets,
  Zap,
  Layers,
  Home,
  Sun,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { blurs } from "@/data/blurs";

/** Keys must match `Services.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ServiceKey =
  | "gutters"
  | "energyEfficient"
  | "shingle"
  | "metal"
  | "dormers"
  | "inspection";

export type ServiceItem = {
  key: ServiceKey;
  icon: LucideIcon;
  image: string;
  blur: string;
};

/**
 * Shared "Services" section. The ordered list (with icon/image/blur) lives here;
 * the text is resolved by `key` from next-intl — no positional index merge.
 */
export const servicesSection: { items: ServiceItem[] } = {
  items: [
    { key: "gutters", icon: Droplets, image: "/images/services/service1.webp", blur: blurs.image },
    { key: "energyEfficient", icon: Zap, image: "/images/services/service2.webp", blur: blurs.image },
    { key: "shingle", icon: Layers, image: "/images/services/service3.webp", blur: blurs.image },
    { key: "metal", icon: Home, image: "/images/services/service4.webp", blur: blurs.image },
    { key: "dormers", icon: Sun, image: "/images/services/service5.webp", blur: blurs.image },
    { key: "inspection", icon: Wrench, image: "/images/services/service6.webp", blur: blurs.image },
  ],
};
