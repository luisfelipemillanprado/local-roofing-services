import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { AvailabilityBadge } from "@/common/availability-badge/components/AvailabilityBadge";
import { HeroActions } from "@/common/hero-actions/components/HeroActions";
import { HeroWrapper } from "@/common/hero-wrapper/components/HeroWrapper";
import { HeroShowcase } from "@/shared-sections/page-header/components/HeroShowcase";
import { CustomerRating } from "@/common/customer-rating/components/CustomerRating";
import { getTranslations } from "next-intl/server";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import type { PageHeaderProps } from "@/shared-sections/page-header/types";

const {
  images,
  badgeKey,
  badgeCity,
  avatars,
  customersKey,
  customersCount,
  ctaHref,
  secondaryCtaHref,
  showcase,
} = pageHeaderData;

/* shared hero band for the home and every dedicated page */
export const PageHeader = async ({
  titleLead,
  titleAccent,
  description,
  secondaryCta,
  image = "default",
  id,
}: PageHeaderProps) => {
  const t = await getTranslations("page-header");
  /* variant pairs the background with its own alt */
  const { src, altKey } = images[image];
  /* shop hero funnels the showcase to contact; every other hero to the shop */
  const showcaseSource = image === "shop" ? showcase.contactCta : showcase.shopCta;
  const showcaseCta = { label: t(showcaseSource.key), href: showcaseSource.href };

  return (
    <HeroWrapper id={id} image={src} imageAlt={t(altKey)}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
        {/* grid-cols-1 (minmax(0,1fr)) keeps nowrap text from widening the column */}
        <div className="grid grid-cols-1 gap-6.5 sm:max-w-120 md:max-[1440px]:ml-5">
          <Reveal delay={0.05}>
            <AvailabilityBadge label={t(badgeKey, { city: badgeCity })} />
          </Reveal>

          <Reveal delay={0.1}>
            <Title
              as="h1"
              size="display"
              tone="white"
              accentTone="faint"
              text={titleLead}
              accent={titleAccent}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <Text size="lead" tone="muted" text={description} />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-1">
              <HeroActions
                primaryHref={ctaHref.href}
                primaryLabel={t(ctaHref.key)}
                secondaryHref={secondaryCtaHref[secondaryCta].href}
                secondaryLabel={t(secondaryCtaHref[secondaryCta].key)}
              />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-2.5">
              <CustomerRating avatars={avatars} label={t(customersKey, { count: customersCount })} />
            </div>
          </Reveal>
        </div>

        {/* material teaser: lg and up, revealing more cards as the width grows */}
        <div className="hidden lg:block">
          <HeroShowcase cta={showcaseCta} />
        </div>
      </div>
    </HeroWrapper>
  );
};
