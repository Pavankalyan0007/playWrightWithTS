//import { test, expect } from "@playwright/test";
import { test, expect } from '../Test.Setup';

test("Time Outs  in playwright", async ({ page }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
  await page.goto('https://www.youtube.com/');
 const searchBox = await page.getByPlaceholder("Search");
  await expect(searchBox).toBeEnabled();

 //verify ,url,title,text
 await searchBox.fill("pavan kalyan");
 await searchBox.press('Enter'); 
 await expect(page).toHaveURL('https://www.youtube.com/results?search_query=pavan+kalyan')
 await expect.soft(page).toHaveTitle("pavan kalyan - YouTube",{timeout:5000});
  const text = await page.locator('#original');
  await expect(text).toHaveText("Search instead for");
  await expect(text).toHaveCount(1);
 // await page.waitForTimeout(60000);
});
