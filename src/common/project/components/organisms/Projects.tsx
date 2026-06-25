import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { getTranslations } from "next-intl/server";
import { projectsSection } from "@/data/sections/projects";
import type { ProjectsProps } from "@/common/project/types";

export const Projects = async ({ exploreHref, limit }: ProjectsProps = {}) => {
  const t = await getTranslations("project");
  // `limit` lets the home show a summary while /projects shows the full gallery.
  const projects = projectsSection.items.slice(0, limit);

  return (
    <Section id="projects" tone="muted">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          {exploreHref && (
            <Button href={exploreHref} variant="secondary">
              {t("viewAll")}
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => {
            const title = t(`items.${project.key}.title`);
            return (
              <Reveal
                as="article"
                key={project.key}
                delay={i * 0.08}
                className={`group relative overflow-hidden rounded-card ${i === 1 ? "sm:col-span-2" : ""}`}
              >
                <Media
                  src={project.image}
                  alt={title}
                  shape="gallery"
                  overlay="strong"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <Text
                      as="p"
                      size="label"
                      tone="primary"
                      weight="semibold"
                      tracking="wide"
                      text={t(`items.${project.key}.category`)}
                    />
                    <div className="mt-1">
                      <Title as="h3" size="card" weight="bold" tone="white" text={title} />
                    </div>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
