import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectGrid } from "@/shared-sections/projects/components/molecules/ProjectGrid";
import { ProjectViewerGrid } from "@/shared-sections/projects/components/molecules/ProjectViewerGrid";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { projectsData } from "@/data/sections/projects";
import type { ProjectsProps } from "@/shared-sections/projects/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, items, viewer } = projectsData;

export const Projects = async ({ variant, tone = "muted", limit }: ProjectsProps) => {
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
                <Link
                  href={ctaHref.viewAll.href}
                  aria-label={`${card.description} ${t(ctaHref.viewAll.key)}`}
                  className="grid size-10 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  <ArrowRight className="size-5 -rotate-45 text-white" />
                </Link>
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
