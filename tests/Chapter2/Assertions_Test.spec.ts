


//import { test, expect } from "@playwright/test";
import { test, expect } from '../Test.Setup';

test("Asssetions in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://www.youtube.com/');
 const searchBox = await page.getByPlaceholder("Search");
  await expect(searchBox).toBeEnabled();
  await expect(searchBox).toBeEditable(); 
  await expect(searchBox).toBeVisible();
  await expect(searchBox).toBeEmpty();
 // await page.waitForTimeout(10000);

 //verify ,url,title,text
 await searchBox.fill("pavan kalyan");
 await searchBox.press('Enter');
 await expect(page).toHaveURL('https://www.youtube.com/results?search_query=pavan+kalyan')
 await expect(page).toHaveTitle("pavan kalyan - YouTube");
  const text = await page.locator('#original');
  await expect(text).toHaveText("Search instead for");
  await expect(text).toHaveCount(1);
});
