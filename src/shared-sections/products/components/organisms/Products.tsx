import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProductList } from "@/shared-sections/products/components/molecules/ProductList";
import { getTranslations } from "next-intl/server";
import { productsData } from "@/data/sections/products";
import type { ProductsProps } from "@/shared-sections/products/types";
import { Container } from "@/common/container/components/Container";

const { items, ctaHref, quoteHref } = productsData;

export const Products = async ({ tone = "base", limit }: ProductsProps) => {
  const t = await getTranslations("product");
  /* data: order + image/brand/price/rating; text by key */
  /* limit: the section is a summary on every page */
  const cards = items.slice(0, limit).map((product, i) => ({
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
    <SectionWrapper id="products" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />
            <div className="mt-2">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <ProductList
            cards={cards}
            quoteLabel={t(quoteHref.key)}
            quoteHref={quoteHref.href}
            collapseBelowLg
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};
