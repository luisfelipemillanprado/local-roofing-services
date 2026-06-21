import type { IconBadgeKey } from "@/common/icon-badge/types";

/** Keys must match `Services.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ServiceKey = "gutters" | "energyEfficient" | "shingle" | "metal" | "dormers" | "inspection";

export type ServiceItem = {
  key: ServiceKey;
  icon: IconBadgeKey;
  image: string;
};

/** Shared "Services" section; ordered list (icon/image), text resolved by key. */
export const servicesSection: { items: ServiceItem[] } = {
  items: [
    { key: "gutters", icon: "droplets", image: "/images/services/service1.webp" },
    { key: "energyEfficient", icon: "energy", image: "/images/services/service2.webp" },
    { key: "shingle", icon: "layers", image: "/images/services/service3.webp" },
    { key: "metal", icon: "home", image: "/images/services/service4.webp" },
    { key: "dormers", icon: "sun", image: "/images/services/service5.webp" },
    { key: "inspection", icon: "wrench", image: "/images/services/service6.webp" },
  ],
};
