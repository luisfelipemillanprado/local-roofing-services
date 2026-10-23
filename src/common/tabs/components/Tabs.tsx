"use client";

import { useId, useState } from "react";
import { Text } from "@/common/text/components/Text";
import type { TabsProps } from "@/common/tabs/types";

export const Tabs = ({ label, tabs }: TabsProps) => {
  const id = useId();
  const [active, setActive] = useState(tabs[0]!.key);

  return (
    <div className="grid gap-6">
      {/* scrolls only when the labels outgrow the column; the segments meet, so they carry no gap */}
      <div
        role="tablist"
        aria-label={label}
        className="grid scrollbar-none grid-flow-col justify-start overflow-x-auto border-b border-line"
      >
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            id={`${id}-tab-${key}`}
            type="button"
            role="tab"
            aria-selected={active === key}
            aria-controls={`${id}-panel-${key}`}
            onClick={() => setActive(key)}
            /* the edge is always there, transparent when unchosen, so no tab changes height */
            /* 12px, under the radius roles' 16px floor, which rounds a tab this short too far */
            className={`rounded-t-xl border-t-2 px-5 py-3 transition-colors *:transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light ${
              active === key ? "border-primary bg-surface-panel" : "border-transparent"
            }`}
          >
            <Text
              as="span"
              size="subhead"
              weight="semibold"
              tone={active === key ? "default" : "muted"}
              text={label}
            />
          </button>
        ))}
      </div>

      {/* every panel stays mounted so each tab's aria-controls resolves */}
      {tabs.map(({ key, panel }) => (
        <div
          key={key}
          id={`${id}-panel-${key}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${key}`}
          hidden={active !== key}
          /* caps the panel's reading measure; this column never reaches it, a wider one would */
          className="max-w-3xl"
        >
          {panel}
        </div>
      ))}
    </div>
  );
};
