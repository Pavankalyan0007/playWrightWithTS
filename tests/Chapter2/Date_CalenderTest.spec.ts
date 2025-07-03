
import { test, expect } from "@playwright/test";

test("Mouse actions in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://jqueryui.com/datepicker/');
  const iframe = page.frameLocator('.demo-frame');
  await iframe.locator('#datepicker').fill('6/25/2025');
  await iframe.locator('#datepicker').click();
  await iframe.locator("a.ui-datepicker-prev").click();
  await iframe.getByText('15').click();
  await iframe.locator("a.ui-datepicker-next").click();
  await iframe.getByText('16').click();
  const date = await iframe.locator('#datepicker');
  await expect(date).toBeEditable();
  await expect(date).toBeDisabled();
  await page.waitForTimeout(10000);
});
