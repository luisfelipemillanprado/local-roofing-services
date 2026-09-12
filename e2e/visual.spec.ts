import { test, expect } from "@playwright/test";
import { routes, locales, fullPageShot, localizedPath, visit } from "./fixtures";

/* page-level full-page visual regression across routes x locales, per viewport project */
for (const [name, path] of routes) {
  for (const [loc, prefix] of locales) {
    test(`${name}-${loc}`, async ({ page }) => {
      await visit(page, localizedPath(prefix, path));
      /* live map tiles are network-driven: masked here, covered functionally by areas-map.spec */
      await expect(page).toHaveScreenshot(`${name}-${loc}.png`, {
        ...fullPageShot,
        mask: [page.locator("[data-office-map]")],
      });
    });
  }
}
