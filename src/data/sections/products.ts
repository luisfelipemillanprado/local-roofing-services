/* Products section: ordered items (image/brand/price/rating), text by key */
export const productsData = {
  /* section CTA: i18n key (text) + href (placeholder until /shop ships) */
  ctaHref: { key: "action.shop", href: "#" },
  /* per-product card button: i18n key (text) + href (destination) */
  quoteHref: { key: "action.quote", href: "#contact" },
  items: [
    {
      key: "shingles",
      image: "/images/products/product1.webp",
      brand: "GAF",
      price: "$42.95",
      unitKey: "units.bundle",
      rating: 4.5,
      reviews: 124,
    },
    {
      key: "metalPanel",
      image: "/images/products/product2.webp",
      brand: "McElroy Metal",
      price: "$89.50",
      unitKey: "units.panel",
      rating: 4.5,
      reviews: 86,
    },
    {
      key: "underlayment",
      image: "/images/products/product3.webp",
      brand: "Owens Corning",
      price: "$68.20",
      unitKey: "units.roll",
      rating: 4.5,
      reviews: 59,
    },
    {
      key: "skylight",
      image: "/images/products/product4.webp",
      brand: "VELUX",
      price: "$599.00",
      unitKey: "units.each",
      rating: 5,
      reviews: 41,
    },
    {
      key: "atticFan",
      image: "/images/products/product5.webp",
      brand: "Air Vent",
      price: "$349.00",
      unitKey: "units.each",
      rating: 4.5,
      reviews: 38,
    },
    {
      key: "coating",
      image: "/images/products/product6.webp",
      brand: "Gaco",
      price: "$64.30",
      unitKey: "units.bucket",
      rating: 4.5,
      reviews: 52,
    },
  ],
} as const;
