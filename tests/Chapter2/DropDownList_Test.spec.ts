import { test, expect } from "@playwright/test";

test("Locators in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://www.facebook.com/');
  //await page.getByTestId('i1repositories-tab').first().click();
  await page.getByRole('button',{name:"Create new account"}).click();
  await page.getByLabel('Month').selectOption('Jul');
  const Count=await page.locator('#month > option').count();
  await  expect(Count).toBe(12);
  await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
  console.log(Count);
});
