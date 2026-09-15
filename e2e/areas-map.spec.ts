import { test, expect, type Page } from "@playwright/test";
import { company } from "../src/data/site";

/* functional check of the interactive offices map: real style + tiles (network dependent) */
const pinnedOffices = company.offices.filter((office) => office.position !== null).length;

const openMap = async (page: Page) => {
  await page.goto("/areas");
  const frame = page.locator("[data-office-map]");
  await frame.scrollIntoViewIfNeeded();
  const canvas = page.locator("[data-office-map-canvas]");
  await expect(canvas).toHaveAttribute("data-ready", "true", { timeout: 20_000 });
  return { frame, canvas };
};

test.describe("areas map", () => {
  test("mounts, loads the style and shows no console errors", async ({ page }) => {
    const problems: string[] = [];
    /* headless Chrome's software WebGL logs driver perf notes; they are browser-level, not app errors */
    const driverNote = /^\[\.WebGL-[0-9a-fx]+\]GL Driver Message/;
    page.on("console", (message) => {
      const isProblem = message.type() === "error" || message.type() === "warning";
      if (isProblem && !driverNote.test(message.text())) problems.push(message.text());
    });
    page.on("pageerror", (error) => problems.push(error.message));

    const { frame } = await openMap(page);
    await expect(frame.locator("canvas.maplibregl-canvas")).toBeVisible();
    await expect(frame.locator(".maplibregl-ctrl-attrib")).toContainText("OpenStreetMap");
    await expect(frame.locator(".office-marker")).toHaveCount(pinnedOffices);
    expect(problems).toEqual([]);
  });

  test("zoom control zooms in", async ({ page }) => {
    const { frame, canvas } = await openMap(page);
    const before = Number(await canvas.getAttribute("data-zoom"));
    await frame.getByRole("button", { name: "Zoom In" }).click();
    await expect.poll(async () => Number(await canvas.getAttribute("data-zoom"))).toBeGreaterThan(before);
  });

  test("opens at the zoom floor, so it can only zoom in", async ({ page }) => {
    const { frame, canvas } = await openMap(page);
    const floor = Number(await canvas.getAttribute("data-zoom"));
    const zoomOut = frame.getByRole("button", { name: "Zoom Out" });
    await expect(zoomOut).toBeDisabled();

    /* zooming in re-enables it, and zooming back out stops at the same floor */
    await frame.getByRole("button", { name: "Zoom In" }).click();
    await expect(zoomOut).toBeEnabled();
    await zoomOut.click();
    await expect(zoomOut).toBeDisabled();
    expect(Number(await canvas.getAttribute("data-zoom"))).toBeCloseTo(floor, 1);
  });

  test("mouse drag pans the map", async ({ page, isMobile }) => {
    test.skip(isMobile, "mouse drag is the desktop interaction");
    const { frame, canvas } = await openMap(page);
    const before = await canvas.getAttribute("data-center");
    const box = (await frame.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 - 160, box.y + box.height / 2, { steps: 8 });
    await page.mouse.up();
    await expect.poll(() => canvas.getAttribute("data-center")).not.toBe(before);
  });

  test("one finger drag pans the map", async ({ page, isMobile }) => {
    test.skip(!isMobile, "touch behavior");
    const { canvas } = await openMap(page);
    const before = await canvas.getAttribute("data-center");
    await page.evaluate(async () => {
      const target = document.querySelector<HTMLCanvasElement>("[data-office-map] canvas")!;
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const touch = (dx: number) =>
        new Touch({ identifier: 1, target, clientX: x + dx, clientY: y, pageX: x + dx, pageY: y + scrollY });
      const fire = (type: string, list: Touch[], changed: Touch[]) =>
        target.dispatchEvent(
          new TouchEvent(type, {
            bubbles: true,
            cancelable: true,
            touches: list,
            targetTouches: list,
            changedTouches: changed,
          }),
        );
      fire("touchstart", [touch(0)], [touch(0)]);
      for (let dx = -20; dx >= -120; dx -= 20) {
        fire("touchmove", [touch(dx)], [touch(dx)]);
        await new Promise((resolve) => setTimeout(resolve, 16));
      }
      fire("touchend", [], [touch(-120)]);
    });
    await expect.poll(() => canvas.getAttribute("data-center")).not.toBe(before);
  });
});
