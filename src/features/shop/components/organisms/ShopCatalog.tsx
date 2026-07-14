import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { ProductList } from "@/shared-sections/products/components/molecules/ProductList";
import { getTranslations } from "next-intl/server";
import { productsData } from "@/data/sections/products";
import { Container } from "@/common/container/components/Container";

const { items, quoteHref } = productsData;

export const ShopCatalog = async () => {
  const t = await getTranslations("product");
  /* data: order + image/price/rating; text by key — full catalog, no limit */
  const cards = items.map((product, i) => ({
    key: product.key,
    image: product.image,
    price: product.price,
    rating: product.rating,
    reviews: product.reviews,
    title: t(`items.${product.key}.title`),
    unit: t(product.unitKey),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper id="catalog">
      <Container>
        <ProductList cards={cards} quoteLabel={t(quoteHref.key)} quoteHref={quoteHref.href} />
      </Container>
    </SectionWrapper>
  );
};
