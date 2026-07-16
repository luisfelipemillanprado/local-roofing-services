import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { teamData } from "@/data/sections/team";
import { Container } from "@/common/container/components/Container";

const { items } = teamData;

type Props = { params: Promise<{ locale: string; slug: string }> };

/* fixed member set -> unknown slug 404s */
export const dynamicParams = false;

/* SSG: one page per member slug */
export function generateStaticParams() {
  return items.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = items.find((item) => item.slug === slug);
  if (!member) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "team" });
  return {
    title: t(`items.${member.key}.title`),
    description: t(`items.${member.key}.description`),
  };
}

export default async function TeamDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  /* untrusted param -> resolve or 404 */
  const member = items.find((item) => item.slug === slug);
  if (!member) notFound();

  const t = await getTranslations("team");
  const title = t(`items.${member.key}.title`);
  /* first word leads white, the rest carries the faint accent */
  const [titleLead, ...accentWords] = title.split(" ");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={titleLead}
          titleAccent={accentWords.join(" ")}
          secondaryCta="team"
          description={t(`items.${member.key}.intro`)}
        />
        <SectionWrapper id="team-detail" tone="base">
          <Container>
            <div className="grid justify-items-start gap-10">
              <Media src={member.image} alt={title} shape="wide" sizes="100vw" />
              <Button href="/about" variant="secondary">
                {t("action.viewAll")}
              </Button>
            </div>
          </Container>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
