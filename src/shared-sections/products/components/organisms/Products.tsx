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
  const t = await getTranslations("products");
  const tShop = await getTranslations("shop-page");
  /* teaser: first N of the shop catalog; product copy from the shop namespace */
  const products = items.slice(0, limit).map((product) => ({
    slug: product.slug,
    title: tShop(`catalog.${product.slug}.title`),
    brand: product.brand,
    image: product.image,
    priceLabel: `$${product.price.toFixed(2)}`,
    unit: tShop(product.unitKey),
    rating: product.rating,
    reviews: product.reviews,
    availability: product.availability,
    availabilityLabel: tShop(`availability.${product.availability}`),
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
              <Button href="/shop" variant="secondary" pulse>
                {t("action.shop")}
              </Button>
            </div>
          </div>

          <ProductList products={products} viewLabel={tShop("action.view")} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
