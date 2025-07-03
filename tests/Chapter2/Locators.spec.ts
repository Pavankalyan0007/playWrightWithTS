import { test, expect } from "@playwright/test";

test("Locators in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://github.com/Pavankalyan0007');
  //await page.getByTestId('i1repositories-tab').first().click();
  await page.getByText('Packages').first().click();
});
