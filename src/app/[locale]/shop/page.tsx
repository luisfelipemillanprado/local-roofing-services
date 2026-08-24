import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { ShopCatalog } from "@/features/shop/components/organisms/ShopCatalog";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata.pages.shop",
  });
  return {
    title: t("title"),
    description: t("description"),
    ...(await routeMetadata(locale as Locale, "/shop")),
  };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.shop");

  return (
    <>
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
    </>
  );
}
