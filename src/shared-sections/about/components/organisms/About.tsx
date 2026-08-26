import { getTranslations } from "next-intl/server";
import { Button } from "@/common/call-to-actions/components/Button";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { ProfileSplit } from "@/common/profile-split/components/ProfileSplit";
import { YearsBadge } from "@/shared-sections/about/components/molecules/YearsBadge";
import { ContactCard } from "@/shared-sections/about/components/molecules/ContactCard";
import { StatsRow } from "@/shared-sections/about/components/molecules/StatsRow";
import { SellingPoints } from "@/shared-sections/about/components/molecules/SellingPoints";
import { aboutData } from "@/data/shared-sections/about";
import { Container } from "@/common/container/components/Container";
import type { AboutProps } from "@/shared-sections/about/types";

const { name, video, heading, ctaHref, years, call, points, stats } = aboutData;

/* About section: media + heading, selling points, stats, and CTA */
export const About = async ({ variant, tone = "base" }: AboutProps) => {
  const t = await getTranslations("about");
  /* stats: value from data, label by key */
  const statItems = stats.map((stat) => ({
    key: stat.key,
    value: stat.value,
    label: t(`stats.${stat.key}`),
  }));
  /* points: text by key */
  const pointItems = points.map((point) => ({ key: point.key, text: t(`points.${point.key}`) }));

  return (
    <SectionWrapper id="about" tone={tone}>
      <Container>
        <ProfileSplit
          media={
            <MediaVideo
              src={video.src}
              poster={video.poster}
              alt={t(video.altKey, { name })}
              shape="square"
            />
          }
          badge={
            <YearsBadge
              value={years.value}
              line1={t(`years.${years.key}.line1`)}
              line2={t(`years.${years.key}.line2`)}
            />
          }
          contact={<ContactCard label={t(call.key)} phone={call.number} />}
          heading={
            <SectionHeading
              eyebrow={t(heading.eyebrow)}
              title={t(heading.titleLead)}
              accent={t(heading.titleAccent)}
              description={t(heading.description, { name })}
            />
          }
          points={<SellingPoints items={pointItems} />}
          stats={<StatsRow items={statItems} />}
          action={
            <Button href={ctaHref[variant].href} variant="secondary" pulse>
              {t(ctaHref[variant].key)}
            </Button>
          }
        />
      </Container>
    </SectionWrapper>
  );
};
