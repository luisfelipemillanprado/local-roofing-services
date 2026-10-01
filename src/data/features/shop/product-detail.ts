/* Shop product detail: the shared cta, the feature and trust members, the viewer labels */
export const productDetailData = {
  /* the detail cta lands on the contact form, same wording as every other section */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* checklist panels on the features tab, label and items by key */
  features: ["install", "coverage"],
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
