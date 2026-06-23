/* Live-status dot with ping ring. */
export const LiveDot = () => (
  <span aria-hidden className="relative flex size-2">
    <span className="absolute size-full animate-ping rounded-full bg-primary opacity-75" />
    <span className="relative size-2 rounded-full bg-primary" />
  </span>
);
