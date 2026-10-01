import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProductCompatibleProps } from "@/features/shop/detail/types";

/* what the product pairs with, each row linking to its own page */
export const ProductCompatible = ({ label, items }: ProductCompatibleProps) => (
  <div className="grid gap-3">
    <Title as="h3" size="panel" weight="bold" text={label} />
    <ul className="grid">
      {items.map((item) => (
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
);
