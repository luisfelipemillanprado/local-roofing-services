import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Link as IntlLink } from "@/i18n/navigation";
import type { ButtonProps, ButtonVariant } from "@/common/button/types";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_12px_30px_-12px_rgba(232,57,43,0.7)] hover:bg-primary-dark hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
  outline:
    "border border-line bg-surface text-fg hover:border-primary hover:text-primary",
  ghost:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonProps) {
  // Same-page anchors (#contact) use a plain link — they don't change the path,
  // so no locale prefix is needed. Route links (/services, /#contact) use the
  // next-intl Link so the active locale (e.g. /es) is preserved.
  const Link = href.startsWith("#") ? NextLink : IntlLink;
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
