"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Stars } from "@/common/stars/components/Stars";
import { Socials } from "@/common/social/components/Socials";
import { layoutData } from "@/data/global/layout";
import { ProductGallery } from "@/features/shop/components/molecules/ProductGallery";
import { ProductSpecStrip } from "@/features/shop/components/molecules/ProductSpecStrip";
import { shopProductsData } from "@/data/features/shop/products";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductAvailability } from "@/common/product-card/types";
import type { ProductDetailProps } from "@/features/shop/types";

const { ctaHref, viewer } = productDetailData;

/* availability dot color per state */
const dots: Record<ProductAvailability, string> = {
  "in-stock": "bg-malachite",
  "limited-stock": "bg-primary",
  "out-of-stock": "bg-foreground-muted",
};

export const ProductDetail = ({ slug, tone = "base" }: ProductDetailProps) => {
  const t = useTranslations("shop-page");
  const product = shopProductsData.items.find((item) => item.slug === slug);

  if (!product) return null;

  const title = t(`catalog.${product.slug}.title`);
  const description = t(`catalog.${product.slug}.description`);
  const category = t(`categories.${product.category}`);

  return (
    <SectionWrapper id="product" tone={tone}>
      <Container>
        {/* same split gutter as the about band: 80px stacked, 52px side by side */}
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-13">
          <ProductGallery
            images={[product.image, ...product.gallery]}
            title={title}
            description={description}
            zoomLabel={t(viewer.zoom)}
            closeLabel={t(viewer.close)}
            previousLabel={t(viewer.previous)}
            nextLabel={t(viewer.next)}
          />

          <div className="grid content-start gap-7">
            {/* category is not repeated here: the spec strip already carries it */}
            <SectionHeading
              align="left"
              eyebrow={product.brand}
              title={t(`catalog.${product.slug}.titleLead`)}
              accent={t(`catalog.${product.slug}.titleAccent`)}
              description={description}
            />

            <div className="grid grid-flow-col items-center justify-start gap-2">
              <Stars rating={product.rating} />
              <Text
                as="span"
                size="body"
                tone="muted"
                text={t("detail.reviewCount", { rating: product.rating, count: product.reviews })}
              />
            </div>

            {/* price, unit and stock state share one row, all seated on the price baseline */}
            <div className="grid grid-flow-col items-end justify-start gap-2">
              <TextNumber size="display" text={`$${product.price.toFixed(2)}`} />
              <span className="mb-1">
                <Text as="span" size="body" tone="muted" text={`/ ${t(product.unitKey)}`} />
              </span>
              <span className="mb-1 ml-3 grid grid-flow-col items-center justify-start gap-2">
                <span className={`size-2 rounded-full ${dots[product.availability]}`} />
                <Text as="span" size="body" tone="muted" text={t(`availability.${product.availability}`)} />
              </span>
            </div>

            {/* the fact card and the cta take extra top margin beyond the gap, as in about */}
            <div className="mt-2">
              <ProductSpecStrip
                rows={[
                  { key: "category", label: t("detail.category"), value: category },
                  { key: "unit", label: t("detail.unit"), value: t(product.unitKey) },
                  /* every product shows both columns; a missing value reads as none */
                  {
                    key: "sku",
                    label: t("detail.sku"),
                    value: "sku" in product ? product.sku : t("detail.none"),
                  },
                  {
                    key: "warranty",
                    label: t("detail.section.warranty"),
                    /* a timed warranty feeds its years into the label */
                    value:
                      "warrantyKey" in product
                        ? t(
                            product.warrantyKey,
                            "warrantyYears" in product ? { years: product.warrantyYears } : undefined,
                          )
                        : t("detail.none"),
                  },
                ]}
              />
            </div>

            {/* calling is covered by the floating contact, so the quote stands alone */}
            <div className="mt-2.5 justify-self-start">
              <Button href={ctaHref.href} pulse>
                {t(ctaHref.key)}
              </Button>
            </div>

            {/* the rule sits centered: its padding matches the column gap above it */}
            <div className="grid grid-flow-col items-center justify-start gap-3 border-t border-line pt-7">
              <Text as="span" size="subhead" weight="semibold" text={`${t("detail.share")}:`} />
              <Socials items={layoutData.socials} />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
