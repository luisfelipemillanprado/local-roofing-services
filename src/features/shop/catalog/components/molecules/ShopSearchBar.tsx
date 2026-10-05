import { Search, X } from "lucide-react";
import type { ShopSearchBarProps } from "@/features/shop/catalog/types";

/* store bar: the query only reaches the list on submit, never on keystroke */
export const ShopSearchBar = ({
  value,
  onChange,
  onSubmit,
  onClear,
  label,
  placeholder,
  submitLabel,
  clearLabel,
}: ShopSearchBarProps) => (
  /* py-1 against the 40px button holds the bar at the height px-5 py-3 gave it */
  <span className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-full border border-line bg-surface-panel py-1 pr-1 pl-5">
    <Search className="size-5 text-foreground-muted" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      aria-label={label}
      className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
    />
    {/* both controls share one cell, or the gap lingers when the clear is away */}
    <span className="grid grid-flow-col items-center gap-2">
      {value && (
        <button
          type="button"
          aria-label={clearLabel}
          onClick={onClear}
          className="grid size-8 place-items-center"
        >
          <X className="size-5 text-foreground-muted transition-colors hover:text-foreground" />
        </button>
      )}
      <button
        type="button"
        aria-label={submitLabel}
        onClick={onSubmit}
        className="grid size-10 place-items-center rounded-full bg-primary transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Search className="size-5 text-white" />
      </button>
    </span>
  </span>
);
