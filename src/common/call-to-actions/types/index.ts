/* Link button (renders <a>). */
export type ButtonVariant = "primary" | "dark" | "ghost";

export interface ButtonProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  fullWidth?: boolean;
}

/* Action button (renders <button>); fixed submit style. */
export interface ActionButtonProps {
  label: string;
}
