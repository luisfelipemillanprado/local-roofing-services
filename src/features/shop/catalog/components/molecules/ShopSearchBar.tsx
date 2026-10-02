import { Bookmark, Package, Search, ShoppingCart, User, type LucideIcon } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ShopAccountKey, ShopSearchBarProps } from "@/features/shop/catalog/types";

/* the data owns the account row; satisfies makes this map match it exactly */
const ACCOUNT_ICONS = {
  saved: Bookmark,
  account: User,
  orders: Package,
  cart: ShoppingCart,
} satisfies Record<ShopAccountKey, LucideIcon>;

/* store bar: live search plus the account row; the icons are still decoration */
export const ShopSearchBar = ({ value, onChange, label, placeholder, account }: ShopSearchBarProps) => (
  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
    <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-full border border-line bg-surface-panel px-5 py-3">
      <Search className="size-5 text-foreground-muted" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
      />
    </span>

    <div className="grid grid-flow-col justify-start gap-7 lg:justify-end">
      {account.map((item) => {
        const Icon = ACCOUNT_ICONS[item.key];
        return (
          <span key={item.key} className="grid justify-items-center gap-1.5">
            <Icon className="size-5 text-primary" />
            <Text as="span" size="note" weight="semibold" tone="muted" text={item.label} />
          </span>
        );
      })}
    </div>
  </div>
);
