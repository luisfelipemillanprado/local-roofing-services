import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectList } from "@/shared-sections/projects/components/molecules/ProjectList";
import { getTranslations } from "next-intl/server";
import { projectsData } from "@/data/sections/projects";
import type { ProjectsProps } from "@/shared-sections/projects/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, items } = projectsData;

export const Projects = async ({ variant, limit }: ProjectsProps) => {
  const t = await getTranslations("project");
  /* data: order + image; text by key */
  /* limit: home summary, full on /gallery */
  const cards = items.slice(0, limit).map((project) => ({
    key: project.key,
    image: project.image,
    title: t(`items.${project.key}.title`),
    description: t(`items.${project.key}.description`),
  }));

  return (
    <SectionWrapper id="projects" tone="muted">
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <div className="mt-2">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
            </div>
          </div>

          {/* home: arrow to /gallery; gallery: zoom button */}
          <ProjectList
            cards={cards}
            href={variant === "viewAll" ? ctaHref.viewAll.href : undefined}
            actionLabel={variant === "viewAll" ? t(ctaHref.viewAll.key) : t("action.viewImage")}
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};
