import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductFeatures } from "@/features/shop/detail/components/molecules/ProductFeatures";
import { ProductTabs } from "@/features/shop/detail/components/molecules/ProductTabs";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductInfoProps } from "@/features/shop/detail/types";

const { trust } = productDetailData;

export const ProductInfo = async ({ product, tone = "base" }: ProductInfoProps) => {
  const t = await getTranslations("shop-page");

  /* long write up: one block per paragraph */
  const aboutParagraphs = t.raw(`catalog.${product.slug}.about`) as string[];
  /* spec sheet: a worded value is translated, a measure ships as is */
  const specRows = product.specs.map((row) => ({
    key: row.key,
    label: t(`detail.spec.${row.key}`),
    value: "valueKey" in row ? t(row.valueKey) : row.value,
  }));
  /* pairings: each one links to its own page */
  const compatibleItems = product.compatible.map((paired) => ({
    key: paired,
    title: t(`catalog.${paired}.title`),
    href: `/shop/${paired}`,
  }));
  /* ticked lists that follow the pairings */
  const checklists = [
    {
      key: "install",
      label: t("detail.features.install"),
      items: t.raw(`catalog.${product.slug}.features.install`) as string[],
    },
    {
      key: "coverage",
      label: t("detail.features.coverage"),
      items: t.raw(`catalog.${product.slug}.features.coverage`) as string[],
    },
  ];
  /* trust cards: icon from data, text by key */
  const trustCards = trust.map(({ key, icon }) => ({
    key,
    icon,
    title: t(`detail.trust.${key}.title`),
    description: t(`detail.trust.${key}.description`),
    highlights: {
      label: t(`detail.trust.${key}.highlights.label`),
      accent: t(`detail.trust.${key}.highlights.accent`),
    },
  }));

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
                  <div className="max-w-3xl">
                    <ProductAbout paragraphs={aboutParagraphs} />
                  </div>
                ),
              },
              {
                key: "specifications",
                label: t("detail.section.specifications"),
                panel: (
                  <div className="max-w-3xl">
                    <ProductSpecTable rows={specRows} />
                  </div>
                ),
              },
              {
                key: "features",
                label: t("detail.section.features"),
                panel: (
                  <div className="max-w-3xl">
                    <ProductFeatures
                      compatibleLabel={t("detail.features.compatible")}
                      compatible={compatibleItems}
                      checklists={checklists}
                    />
                  </div>
                ),
              },
            ]}
          />

          {/* the short column rides along while the tabs scroll, like the pitch band */}
          <div className="lg:sticky lg:top-28">
            <IconCardList cards={trustCards} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
