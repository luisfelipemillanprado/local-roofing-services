import Image from "next/image";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Socials } from "@/common/social/components/molecules/Socials";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { teamSection } from "@/data/sections/team";
import type { TeamProps } from "@/common/team/types";

export async function Team({ limit }: TeamProps = {}) {
  const t = await getTranslations("team");
  // `limit` lets the home show a subset while /about shows the full team.
  const team = teamSection.members.slice(0, limit);

  return (
    <section className="bg-canvas py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
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
              className="group relative overflow-hidden rounded-card border border-line bg-surface-2"
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                {/* Socials reveal */}
                <div className="absolute right-4 top-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <Socials className="flex-col text-white" />
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg font-bold text-fg">
                    {name}
                  </h3>
                  <p className="text-sm text-fg-muted">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:rotate-90">
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
