/* the shop's one price format: US dollars in both locales, since es-US renders identically */
export const formatPrice = (price: number) =>
  price.toLocaleString("en-US", { style: "currency", currency: "USD" });
