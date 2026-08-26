import type { ContainerProps } from "@/common/container/types";

/* page gutter container: max content width, centered, side padding until lg */
export const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto w-full max-w-7xl px-5 m412:px-5.5 m428:px-6 lg:px-0">{children}</div>
);
