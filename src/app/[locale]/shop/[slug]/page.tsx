import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { ProductDetail } from "@/features/shop/components/organisms/ProductDetail";
import { RelatedProducts } from "@/features/shop/components/organisms/RelatedProducts";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";
import { shopProductsData } from "@/data/shop/products";

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
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  /* untrusted param -> resolve or 404 */
  const product = items.find((item) => item.slug === slug);
  if (!product) notFound();

  const t = await getTranslations("shop-page");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="shop"
          titleLead={t(`catalog.${product.slug}.titleLead`)}
          titleAccent={t(`catalog.${product.slug}.titleAccent`)}
          secondaryCta="shop"
          description={t(`catalog.${product.slug}.description`)}
        />
        <Marquee />
        <ProductDetail slug={slug} />
        <RelatedProducts slug={slug} tone="muted" />
        <Contact tone="base" />
      </main>
      <Footer />
    </>
  );
}
