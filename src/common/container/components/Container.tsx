import type { ContainerProps } from "@/common/container/types";

/* page gutter container: max content width, centered, side padding until lg */
export const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,0.35rem+4vw,1.4375rem)] lg:px-0">{children}</div>
);
