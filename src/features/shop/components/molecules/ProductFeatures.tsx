import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { CheckItem } from "@/common/check-item/components/CheckItem";
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
      {/* same check list as the about selling points */}
      <ul className="grid gap-4">
        {install.map((item) => (
          <CheckItem key={item} tone="default" text={item} />
        ))}
      </ul>
    </div>

    <div className="grid gap-3">
      <Title as="h3" size="panel" weight="bold" text={coverageLabel} />
      <ul className="grid gap-4">
        {coverage.map((item) => (
          <CheckItem key={item} tone="default" text={item} />
        ))}
      </ul>
    </div>
  </div>
);
