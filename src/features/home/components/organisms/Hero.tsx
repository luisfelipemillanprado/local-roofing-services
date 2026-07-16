import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { HeroWrapper } from "@/common/hero-wrapper/components/HeroWrapper";
import { AvailabilityBadge } from "@/features/home/components/molecules/AvailabilityBadge";
import { HeroActions } from "@/features/home/components/molecules/HeroActions";
import { CustomerRating } from "@/common/customer-rating/components/CustomerRating";
import { getTranslations } from "next-intl/server";
import { heroData } from "@/data/pages/home";

const { name, yearsExperience, image, avatars, ctaPrimaryHref, ctaSecondaryHref } = heroData;

export const Hero = async () => {
  const t = await getTranslations("home.hero");

  return (
    <HeroWrapper id="home" image={image} imageAlt={t("imageAlt")}>
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
            text={t("titleLead")}
            accent={t("titleAccent")}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <Text
            size="lead"
            tone="muted"
            text={t("subtitle", {
              name,
              years: yearsExperience,
            })}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-1">
            <HeroActions
              primaryHref={ctaPrimaryHref.href}
              primaryLabel={t(ctaPrimaryHref.key)}
              secondaryHref={ctaSecondaryHref.href}
              secondaryLabel={t(ctaSecondaryHref.key)}
            />
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
