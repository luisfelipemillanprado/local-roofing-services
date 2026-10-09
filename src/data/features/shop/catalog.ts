/* Shop catalog controls: what the /shop browse UI offers, never the products themselves */
export const shopCatalogData = {
  /* /shop category strip: chips render in this order, first one selected by default */
  categories: [
    { key: "shingles", image: "/images/categories/shingles.webp" },
    { key: "metal", image: "/images/categories/metal-roofing.webp" },
    { key: "underlayment", image: "/images/categories/underlayment.webp" },
    { key: "flashing", image: "/images/categories/flashing.webp" },
    { key: "accessories", image: "/images/categories/accessories.webp" },
    { key: "tools", image: "/images/categories/tools.webp" },
    { key: "supplies", image: "/images/categories/supplies.webp" },
  ],
  /* results sort in select order, label by key; each key has its own comparator */
  sortOrder: ["best", "priceAsc", "priceDesc", "topRated"],
} as const;
