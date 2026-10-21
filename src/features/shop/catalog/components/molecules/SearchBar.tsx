import { TextSearch } from "lucide-react";
import { SearchButton } from "@/common/call-to-actions/components/SearchButton";
import type { SearchBarProps } from "@/features/shop/catalog/types";

/* store bar: the field has no box of its own, so the border, the height and the ring live here */
export const SearchBar = ({ value, onChange, onSubmit, label, placeholder, submitLabel }: SearchBarProps) => (
  /* the bar owns its height, so the border cannot add to it */
  <span
    role="search"
    className="grid h-14.5 grid-cols-[auto_minmax(0,1fr)_auto] gap-3 rounded-badge border border-line bg-surface-panel pl-5 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary-light sm:h-15"
  >
    <TextSearch className="size-5 self-center text-foreground" aria-hidden />
    {/* sr-only is absolute, so the label claims no column of its own */}
    <label htmlFor="shop-search" className="sr-only">
      {label}
    </label>
    {/* type=search draws the browser's own clear control; no second one is added here */}
    <input
      id="shop-search"
      type="search"
      /* the phone keyboard offers Search instead of a generic return key */
      enterKeyHint="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      /* the bar wears the ring for it, so the whole control reads as one */
      className="text-foreground outline-none placeholder:text-foreground-muted"
    />
    <SearchButton label={submitLabel} onClick={onSubmit} />
  </span>
);
