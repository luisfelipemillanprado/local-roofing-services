import { blurs } from "@/data/blurs";
import type { IconBadgeKey } from "@/common/icon-badge/types";

/** Keys must match `Services.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ServiceKey = "gutters" | "energyEfficient" | "shingle" | "metal" | "dormers" | "inspection";

export type ServiceItem = {
  key: ServiceKey;
  icon: IconBadgeKey;
  image: string;
  blur: string;
};

/** Shared "Services" section; ordered list (icon/image/blur), text resolved by key. */
export const servicesSection: { items: ServiceItem[] } = {
  items: [
    { key: "gutters", icon: "droplets", image: "/images/services/service1.webp", blur: blurs.image },
    { key: "energyEfficient", icon: "energy", image: "/images/services/service2.webp", blur: blurs.image },
    { key: "shingle", icon: "layers", image: "/images/services/service3.webp", blur: blurs.image },
    { key: "metal", icon: "home", image: "/images/services/service4.webp", blur: blurs.image },
    { key: "dormers", icon: "sun", image: "/images/services/service5.webp", blur: blurs.image },
    { key: "inspection", icon: "wrench", image: "/images/services/service6.webp", blur: blurs.image },
  ],
};
