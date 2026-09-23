"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Text } from "@/common/text/components/Text";
import { ProductSpecTable } from "@/features/shop/components/molecules/ProductSpecTable";
import { ProductAbout } from "@/features/shop/components/molecules/ProductAbout";
import { ProductHighlights } from "@/features/shop/components/molecules/ProductHighlights";
import { ProductFeatures } from "@/features/shop/components/molecules/ProductFeatures";
import { ProductTabs } from "@/features/shop/components/molecules/ProductTabs";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { shopProductsData } from "@/data/features/shop/products";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductInfoProps } from "@/features/shop/types";

const { trust } = productDetailData;

export const ProductInfo = ({ slug, tone = "base" }: ProductInfoProps) => {
  const t = useTranslations("shop-page");
  const product = shopProductsData.items.find((item) => item.slug === slug);

  if (!product) return null;

  const description = t(`catalog.${product.slug}.description`);
  /* a researched product carries both its spec sheet and its highlight copy */
  const researched = "specs" in product ? product : undefined;

  return (
    <SectionWrapper id="product-info" tone={tone}>
      <Container>
        {/* info row: same split, gutter and card grid as the pitch band */}
        <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductTabs
            tabs={[
              {
                key: "description",
                label: t("detail.section.description"),
                panel: (
                  <div className="grid max-w-3xl gap-5">
                    {/* the long about replaces both the short line and the highlights it repeats */}
                    {t.has(`catalog.${product.slug}.about`) ? (
                      <ProductAbout paragraphs={t.raw(`catalog.${product.slug}.about`) as string[]} />
                    ) : (
                      <>
                        <Text size="body" tone="muted" text={description} />
                        {researched && (
                          <ProductHighlights
                            items={t.raw(`catalog.${researched.slug}.highlights`) as string[]}
                          />
                        )}
                      </>
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
              /* only a product with researched pairings and copy gets the tab */
              ...("compatible" in product
                ? [
                    {
                      key: "features",
                      label: t("detail.section.features"),
                      panel: (
                        <div className="max-w-3xl">
                          <ProductFeatures
                            compatibleLabel={t("detail.features.compatible")}
                            compatible={product.compatible.map((slug) => ({
                              key: slug,
                              title: t(`catalog.${slug}.title`),
                              href: `/shop/${slug}`,
                            }))}
                            installLabel={t("detail.features.install")}
                            install={t.raw(`catalog.${product.slug}.features.install`) as string[]}
                            coverageLabel={t("detail.features.coverage")}
                            coverage={t.raw(`catalog.${product.slug}.features.coverage`) as string[]}
                          />
                        </div>
                      ),
                    },
                  ]
                : []),
            ]}
          />

          {/* the short column rides along while the tabs scroll, like the pitch band */}
          <div className="lg:sticky lg:top-28">
            <IconCardList
              cards={trust.map(({ key, icon }) => ({
                key,
                icon,
                title: t(`detail.trust.${key}.title`),
                description: t(`detail.trust.${key}.description`),
                highlights: {
                  label: t(`detail.trust.${key}.highlights.label`),
                  accent: t(`detail.trust.${key}.highlights.accent`),
                },
              }))}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
