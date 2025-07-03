

import { test, expect } from "@playwright/test";

test("Mouse actions in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
  await page.getByRole('link',{name:"Playwright Tutorial Full Course 2024 | Playwright Testing ..."}).click({button:'middle'});
  await page.getByRole('link',{name:"Playwright Tutorial Full Course 2024 | Playwright Testing ..."}).click({button:'right'});
 //await page.getByLabel("Search by voice").hover();
 await page.getByLabel("Search by voice").dblclick();
  await page.waitForTimeout(10000);
});
