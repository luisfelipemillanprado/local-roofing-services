import { Search, X } from "lucide-react";
import { SearchButton } from "@/common/call-to-actions/components/SearchButton";
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
  /* no padding of its own: the input carries the height, the button fills it edge to edge */
  <span className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-3 rounded-xl bg-surface-panel pl-5">
    <Search className="size-5 self-center text-foreground-muted" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      aria-label={label}
      className="w-full self-center bg-transparent py-3 text-foreground outline-none placeholder:text-foreground-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
    />
    {/* both controls share one cell, or the gap lingers when the clear is away */}
    <span className="grid grid-flow-col items-stretch gap-3">
      {value && (
        <button
          type="button"
          aria-label={clearLabel}
          onClick={onClear}
          className="grid size-8 place-items-center self-center rounded-xl outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
        >
          <X className="size-5 text-foreground-muted transition-colors hover:text-foreground" />
        </button>
      )}
      <SearchButton label={submitLabel} onClick={onSubmit} />
    </span>
  </span>
);
