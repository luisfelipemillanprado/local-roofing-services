import Image from "next/image";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Socials from "@/components/ui/Socials";
import Reveal from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";
import { teamSection } from "@/data/sections/team";

export default async function Team({ limit }: { limit?: number } = {}) {
  const t = await getTranslations("team");
  // `limit` lets the home show a subset while /about shows the full team.
  const team = teamSection.members.slice(0, limit);

  return (
    <section className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("titleLead")}
                <span className="block text-[var(--color-primary)]">
                  {t("titleAccent")}
                </span>
              </>
            }
          />
          <Button href="#contact" variant="dark" withArrow className="shrink-0">
            {t("explore")}
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => {
            const name = t(`members.${member.key}.name`);
            return (
            <Reveal
              as="article"
              key={member.key}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface-2)]"
            >
              <div className="relative aspect-[4/4.6] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={name}
                  placeholder="blur"
                  blurDataURL={member.blur}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />

                {/* Socials reveal */}
                <div className="absolute right-4 top-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <Socials theme="dark" className="flex-col" />
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg font-bold text-[var(--fg)]">
                    {name}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)]">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-[var(--color-primary)] text-white transition-transform duration-300 group-hover:rotate-90">
                  <Plus className="size-5" />
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
