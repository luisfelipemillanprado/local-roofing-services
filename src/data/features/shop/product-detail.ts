/* Shop product-detail scaffold: shared CTAs and panels.
   Per-product specs, SKU, warranty and extra gallery shots are still pending. */
export const productDetailData = {
  /* quote lands on the contact form */
  quoteCta: { key: "action.quote", href: "#contact" },
  /* trust cards: icon by key, never reusing a pitch icon */
  trust: [
    { key: "materials", icon: "package" },
    { key: "brands", icon: "stamp" },
    { key: "installation", icon: "drill" },
    { key: "warranty", icon: "fileCheck" },
  ],
  /* image viewer control labels by key */
  viewer: {
    zoom: "detail.viewImage",
    close: "detail.close",
    previous: "detail.previous",
    next: "detail.next",
  },
} as const;
