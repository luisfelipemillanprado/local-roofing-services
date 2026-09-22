"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Breadcrumb } from "@/common/breadcrumb/components/Breadcrumb";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Stars } from "@/common/stars/components/Stars";
import { Socials } from "@/common/social/components/Socials";
import { layoutData } from "@/data/global/layout";
import { ProductGallery } from "@/features/shop/components/molecules/ProductGallery";
import { ProductSpecStrip } from "@/features/shop/components/molecules/ProductSpecStrip";
import { ProductSpecTable } from "@/features/shop/components/molecules/ProductSpecTable";
import { ProductAbout } from "@/features/shop/components/molecules/ProductAbout";
import { ProductHighlights } from "@/features/shop/components/molecules/ProductHighlights";
import { ProductDocuments } from "@/features/shop/components/molecules/ProductDocuments";
import { ProductTabs } from "@/features/shop/components/molecules/ProductTabs";
import { InstallCallout } from "@/features/shop/components/molecules/InstallCallout";
import { ProductTrustPanel } from "@/features/shop/components/molecules/ProductTrustPanel";
import { shopProductsData } from "@/data/features/shop/products";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductAvailability } from "@/common/product-card/types";
import type { ProductDetailProps } from "@/features/shop/types";

const { quoteCta, callCta, installCta, trust, viewer } = productDetailData;

/* availability dot color per state */
const dots: Record<ProductAvailability, string> = {
  "in-stock": "bg-malachite",
  "limited-stock": "bg-primary",
  "out-of-stock": "bg-foreground-muted",
};

export const ProductDetail = ({ slug }: ProductDetailProps) => {
  const t = useTranslations("shop-page");
  const product = shopProductsData.items.find((item) => item.slug === slug);

  if (!product) return null;

  const title = t(`catalog.${product.slug}.title`);
  const description = t(`catalog.${product.slug}.description`);
  const category = t(`categories.${product.category}`);
  /* a researched product carries both its spec sheet and its highlight copy */
  const researched = "specs" in product ? product : undefined;

  return (
    <SectionWrapper id="product" tone="muted">
      <Container>
        <div className="grid gap-10">
          <Breadcrumb
            label={t("detail.breadcrumb.label")}
            items={[
              { key: "home", label: t("detail.breadcrumb.home"), href: "/" },
              { key: "shop", label: t("detail.breadcrumb.shop"), href: "/shop" },
              /* the catalog keeps its category in state, so this step has no page to open */
              { key: product.category, label: category },
              { key: product.slug, label: title },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery
              images={[product.image, ...product.gallery]}
              title={title}
              description={description}
              zoomLabel={t(viewer.zoom)}
              closeLabel={t(viewer.close)}
              previousLabel={t(viewer.previous)}
              nextLabel={t(viewer.next)}
            />

            <div className="grid content-start gap-5">
              {/* category is not repeated here: the breadcrumb and the spec strip both carry it */}
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
                  size="caption"
                  tone="muted"
                  text={t("detail.reviewCount", { rating: product.rating, count: product.reviews })}
                />
              </div>

              <div className="grid gap-2">
                <div className="grid grid-flow-col items-end justify-start gap-2">
                  <TextNumber size="display" text={`$${product.price.toFixed(2)}`} />
                  <span className="mb-1">
                    <Text as="span" size="body" tone="muted" text={`/ ${t(product.unitKey)}`} />
                  </span>
                </div>
                <div className="grid grid-flow-col items-center justify-start gap-2">
                  <span className={`size-2 rounded-full ${dots[product.availability]}`} />
                  <Text
                    as="span"
                    size="caption"
                    tone="muted"
                    text={t(`availability.${product.availability}`)}
                  />
                </div>
              </div>

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

              <div className="grid justify-items-start gap-3 sm:grid-flow-col sm:justify-start sm:gap-4">
                <Button href={quoteCta.href} pulse>
                  {t(quoteCta.key)}
                </Button>
                <Button href={callCta.href} variant="secondary">
                  {t(callCta.key)}
                </Button>
              </div>

              <InstallCallout
                title={t("detail.install.title")}
                description={t("detail.install.description")}
                ctaLabel={t(installCta.key)}
                ctaHref={installCta.href}
              />

              <div className="grid grid-flow-col items-center justify-start gap-3 border-t border-line pt-5">
                <Text as="span" size="caption" weight="semibold" text={`${t("detail.share")}:`} />
                <Socials items={layoutData.socials} />
              </div>
            </div>
          </div>

          {/* info row: tabs and trust block in halves, gutter matching the row above */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductTabs
              tabs={[
                {
                  key: "description",
                  label: t("detail.section.description"),
                  panel: (
                    <div className="grid max-w-3xl gap-5">
                      {/* the long about copy, so the tab never repeats the heading's short line */}
                      {t.has(`catalog.${product.slug}.about`) ? (
                        <ProductAbout paragraphs={t.raw(`catalog.${product.slug}.about`) as string[]} />
                      ) : (
                        <Text size="caption" tone="muted" text={description} />
                      )}
                      {researched && (
                        <ProductHighlights
                          items={t.raw(`catalog.${researched.slug}.highlights`) as string[]}
                        />
                      )}
                    </div>
                  ),
                },
                /* only a product with a researched spec sheet gets the tab */
                ...(researched
                  ? [
                      {
                        key: "specifications",
                        label: t("detail.section.specifications"),
                        panel: (
                          <div className="max-w-3xl">
                            <ProductSpecTable
                              rows={researched.specs.map((row) => ({
                                key: row.key,
                                label: t(`detail.spec.${row.key}`),
                                /* a worded value is translated, a measure ships as is */
                                value: "valueKey" in row ? t(row.valueKey) : row.value,
                              }))}
                            />
                          </div>
                        ),
                      },
                    ]
                  : []),
                /* only a product with verified manufacturer PDFs gets the tab */
                ...("documents" in product
                  ? [
                      {
                        key: "documents",
                        label: t("detail.section.documents"),
                        panel: (
                          <div className="max-w-3xl">
                            <ProductDocuments
                              items={product.documents.map(({ key, href }) => ({
                                key,
                                label: t(key),
                                href,
                              }))}
                              newTabLabel={t("detail.document.newTab")}
                            />
                          </div>
                        ),
                      },
                    ]
                  : []),
              ]}
            />

            <ProductTrustPanel
              items={trust.map((key) => ({
                key,
                title: t(`detail.trust.${key}.title`),
                description: t(`detail.trust.${key}.description`),
              }))}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
