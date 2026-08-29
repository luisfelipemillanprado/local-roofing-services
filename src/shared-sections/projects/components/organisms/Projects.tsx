import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectGrid } from "@/shared-sections/projects/components/molecules/ProjectGrid";
import { ProjectViewerGrid } from "@/shared-sections/projects/components/molecules/ProjectViewerGrid";
import { ArrowLink } from "@/common/call-to-actions/components/ArrowLink";
import { getTranslations } from "next-intl/server";
import { projectsData } from "@/data/shared-sections/projects";
import type { ProjectsProps } from "@/shared-sections/projects/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, items, viewer } = projectsData;

export const Projects = async ({ variant, tone = "muted", limit, offset = 0 }: ProjectsProps) => {
  const t = await getTranslations("project");
  /* data: order + image; text by key */
  /* limit+offset: home first six, about next six, full on /gallery */
  const cards = items.slice(offset, limit == null ? undefined : offset + limit).map((project) => ({
    key: project.key,
    image: project.image,
    title: t(`items.${project.key}.title`),
    description: t(`items.${project.key}.description`),
  }));

  return (
    <SectionWrapper id="projects" tone={tone}>
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

          {/* home: arrow link to the gallery; gallery: zoom button opens the viewer */}
          {variant === "viewAll" ? (
            <ProjectGrid
              cards={cards}
              renderAction={(card) => (
                <ArrowLink
                  href={ctaHref.viewAll.href}
                  label={`${card.description} ${t("action.viewGallery")}`}
                  pulse
                />
              )}
            />
          ) : (
            <ProjectViewerGrid
              cards={cards}
              actionLabel={t("action.viewImage")}
              closeLabel={t(viewer.close)}
              previousLabel={t(viewer.previous)}
              nextLabel={t(viewer.next)}
            />
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
};
