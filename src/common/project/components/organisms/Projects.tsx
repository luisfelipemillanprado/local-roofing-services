import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { projectsSection } from "@/data/sections/projects";
import type { ProjectsProps } from "@/common/project/types";

export async function Projects({ exploreHref, limit }: ProjectsProps = {}) {
  const t = await getTranslations("project");
  // `limit` lets the home show a summary while /projects shows the full gallery.
  const projects = projectsSection.items.slice(0, limit);

  return (
    <section id="projects" className="bg-ink py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            theme="dark"
            align="center"
            title={
              <>
                {t("titleLead")}
                <span className="block text-primary">
                  {t("titleAccent")}
                </span>
              </>
            }
            description={t("description")}
          />
          {exploreHref && (
            <Button href={exploreHref} variant="primary" withArrow className="shrink-0">
              {t("explore")}
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
              className={`group relative overflow-hidden rounded-card ${
                i === 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3.4] w-full">
                <Image
                  src={project.image}
                  alt={title}
                  placeholder="blur"
                  blurDataURL={project.blur}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {t(`items.${project.key}.category`)}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
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
    </section>
  );
}
