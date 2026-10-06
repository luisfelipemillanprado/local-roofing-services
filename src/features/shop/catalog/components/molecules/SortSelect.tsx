"use client";

import { useEffect, useId, useRef } from "react";
import { ChevronDown, Funnel } from "lucide-react";
import clsx from "clsx";
import { Text } from "@/common/text/components/Text";
import { useEnterExit } from "@/hooks/transition/useEnterExit";
import type { SortSelectProps } from "@/features/shop/catalog/types";

/* exit transition duration — drives animation + unmount delay; a dropdown is quicker than a menu */
const ANIMATION_MS = 150;

/* results sort: a dropdown of our own, so the panel's size and layer are ours to set */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => {
  const {
    isOpen,
    isVisible,
    open: handleOpenOptions,
    close: handleCloseOptions,
  } = useEnterExit(ANIMATION_MS);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const current = options.find((option) => option.value === value)!;

  /* a document listener, not a scrim: a filter must not swallow the next click on the page */
  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) handleCloseOptions();
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [isOpen, handleCloseOptions]);

  return (
    <div className="grid grid-flow-col items-center justify-start gap-3">
      <span id={`${id}-label`}>
        <Text as="span" size="subhead" tone="muted" text={label} />
      </span>

      {/* the trigger's own box, so the panel's min-width is the trigger and not the whole row */}
      <div
        ref={root}
        onKeyDown={(event) => event.key === "Escape" && handleCloseOptions()}
        /* a real relatedTarget means focus moved on; a null one is a click, which the pointer listener handles */
        onBlur={(event) =>
          event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && handleCloseOptions()
        }
        className="relative"
      >
        <button
          id={`${id}-trigger`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          /* the trigger names itself too, so the value it carries reaches the name */
          aria-labelledby={`${id}-label ${id}-trigger`}
          onClick={isOpen ? handleCloseOptions : handleOpenOptions}
          /* a floor, not a height: 56px like the bar, but a wrapped label still needs the room */
          className="grid min-h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-surface-panel py-2 pr-4 pl-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
        >
          <Funnel className="size-5 text-foreground-muted" />
          <Text as="span" size="body" text={current.label} />
          {/* the trigger says it is open, the way the faq chevron and the menu glyph do */}
          <ChevronDown
            style={{ transitionDuration: `${ANIMATION_MS}ms` }}
            className={clsx("size-5 text-foreground-muted transition-transform", isOpen && "rotate-180")}
          />
        </button>

        {isVisible && (
          <div
            id={`${id}-panel`}
            style={{ transitionDuration: `${ANIMATION_MS}ms` }}
            className={clsx(
              "absolute top-full right-0 z-(--z-dropdown) mt-2 grid w-max min-w-full gap-1 rounded-xl border border-line bg-surface-panel p-2 shadow-lg shadow-shade/40 transition-all ease-in-out",
              /* no clicks on the way out: it is still mounted while it fades */
              isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
            )}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  handleCloseOptions();
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
