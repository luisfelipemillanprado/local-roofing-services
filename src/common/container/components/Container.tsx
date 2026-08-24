import type { ContainerProps } from "@/common/container/types";

/* page gutter container: max content width, centered, side padding until lg */
/* bleed: full-width below md (carousels reach the screen edge), contained from md up */
export const Container = ({ children, bleed = false }: ContainerProps) => (
  <div
    className={
      bleed
        ? "w-full md:mx-auto md:max-w-7xl md:px-6 lg:px-0"
        : "mx-auto w-full max-w-7xl px-5 min-[412px]:px-5.5 min-[428px]:px-6 lg:px-0"
    }
  >
    {children}
  </div>
);
