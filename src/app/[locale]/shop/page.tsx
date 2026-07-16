import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
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
  const t = await getTranslations("shop-page.header");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={t("titleLead")}
          titleAccent={t("titleAccent")}
          description={t("description")}
          secondaryCta="services"
        />
        <ShopCatalog />
        <Contact tone="muted" />
      </main>
      <Footer />
    </>
  );
}
