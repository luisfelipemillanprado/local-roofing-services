import type { ContainerProps } from "@/common/container/types";

/* page gutter container: side padding grows fluidly with the viewport, edge-to-edge at 2xl */
export const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,0.35rem+4vw,1.375rem)] sm:px-[clamp(1.5625rem,0.875rem+1.71875vw,2.25rem)] 2xl:px-0">
    {children}
  </div>
);
