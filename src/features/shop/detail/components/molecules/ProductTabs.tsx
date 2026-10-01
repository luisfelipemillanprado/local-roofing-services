import type { ReactNode } from "react";
import { Tabs } from "@/common/tabs/components/Tabs";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductCompatible } from "@/features/shop/detail/components/molecules/ProductCompatible";
import { ProductChecklists } from "@/features/shop/detail/components/molecules/ProductChecklists";
import type { ProductTabKey, ProductTabsProps } from "@/features/shop/detail/types";

/* the product panels, built on the server and handed to the tab shell */
export const ProductTabs = ({
  tabs,
  paragraphs,
  specRows,
  compatibleLabel,
  compatible,
  checklists,
}: ProductTabsProps) => (
  <Tabs
    tabs={tabs.map(({ key, label }) => ({
      key,
      label,
      /* the data owns the tab set; satisfies makes this map match it exactly */
      panel: (
        {
          description: <ProductAbout paragraphs={paragraphs} />,
          specifications: <ProductSpecTable rows={specRows} />,
          features: (
            <div className="grid gap-7">
              <ProductCompatible label={compatibleLabel} items={compatible} />
              <ProductChecklists lists={checklists} />
            </div>
          ),
        } satisfies Record<ProductTabKey, ReactNode>
      )[key],
    }))}
  />
);
