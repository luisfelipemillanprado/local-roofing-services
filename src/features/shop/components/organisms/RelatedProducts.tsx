import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { ResultsList } from "@/features/shop/components/molecules/ResultsList";
import { shopProductsData } from "@/data/shop/products";
import type { RelatedProductsProps, ShopProduct } from "@/features/shop/types";

const { items } = shopProductsData;

/* related = same category first, then the rest; the current product is excluded */
export const RelatedProducts = async ({ slug, tone = "muted" }: RelatedProductsProps) => {
  const current = items.find((p) => p.slug === slug);
  if (!current) return null;

  const t = await getTranslations("shop-page");

  const pool = items.filter((p) => p.slug !== slug);
  const related = [
    ...pool.filter((p) => p.category === current.category),
    ...pool.filter((p) => p.category !== current.category),
  ].slice(0, 4);

  /* resolve: data literals + i18n labels (same shape the catalog cards use) */
  const products: ShopProduct[] = related.map((p, i) => ({
    slug: p.slug,
    title: t(`catalog.${p.slug}.title`),
    brand: p.brand,
    category: p.category,
    price: p.price,
    priceLabel: `$${p.price.toFixed(2)}`,
    unit: t(p.unitKey),
    rating: p.rating,
    reviews: p.reviews,
    availability: p.availability,
    availabilityLabel: t(`availability.${p.availability}`),
    addedAt: p.addedAt,
    featured: p.featured,
    order: i,
    image: p.image,
  }));

  return (
    <SectionWrapper id="related" tone={tone}>
      <Container>
        <div className="grid gap-13">
          <SectionHeading
            align="center"
            eyebrow={t("related.eyebrow")}
            title={t("related.titleLead")}
            accent={t("related.titleAccent")}
            description={t("related.description")}
          />
          <ResultsList products={products} viewLabel={t("action.view")} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
