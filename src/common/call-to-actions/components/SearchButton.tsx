import { Search } from "lucide-react";
import type { SearchButtonProps } from "@/common/call-to-actions/types";

/* square icon button that closes a search field's right edge; owns its own glyph */
export const SearchButton = ({ label, onClick }: SearchButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="grid aspect-square h-full place-items-center rounded-xl bg-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
  >
    <Search className="size-5 text-white" />
  </button>
);
