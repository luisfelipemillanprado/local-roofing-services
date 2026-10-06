"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Funnel } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { SortSelectProps } from "@/features/shop/catalog/types";

/* results sort: a dropdown of our own, so the panel's size and layer are ours to set */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const current = options.find((option) => option.value === value)!;

  /* a document listener, not a scrim: a filter must not swallow the next click on the page */
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  return (
    <div className="grid grid-flow-col items-center justify-start gap-3">
      <span id={`${id}-label`}>
        <Text as="span" size="body" tone="muted" text={label} />
      </span>

      {/* the trigger's own box, so the panel's min-width is the trigger and not the whole row */}
      <div
        ref={root}
        onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
        /* a real relatedTarget means focus moved on; a null one is a click, which the pointer listener handles */
        onBlur={(event) =>
          event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && setOpen(false)
        }
        className="relative"
      >
        <button
          id={`${id}-trigger`}
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          /* the trigger names itself too, so the value it carries reaches the name */
          aria-labelledby={`${id}-label ${id}-trigger`}
          onClick={() => setOpen(!open)}
          /* a floor, not a height: 56px like the bar, but a wrapped label still needs the room */
          className="grid min-h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-surface-panel py-2 pr-4 pl-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
        >
          <Funnel className="size-5 text-foreground-muted" />
          <Text as="span" size="body" text={current.label} />
          <ChevronDown className="size-5 text-foreground-muted" />
        </button>

        {open && (
          <div
            id={`${id}-panel`}
            className="absolute top-full right-0 z-(--z-dropdown) mt-2 grid w-max min-w-full gap-1 rounded-xl border border-line bg-surface-panel p-2 shadow-lg shadow-shade/40"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className="rounded-lg px-3 py-2.5 text-left hover:bg-surface-muted focus-visible:bg-surface-muted"
              >
                <Text
                  as="span"
                  size="body"
                  tone={option.value === value ? "default" : "muted"}
                  text={option.label}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
