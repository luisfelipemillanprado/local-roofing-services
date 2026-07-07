import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectList } from "@/shared-sections/projects/components/molecules/ProjectList";
import { getTranslations } from "next-intl/server";
import { projectsData } from "@/data/sections/projects";
import type { ProjectsProps } from "@/shared-sections/projects/types";

const { items, ctaHref } = projectsData;

export const Projects = async ({ viewAll, limit }: ProjectsProps = {}) => {
  const t = await getTranslations("project");
  /* data: order + image + slug→href; text by key, stagger delay */
  /* limit: home summary, full on /projects */
  const cards = items.slice(0, limit).map((project, i) => ({
    key: project.key,
    image: project.image,
    href: `/projects/${project.slug}`,
    title: t(`items.${project.key}.title`),
    description: t(`items.${project.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <Section id="projects" tone="muted">
      <div className="container-x grid gap-13">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto] md:justify-items-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          {viewAll && (
            <div className="mt-2">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          )}
        </div>

        <ProjectList cards={cards} learnMore={t("learnMore")} collapseBelowLg={viewAll} />
      </div>
    </Section>
  );
};
