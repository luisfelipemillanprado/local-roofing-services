import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Link as IntlLink } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { ButtonProps, ButtonVariant } from "@/common/call-to-actions/types";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary" /* main CTA — navbar quote, hero, highlighted plan */,
  secondary: "bg-secondary" /* section CTAs — most common */,
  ghost: "border border-white/30 bg-white/5 hover:bg-white/15" /* over hero imagery */,
};

export const Button = ({
  href,
  children,
  variant = "primary",
  fullWidth = false,
  pulse = false,
}: ButtonProps) => {
  /* anchors → plain link; routes → locale-aware next-intl Link */
  const Link = href.startsWith("#") ? NextLink : IntlLink;
  return (
    <Link
      href={href}
      className={`group relative isolate inline-grid grid-flow-col items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {/* ghost never pulses */}
      {pulse && variant !== "ghost" && <PulseRing color={variant} rounded />}
      <Text as="span" size="body" weight="semibold" tone="white" text={children} />
      <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};
