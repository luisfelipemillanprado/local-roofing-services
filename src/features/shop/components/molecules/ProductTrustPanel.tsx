import type { ReactNode } from "react";
import { BadgeCheck, Layers, ShieldCheck, Wrench } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProductTrustKey, ProductTrustPanelProps } from "@/features/shop/types";

/* one icon per trust row; presentation stays out of the data layer */
const icons: Record<ProductTrustKey, ReactNode> = {
  materials: <Layers aria-hidden className="size-5 text-primary" />,
  brands: <BadgeCheck aria-hidden className="size-5 text-primary" />,
  installation: <Wrench aria-hidden className="size-5 text-primary" />,
  warranty: <ShieldCheck aria-hidden className="size-5 text-primary" />,
};

export const ProductTrustPanel = ({ items }: ProductTrustPanelProps) => (
  /* two columns at most: the panel fills one half of the info row */
  <div className="grid gap-6 rounded-card border border-line bg-surface-panel p-6 sm:grid-cols-2">
    {items.map(({ key, title, description }) => (
      <div key={key} className="grid grid-cols-[auto_1fr] items-start gap-3">
        {icons[key]}
        <div className="grid gap-1">
          <Title as="h3" size="card" weight="bold" text={title} />
          <Text size="caption" tone="muted" text={description} />
        </div>
      </div>
    ))}
  </div>
);
