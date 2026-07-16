import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { AvailabilityBadge } from "@/common/availability-badge/components/AvailabilityBadge";
import { Button } from "@/common/call-to-actions/components/Button";
import { HeroWrapper } from "@/common/hero-wrapper/components/HeroWrapper";
import { CustomerRating } from "@/common/customer-rating/components/CustomerRating";
import { getTranslations } from "next-intl/server";
import { pageHeaderData } from "@/data/sections/page-header";
import type { PageHeaderProps } from "@/shared-sections/page-header/types";

const { image, avatars, ctaHref } = pageHeaderData;

/* hero-sized intro band for the dedicated pages */
export const PageHeader = async ({ titleLead, titleAccent, description }: PageHeaderProps) => {
  const t = await getTranslations("page-header");

  return (
    <HeroWrapper image={image} imageAlt={t("imageAlt")}>
      {/* grid-cols-1 (minmax(0,1fr)) keeps nowrap text from widening the column */}
      <div className="grid max-w-90 grid-cols-1 gap-6.5 sm:max-w-3xl">
        <Reveal delay={0.05}>
          <AvailabilityBadge label={t("badge")} />
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
            <Button href={ctaHref.href} variant="primary" pulse>
              {t(ctaHref.key)}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-2.5">
            <CustomerRating avatars={avatars} label={t("customers")} />
          </div>
        </Reveal>
      </div>
    </HeroWrapper>
  );
};
