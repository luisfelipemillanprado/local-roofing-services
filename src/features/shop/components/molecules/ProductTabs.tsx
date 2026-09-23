"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { Text } from "@/common/text/components/Text";
import type { ProductTabsProps } from "@/features/shop/types";

export const ProductTabs = ({ tabs }: ProductTabsProps) => {
  const id = useId();
  const [active, setActive] = useState(tabs[0]?.key);

  /* arrow keys cycle the tabs and move focus with the selection */
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    const next = (tabs.findIndex((tab) => tab.key === active) + step + tabs.length) % tabs.length;
    setActive(tabs[next]?.key);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <div className="grid content-start gap-6">
      <div
        role="tablist"
        onKeyDown={onKeyDown}
        className="grid grid-flow-col justify-start gap-8 border-b border-line"
      >
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            id={`${id}-tab-${key}`}
            type="button"
            role="tab"
            aria-selected={active === key}
            aria-controls={`${id}-panel-${key}`}
            tabIndex={active === key ? 0 : -1}
            onClick={() => setActive(key)}
            className={`-mb-px border-b-2 pb-3 transition-colors ${
              active === key ? "border-primary" : "border-transparent"
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
          tabIndex={0}
        >
          {panel}
        </div>
      ))}
    </div>
  );
};
