import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectList } from "@/shared-sections/projects/components/molecules/ProjectList";
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
  /* limit+offset: home first six, about next six, full on /projects */
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
          <div className="grid justify-items-center gap-6 md:max-xl:mr-5 md:max-xl:grid-cols-[1fr_auto] md:max-xl:items-center md:max-xl:justify-items-stretch md:max-xl:gap-x-6">
            <SectionHeading
              align="center"
              flushFrom="md"
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description)}
            />
            <div className="mt-2 md:max-xl:mt-0">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
            </div>
          </div>

          {/* home/about: arrow link to the projects page; projects page: zoom button opens the viewer */}
          {variant === "viewAll" ? (
            <ProjectList
              cards={cards}
              renderAction={(card) => (
                <ArrowLink
                  href={ctaHref.viewAll.href}
                  label={`${card.description} ${t("action.viewProjects")}`}
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
