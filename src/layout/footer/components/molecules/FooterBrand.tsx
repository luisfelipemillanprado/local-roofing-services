import { Logo } from "@/common/logo/components/Logo";
import { Socials } from "@/common/social/components/Socials";
import { Text } from "@/common/text/components/Text";
import type { FooterBrandProps } from "@/layout/footer/types";

/* brand column: logo, description and social profiles */
export const FooterBrand = ({ description }: FooterBrandProps) => (
  <div className="grid content-start justify-items-center gap-5 text-center lg:justify-items-start lg:text-left">
    <Logo />
    <div className="max-w-xs">
      <Text size="lead" tone="muted" text={description} />
    </div>
    <div className="mt-1">
      <Socials />
    </div>
  </div>
);
