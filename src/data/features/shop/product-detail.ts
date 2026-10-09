/* Shop product detail: what the page composes, identical for all 71 products */
export const productDetailData = {
  /* the detail cta lands on the contact form, same wording as every other section */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* spec strip rows in render order, label by key; each key has its own value */
  specStrip: ["category", "unit", "sku", "warranty"],
  /* panel tabs in render order, label by key; each key has its own panel */
  tabs: ["about", "specifications", "features"],
  /* checklist panels on the features tab, label and items by key */
  features: ["install", "coverage"],
  /* trust cards: icon by key, never reusing a pitch icon */
  trust: [
    { key: "materials", icon: "package" },
    { key: "brands", icon: "stamp" },
    { key: "installation", icon: "drill" },
    { key: "warranty", icon: "fileCheck" },
  ],
  /* image viewer labels by key; zoom sits on the gallery button that opens it */
  viewer: {
    zoom: "detail.viewImage",
    close: "detail.close",
    previous: "detail.previous",
    next: "detail.next",
  },
} as const;
