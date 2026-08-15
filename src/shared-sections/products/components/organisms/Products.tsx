import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProductList } from "@/shared-sections/products/components/molecules/ProductList";
import { getTranslations } from "next-intl/server";
import { shopProductsData } from "@/data/shop/products";
import type { ProductsProps } from "@/shared-sections/products/types";
import { Container } from "@/common/container/components/Container";

const { items } = shopProductsData;

export const Products = async ({ tone = "muted", limit }: ProductsProps) => {
  const t = await getTranslations("shop-page");
  /* teaser: first N of the real catalog; text by slug */
  const products = items.slice(0, limit).map((product) => ({
    slug: product.slug,
    title: t(`catalog.${product.slug}.title`),
    brand: product.brand,
    image: product.image,
    priceLabel: `$${product.price.toFixed(2)}`,
    unit: t(product.unitKey),
    rating: product.rating,
    reviews: product.reviews,
    availability: product.availability,
    availabilityLabel: t(`availability.${product.availability}`),
  }));

  return (
    <SectionWrapper id="products" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t("teaser.eyebrow")}
              title={t("teaser.titleLead")}
              accent={t("teaser.titleAccent")}
              description={t("teaser.description")}
            />
            <div className="mt-2">
              <Button href="/shop" variant="secondary" pulse>
                {t("teaser.shopAll")}
              </Button>
            </div>
          </div>

          <ProductList products={products} viewLabel={t("action.view")} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
