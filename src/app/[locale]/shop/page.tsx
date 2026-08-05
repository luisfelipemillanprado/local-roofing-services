import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { ShopCatalog } from "@/features/shop/components/organisms/ShopCatalog";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "shop-page.meta",
  });
  return { title: t("title"), description: t("description") };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.shop");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="shop"
          titleLead={t(pageHeaderData.titleLeadKey)}
          titleAccent={t(pageHeaderData.titleAccentKey)}
          description={t(pageHeaderData.descriptionKey)}
          secondaryCta="services"
        />
        <Marquee />
        <ShopCatalog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
