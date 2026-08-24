import { useCallback, useEffect, useRef } from "react";
import type { EmblaApi } from "@/carousel/types";

/* scales the parallax shift with the number of snaps (Embla v9 Parallax sandbox) */
const TWEEN_FACTOR_BASE = 0.2;

/* faithful port of the Embla v9 Parallax tween: shifts each in-view layer toward its snap target */
export const useParallaxTween = (emblaApi: EmblaApi | undefined) => {
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((api: EmblaApi) => {
    tweenNodes.current = api
      .slideNodes()
      .map((slideNode) => slideNode.querySelector("[data-parallax-layer]") as HTMLElement);
  }, []);

  const setTweenFactor = useCallback((api: EmblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.snapList().length;
  }, []);

  const tweenParallax = useCallback((api: EmblaApi, event?: { type: string }) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();
    const isScrollEvent = event?.type === "scroll";

    api.snapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reinit", setTweenNodes)
      .on("reinit", setTweenFactor)
      .on("reinit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slidefocus", tweenParallax);
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);
};
