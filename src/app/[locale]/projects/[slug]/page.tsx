import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { projectsData } from "@/data/sections/projects";
import { Container } from "@/common/container/components/Container";

const { items } = projectsData;

type Props = { params: Promise<{ locale: string; slug: string }> };

/* fixed project set -> unknown slug 404s */
export const dynamicParams = false;

/* SSG: one page per project slug */
export function generateStaticParams() {
  return items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = items.find((item) => item.slug === slug);
  if (!project) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "project" });
  return {
    title: t(`items.${project.key}.title`),
    description: t(`items.${project.key}.category`),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  /* untrusted param -> resolve or 404 */
  const project = items.find((item) => item.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("project");
  const title = t(`items.${project.key}.title`);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow={t("eyebrow")}
          titleLead={title}
          titleAccent=""
          description={t(`items.${project.key}.category`)}
        />
        <SectionWrapper id="project-detail" tone="base">
          <Container>
            <div className="grid justify-items-start gap-10">
              <Media src={project.image} alt={title} shape="wide" sizes="100vw" />
              <Button href="/projects" variant="secondary">
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
