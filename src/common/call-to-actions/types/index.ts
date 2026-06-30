/* Link button (renders <a>). */
export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  pulse?: boolean;
}

/* Action button (renders <button>); fixed submit style. */
export interface ActionButtonProps {
  label: string;
}
