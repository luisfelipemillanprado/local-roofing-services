import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";
import { projectMeta } from "@/config/content";

export default async function Projects({
  exploreHref,
  limit,
}: { exploreHref?: string; limit?: number } = {}) {
  const t = await getTranslations("Projects");
  const items = t.raw("items") as { title: string; category: string }[];
  // `limit` lets the home show a summary while /projects shows the full gallery.
  const projects = items
    .map((item, i) => ({ ...item, ...projectMeta[i] }))
    .slice(0, limit);

  return (
    <section id="projects" className="bg-[var(--color-ink)] py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            theme="dark"
            title={
              <>
                {t("titleLead")}
                <span className="block text-[var(--color-primary-light)]">
                  {t("titleAccent")}
                </span>
              </>
            }
          />
          {exploreHref && (
            <Button href={exploreHref} variant="primary" withArrow className="shrink-0">
              {t("explore")}
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] ${
                i === 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3.4] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/10 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-light)]">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">{project.title}</h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
