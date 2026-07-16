/* live status dot with ping ring */
export const LiveDot = () => (
  <span aria-hidden className="relative grid size-2">
    <span className="absolute size-full animate-ping rounded-full bg-primary opacity-75" />
    <span className="relative size-full rounded-full bg-primary" />
  </span>
);
