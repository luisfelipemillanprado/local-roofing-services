import type { ContainerProps } from "@/common/container/types";

/* page gutter container: max content width, centered, side padding until lg */
export const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto w-full max-w-7xl px-5 min-[412px]:px-5.5 min-[428px]:px-6 lg:px-0">{children}</div>
);
