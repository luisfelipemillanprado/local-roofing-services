import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "dark" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[0_12px_30px_-12px_rgba(232,57,43,0.7)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5",
  dark: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)] hover:-translate-y-0.5",
  outline:
    "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
