import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import { HeroWrapper } from "@/common/hero-wrapper/components/HeroWrapper";
import { CustomerRating } from "@/common/customer-rating/components/CustomerRating";
import { getTranslations } from "next-intl/server";
import { pageHeaderData } from "@/data/sections/page-header";
import type { PageHeaderProps } from "@/shared-sections/page-header/types";

const { image, avatars } = pageHeaderData;

/* hero-sized intro band for the dedicated pages */
export const PageHeader = async ({ eyebrow, titleLead, titleAccent, description }: PageHeaderProps) => {
  const t = await getTranslations("page-header");

  return (
    <HeroWrapper image={image} imageAlt={t("imageAlt")}>
      <Reveal>
        <div className="grid max-w-3xl gap-4">
          <Eyebrow text={eyebrow} />
          <Title as="h1" size="page" text={titleLead} accent={titleAccent} />
          <div className="mt-1 max-w-xl">
            <Text size="lead" tone="muted" text={description} />
          </div>
          <div className="mt-5">
            <CustomerRating avatars={avatars} label={t("customers")} />
          </div>
        </div>
      </Reveal>
    </HeroWrapper>
  );
};
