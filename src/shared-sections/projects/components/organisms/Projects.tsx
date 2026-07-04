import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProjectsGallery } from "@/shared-sections/projects/components/molecules/ProjectsGallery";
import { getTranslations } from "next-intl/server";
import { projectsData } from "@/data/sections/projects";
import type { ProjectsProps } from "@/shared-sections/projects/types";

export const Projects = async ({ exploreHref, limit }: ProjectsProps = {}) => {
  const t = await getTranslations("project");
  /* limit: home shows a summary, /projects the full gallery */
  const projects = projectsData.items.slice(0, limit);
  /* projects: image/highlighted from data, text by key, stagger delay */
  const projectItems = projects.map((project, i) => ({
    key: project.key,
    image: project.image,
    title: t(`items.${project.key}.title`),
    category: t(`items.${project.key}.category`),
    highlighted: project.highlighted,
    delay: i * 0.08,
  }));

  return (
    <Section id="projects" tone="muted">
      <div className="container-x grid gap-14">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto] md:justify-items-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          {exploreHref && (
            <div className="mt-2">
              <Button href={exploreHref} variant="secondary" pulse>
                {t("viewAll")}
              </Button>
            </div>
          )}
        </div>

        <ProjectsGallery items={projectItems} />
      </div>
    </Section>
  );
};
