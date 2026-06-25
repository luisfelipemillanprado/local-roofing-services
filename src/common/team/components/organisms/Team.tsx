import { Plus } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { Socials } from "@/common/social/components/molecules/Socials";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { getTranslations } from "next-intl/server";
import { teamSection } from "@/data/sections/team";
import type { TeamProps } from "@/common/team/types";

export const Team = async ({ limit }: TeamProps = {}) => {
  const t = await getTranslations("team");
  // `limit` lets the home show a subset while /about shows the full team.
  const team = teamSection.members.slice(0, limit);

  return (
    <Section>
      <div className="container-x">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            align="center"
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          <Button href="#contact" variant="secondary">
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
                className="group relative overflow-hidden rounded-card border border-line bg-surface-muted"
              >
                <div className="relative">
                  <Media
                    src={member.image}
                    alt={name}
                    shape="portrait"
                    overlay="soft"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Socials reveal */}
                  <div className="absolute top-4 right-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <Socials className="flex-col text-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <Title as="h3" size="card" weight="bold" text={name} />
                    <Text size="body" tone="muted" text={t(`members.${member.key}.role`)} />
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
    </Section>
  );
};
