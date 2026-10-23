import type { ReactNode } from "react";
import { Tabs } from "@/common/tabs/components/Tabs";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductCompatibleList } from "@/features/shop/detail/components/molecules/ProductCompatibleList";
import { ProductChecklists } from "@/features/shop/detail/components/molecules/ProductChecklists";
import type { ProductTabKey, ProductTabsProps } from "@/features/shop/detail/types";

/* the product panels, built on the server and handed to the tab shell */
export const ProductTabs = ({
  tabsLabel,
  tabs,
  paragraphs,
  specRows,
  compatible,
  checklists,
}: ProductTabsProps) => (
  <Tabs
    label={tabsLabel}
    tabs={tabs.map(({ key, label }) => ({
      key,
      label,
      /* the data owns the tab set; satisfies makes this map match it exactly */
      panel: (
        {
          about: <ProductAbout paragraphs={paragraphs} />,
          specifications: <ProductSpecTable rows={specRows} />,
          features: (
            <div className="grid gap-7">
              <ProductCompatibleList {...compatible} />
              <ProductChecklists lists={checklists} />
            </div>
          ),
        } satisfies Record<ProductTabKey, ReactNode>
      )[key],
    }))}
  />
);
