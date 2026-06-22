import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Link as IntlLink } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import type { ButtonProps, ButtonVariant } from "@/common/button/types";
import type { TextTone } from "@/common/text/types";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-md shadow-shade/40 hover:-translate-y-0.5",
  dark: "bg-contrast text-white hover:-translate-y-0.5",
  outline: "border border-line bg-surface-panel text-foreground hover:border-primary hover:text-primary",
  ghost: "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
};

// Text color comes from the variant; Text mirrors it via tone (arrow still uses the variant color).
const textTones: Record<ButtonVariant, TextTone> = {
  primary: "white",
  dark: "white",
  outline: "default",
  ghost: "white",
};

export const Button = ({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  desktopOnly = false,
}: ButtonProps) => {
  // Same-page anchors use a plain link; route links use next-intl Link to keep the locale.
  const Link = href.startsWith("#") ? NextLink : IntlLink;
  /* max-lg:hidden lives in a media query, so it overrides the base inline-flex below lg. */
  const visibility = desktopOnly ? "max-lg:hidden" : "";
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${visibility} ${className}`}>
      <Text as="span" size="body" weight="semibold" tone={textTones[variant]} text={children} />
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
};
