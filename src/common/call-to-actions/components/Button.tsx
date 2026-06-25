import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Link as IntlLink } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import type { ButtonProps, ButtonVariant } from "@/common/call-to-actions/types";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary shadow-md shadow-shade/40 hover:-translate-y-0.5",
  dark: "bg-contrast hover:-translate-y-0.5",
  ghost: "border border-white/30 bg-white/5 backdrop-blur-md will-change-transform hover:bg-white/15",
};

export const Button = ({ href, children, variant = "primary", fullWidth = false }: ButtonProps) => {
  /* Anchors use a plain link; routes use next-intl Link to keep the locale. */
  const Link = href.startsWith("#") ? NextLink : IntlLink;
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      <Text as="span" size="body" weight="semibold" tone="white" text={children} />
      <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};
