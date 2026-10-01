import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { ProductSplit } from "@/common/product-split/components/ProductSplit";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { ProductRating } from "@/common/product-rating/components/ProductRating";
import { Socials } from "@/common/social/components/Socials";
import { ProductGallery } from "@/features/shop/detail/components/molecules/ProductGallery";
import { ProductPrice } from "@/features/shop/detail/components/molecules/ProductPrice";
import { ProductSpecStrip } from "@/features/shop/detail/components/molecules/ProductSpecStrip";
import { productDetailData } from "@/data/features/shop/product-detail";
import type { ProductDetailProps } from "@/features/shop/detail/types";

const { ctaHref, viewer } = productDetailData;

export const ProductDetail = async ({ product, tone = "base" }: ProductDetailProps) => {
  const t = await getTranslations("shop-page");

  /* facts under the price: data value + its i18n label */
  const specRows = [
    { key: "category", label: t("detail.category"), value: t(`categories.${product.category}`) },
    { key: "unit", label: t("detail.unit"), value: t(product.unitKey) },
    { key: "sku", label: t("detail.sku"), value: product.sku },
    {
      key: "warranty",
      label: t("detail.warranty.label"),
      /* a warranty measured in years feeds its number into the label; lifetime has none */
      value: t(
        product.warrantyKey,
        "warrantyYears" in product ? { years: product.warrantyYears } : undefined,
      ),
    },
  ];

  return (
    <SectionWrapper id="product" tone={tone}>
      <Container>
        <ProductSplit
          media={
            <ProductGallery
              images={[product.image, ...product.gallery]}
              title={t(`catalog.${product.slug}.title`)}
              description={t(`catalog.${product.slug}.description`)}
              zoomLabel={t(viewer.zoom)}
              closeLabel={t(viewer.close)}
              previousLabel={t(viewer.previous)}
              nextLabel={t(viewer.next)}
            />
          }
          heading={
            /* category is not repeated here: the spec strip already carries it */
            <SectionHeading
              align="left"
              eyebrow={product.brand}
              title={t(`catalog.${product.slug}.titleLead`)}
              accent={t(`catalog.${product.slug}.titleAccent`)}
              description={t(`catalog.${product.slug}.description`)}
            />
          }
          points={
            /* kept as two children: the split's own gap is what separates the rows */
            <>
              <ProductRating
                rating={product.rating}
                label={t("detail.reviewCount", { rating: product.rating, count: product.reviews })}
                size="body"
              />
              <ProductPrice
                price={`$${product.price.toFixed(2)}`}
                unit={t(product.unitKey)}
                availability={product.availability}
                availabilityLabel={t(`availability.${product.availability}`)}
              />
            </>
          }
          stats={<ProductSpecStrip rows={specRows} />}
          action={
            /* calling is covered by the floating contact, so the quote stands alone */
            <Button href={ctaHref.href} pulse>
              {t(ctaHref.key)}
            </Button>
          }
          footer={
            /* the rule sits centered: its padding matches the column gap above it */
            <div className="grid grid-flow-col items-center justify-start gap-3 border-t border-line pt-7">
              <Text as="span" size="subhead" weight="semibold" text={`${t("detail.follow")}:`} />
              <Socials />
            </div>
          }
        />
      </Container>
    </SectionWrapper>
  );
};
