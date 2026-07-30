/* Shop product-detail scaffold: PLACEHOLDER values shared by every product.
   Replace with real per-product data later (gallery/colors/sizes/sku/tags). */
export const productDetailData = {
  /* CTAs (placeholder targets) */
  buyNowHref: { key: "detail.action.buyNow", href: "#contact" },
  addToCartHref: { key: "detail.action.addToCart", href: "#contact" },
  /* extra thumbnails appended after the product's own image (recycled) — 4 here + the product image = 5 */
  gallery: [
    "/images/products/product2.webp",
    "/images/products/product5.webp",
    "/images/products/product8.webp",
    "/images/products/product3.webp",
  ],
  /* swatches: hex only (placeholder) */
  colors: [
    { key: "natural", hex: "#d9d4c7" },
    { key: "slate", hex: "#5b6470" },
    { key: "charcoal", hex: "#2f3338" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XLL"],
  sku: "GHF19S245AAA",
  tabs: ["details", "reviews", "shipping"],
} as const;
