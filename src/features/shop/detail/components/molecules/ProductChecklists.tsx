import { Title } from "@/common/title/components/Title";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { ProductChecklistsProps } from "@/features/shop/detail/types";

/* same check list as the about selling points, one block per list */
export const ProductChecklists = ({ lists }: ProductChecklistsProps) => (
  <>
    {lists.map(({ key, label, items }) => (
      <div key={key} className="grid gap-3">
        <Title as="h3" size="panel" weight="bold" text={label} />
        <ul className="grid gap-4">
          {items.map((item) => (
            <CheckItem key={item} tone="default" text={item} />
          ))}
        </ul>
      </div>
    ))}
  </>
);
