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

  /* write up: a real i18n array, so t.raw */
  const aboutParagraphs = t.raw(`catalog.${product.slug}.about`) as string[];
  /* spec sheet: a worded value is translated, a measure ships as is */
  const specRows = product.specs.map((row) => ({
    key: row.key,
    label: t(`detail.spec.${row.key}`),
    value: "valueKey" in row ? t(row.valueKey) : row.value,
  }));
  /* pairings: title by key, href built from the slug */
  const compatibleItems = product.compatible.map((paired) => ({
    key: paired,
    title: t(`catalog.${paired}.title`),
    href: `/shop/${paired}`,
  }));
  /* checklists: label by key, items a real i18n array */
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
                panel: <ProductAbout paragraphs={aboutParagraphs} />,
              },
              {
                key: "specifications",
                label: t("detail.section.specifications"),
                panel: <ProductSpecTable rows={specRows} />,
              },
              {
                key: "features",
                label: t("detail.section.features"),
                panel: (
                  <ProductFeatures
                    compatibleLabel={t("detail.features.compatible")}
                    compatible={compatibleItems}
                    checklists={checklists}
                  />
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
