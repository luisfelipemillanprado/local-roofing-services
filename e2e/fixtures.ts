import { type Page } from "@playwright/test";

/* page-level visual targets: [name, path] */
export const routes = [
  ["home", "/"],
  ["services", "/services"],
  ["about", "/about"],
  ["shop", "/shop"],
  ["gallery", "/gallery"],
] as const;

/* localePrefix "as-needed": EN at /, ES under /es */
export const locales = [
  ["en", ""],
  ["es", "/es"],
] as const;

/* full-page screenshot options (animations frozen via config expect defaults) */
export const fullPageShot = { fullPage: true } as const;

/* build a localized url without a trailing slash on the home route */
export const localizedPath = (prefix: string, path: string) =>
  path === "/" ? prefix || "/" : `${prefix}${path}`;

/* navigate + settle so lazy next/image + blur swaps do not make the shot flaky */
export const visit = async (page: Page, path: string) => {
  await page.goto(path);
  await scrollThroughPage(page);
  await waitForImages(page);
};

/* scroll top-to-bottom to trigger lazy-loaded images, then return to top */
const scrollThroughPage = async (page: Page) => {
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += window.innerHeight;
          if (y < document.body.scrollHeight) requestAnimationFrame(step);
          else {
            window.scrollTo(0, 0);
            resolve();
          }
        };
        step();
      }),
  );
};

/* bounded wait until every image finished loading; img.complete is true on error too, so it never hangs */
const waitForImages = async (page: Page) => {
  await page
    .waitForFunction(() => Array.from(document.images).every((img) => img.complete), undefined, {
      timeout: 15_000,
    })
    .catch(() => undefined);
};
