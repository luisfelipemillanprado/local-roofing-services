import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { TeamList } from "@/shared-sections/team/components/molecules/TeamList";
import { getTranslations } from "next-intl/server";
import { teamData } from "@/data/sections/team";
import type { TeamProps } from "@/shared-sections/team/types";
import { Container } from "@/common/container/components/Container";

const { items, ctaHref } = teamData;

export const Team = async ({ variant, limit }: TeamProps) => {
  const t = await getTranslations("team");
  /* data: order + image; text by key */
  /* limit: home summary, full on /about */
  const cards = items.slice(0, limit).map((member, i) => ({
    key: member.key,
    image: member.image,
    href: `/team/${member.slug}`,
    title: t(`items.${member.key}.title`),
    description: t(`items.${member.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper id="team">
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />
            <div className="mt-2">
              <Button href={ctaHref[variant].href} variant="secondary" pulse>
                {t(ctaHref[variant].key)}
              </Button>
            </div>
          </div>

          <TeamList cards={cards} learnMore={t("learnMore")} collapseBelowLg={variant === "viewAll"} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
