import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { ShopBrowser } from "@/features/shop/components/organisms/ShopBrowser";
import { shopProductsData } from "@/data/features/shop/products";
import type { ShopCatalogProps, ShopSort } from "@/features/shop/types";

const { categories, categoryImages, items } = shopProductsData;
const sortOrder: ShopSort[] = ["best", "priceAsc", "priceDesc", "topRated"];

/* shop catalog: search and category chips over the product grid */
export const ShopCatalog = async ({ tone = "base" }: ShopCatalogProps) => {
  const t = await getTranslations("shop-page");
  /* resolve: data literals + i18n labels */
  const products = items.map((product) => ({
    slug: product.slug,
    title: t(`catalog.${product.slug}.title`),
    brand: product.brand,
    image: product.image,
    category: product.category,
    price: product.price,
    priceLabel: `$${product.price.toFixed(2)}`,
    unit: t(product.unitKey),
    rating: product.rating,
    reviews: product.reviews,
    availability: product.availability,
    availabilityLabel: t(`availability.${product.availability}`),
  }));

  return (
    <SectionWrapper id="catalog" tone={tone}>
      <Container>
        <ShopBrowser
          items={products}
          categories={categories.map((category) => ({
            key: category,
            label: t(`categories.${category}`),
            image: categoryImages.find((item) => item.key === category)!.image,
          }))}
          viewLabel={t("action.view")}
          searchLabel={t("search.label")}
          searchPlaceholder={t("search.placeholder")}
          accountLabels={{
            saved: t("account.saved"),
            account: t("account.account"),
            orders: t("account.orders"),
            cart: t("account.cart"),
          }}
          sortLabel={t("sort.label")}
          sortOptions={sortOrder.map((value) => ({ value, label: t(`sort.${value}`) }))}
          previousLabel={t("strip.previous")}
          nextLabel={t("strip.next")}
        />
      </Container>
    </SectionWrapper>
  );
};
