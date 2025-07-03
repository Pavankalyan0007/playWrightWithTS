import { test, expect } from "@playwright/test";

test("Capture ScreenShots in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://www.youtube.com/@testerstalk');
  await page.locator("#page-header-container").screenshot({path:'./ScreenShots/ElementScreenShot.png'});
  await page.screenshot({path:'./ScreenShots/PageScreenShot.png'});
  await page.screenshot({path:'./ScreenShots/FullPageScreenShot.png',fullPage:true});
});
