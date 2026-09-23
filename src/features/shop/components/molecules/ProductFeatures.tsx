import Link from "next/link";
import { ArrowUpRight, CircleCheck, ShieldCheck } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProductFeaturesProps } from "@/features/shop/types";

/* practical side of the product: what it pairs with, how it goes on, what is covered */
export const ProductFeatures = ({
  compatibleLabel,
  compatible,
  installLabel,
  install,
  coverageLabel,
  coverage,
}: ProductFeaturesProps) => (
  <div className="grid gap-7">
    <div className="grid gap-3">
      <Title as="h3" size="panel" weight="bold" text={compatibleLabel} />
      <ul className="grid">
        {compatible.map((item) => (
          <li key={item.key} className="border-b border-line">
            <Link href={item.href} className="group grid grid-cols-[1fr_auto] items-center gap-3 py-2.5">
              <Text as="span" size="body" tone="muted" text={item.title} />
              <ArrowUpRight
                aria-hidden
                className="size-4 text-foreground-muted transition-colors group-hover:text-primary"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="grid gap-3">
      <Title as="h3" size="panel" weight="bold" text={installLabel} />
      <ul className="grid gap-3">
        {install.map((item) => (
          <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-2.5">
            <CircleCheck aria-hidden className="mt-0.5 size-4.5 text-primary" />
            <Text as="span" size="body" tone="muted" text={item} />
          </li>
        ))}
      </ul>
    </div>

    <div className="grid gap-3">
      <Title as="h3" size="panel" weight="bold" text={coverageLabel} />
      <ul className="grid gap-3">
        {coverage.map((item) => (
          <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-2.5">
            <ShieldCheck aria-hidden className="mt-0.5 size-4.5 text-primary" />
            <Text as="span" size="body" tone="muted" text={item} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
