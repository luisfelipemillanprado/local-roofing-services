import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { ProductTabs } from "@/features/shop/detail/components/molecules/ProductTabs";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductInfoProps } from "@/features/shop/detail/types";

const { tabs, features, trust } = productDetailData;

export const ProductInfo = async ({ product, tone = "base" }: ProductInfoProps) => {
  const t = await getTranslations("shop-page");

  /* write up: a real i18n array, so t.raw */
  const aboutParagraphs = t.raw(`items.${product.slug}.about`) as string[];
  /* spec sheet: a worded value is translated, a symbol measure ships as is */
  const specRows = product.specs.map((row) => ({
    key: row.key,
    label: t(`spec.${row.key}`),
    /* a counted value feeds its number in, so the unit can inflect; the rest carry none */
    value: "valueKey" in row ? t(row.valueKey, "n" in row ? { n: row.n } : undefined) : row.value,
  }));
  /* pairings: its heading over a row per pairing, title by key and href from the slug */
  const compatible = {
    label: t("detail.compatible"),
    items: product.compatible.map((paired) => ({
      key: paired,
      title: t(`items.${paired}.title`),
      href: `/shop/${paired}`,
    })),
  };
  /* checklists: label by key, items a real i18n array */
  const checklists = features.map((key) => ({
    key,
    label: t(`detail.features.${key}`),
    items: t.raw(`items.${product.slug}.features.${key}`) as string[],
  }));
  /* tabs: label by key, in the order the data declares */
  const tabItems = tabs.map((key) => ({ key, label: t(`detail.section.${key}`) }));
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
            tabsLabel={t("detail.section.label")}
            tabs={tabItems}
            paragraphs={aboutParagraphs}
            specRows={specRows}
            compatible={compatible}
            checklists={checklists}
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
