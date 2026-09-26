import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { ProductDetail } from "@/features/shop/components/organisms/ProductDetail";
import { ProductInfo } from "@/features/shop/components/organisms/ProductInfo";
import { Results } from "@/shared-sections/results/components/Results";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";
import { shopProductsData } from "@/data/features/shop/products";

const { items } = shopProductsData;

type Props = { params: Promise<{ locale: string; slug: string }> };

/* fixed product set -> unknown slug 404s */
export const dynamicParams = false;

/* SSG: one page per product slug */
export function generateStaticParams() {
  return items.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = items.find((item) => item.slug === slug);
  if (!product) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "shop-page" });
  return {
    title: t(`catalog.${product.slug}.title`),
    description: t(`catalog.${product.slug}.description`),
    ...(await routeMetadata(locale as Locale, `/shop/${slug}`)),
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  /* untrusted param -> resolve or 404 */
  const product = items.find((item) => item.slug === slug);
  if (!product) notFound();

  const t = await getTranslations("page-header.pages.shop");

  return (
    <>
      {/* shop hero verbatim, only the ghost CTA swaps to a way back to the catalog */}
      <PageHeader
        image="shop"
        titleLead={t(pageHeaderData.titleLeadKey)}
        titleAccent={t(pageHeaderData.titleAccentKey)}
        description={t(pageHeaderData.descriptionKey)}
        secondaryCta="shop"
      />
      <Marquee />
      <ProductDetail slug={slug} />
      <ProductInfo slug={slug} tone="muted" />
      <Results category={product.category} limit={6} />
      <Products tone="muted" limit={6} />
      <Contact />
    </>
  );
}
