"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown, Funnel } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { SortSelectProps } from "@/features/shop/catalog/types";

/* results sort: a dropdown of our own, so the panel's size and layer are ours to set */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => {
  const [open, setOpen] = useState(false);
  /* the keyboard's cursor, separate from the committed value until Enter */
  const [activeIndex, setActiveIndex] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const current = options.find((option) => option.value === value) ?? options[0]!;

  /* a dropdown closes on an outside click and on escape, like every other menu */
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  /* focus the list on open so the arrows work without a second tab */
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  /* closing always hands focus back, or a keyboard user loses their place on the page */
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const commit = (index: number) => {
    onChange(options[index]!.value);
    close();
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const last = options.length - 1;
    const keys: Record<string, () => void> = {
      ArrowDown: () => setActiveIndex(activeIndex === last ? 0 : activeIndex + 1),
      ArrowUp: () => setActiveIndex(activeIndex === 0 ? last : activeIndex - 1),
      Home: () => setActiveIndex(0),
      End: () => setActiveIndex(last),
      Enter: () => commit(activeIndex),
      " ": () => commit(activeIndex),
      Escape: () => close(),
      Tab: () => setOpen(false),
    };
    const handler = keys[event.key];
    if (!handler) return;
    if (event.key !== "Tab") event.preventDefault();
    handler();
  };

  return (
    <div className="grid grid-flow-col items-center justify-start gap-3">
      <span id={`${id}-label`}>
        <Text as="span" size="body" tone="muted" text={label} />
      </span>

      <div ref={root} className="relative">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-value`}
          onClick={() => (open ? setOpen(false) : openAt(options.indexOf(current)))}
          className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-surface-panel py-4 pr-4 pl-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
        >
          <Funnel className="size-5 text-foreground-muted" />
          <span id={`${id}-value`} className="justify-self-start">
            <Text as="span" size="body" text={current.label} />
          </span>
          <ChevronDown className="size-5 text-foreground-muted" />
        </button>

        {open && (
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={`${id}-label`}
            aria-activedescendant={`${id}-option-${activeIndex}`}
            onKeyDown={onListKeyDown}
            className="absolute top-full right-0 z-(--z-dropdown) mt-2 grid w-max min-w-full gap-1 rounded-xl border border-line bg-surface-panel p-2 shadow-lg shadow-shade/40 outline-none"
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={option.value === value}
                onPointerEnter={() => setActiveIndex(index)}
                onClick={() => commit(index)}
                /* the cursor follows the pointer, so hover and arrows highlight the same row */
                className={`cursor-pointer rounded-lg px-3 py-2.5 ${index === activeIndex ? "bg-surface-muted" : ""}`}
              >
                <Text as="span" size="body" text={option.label} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
