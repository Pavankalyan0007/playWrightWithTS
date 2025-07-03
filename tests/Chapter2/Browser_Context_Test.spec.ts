//import { test, expect } from "@playwright/test";
import { test, expect } from '../Test.Setup';

test("Multiple browser context in playwright", async ({ page,browser }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
 
  await page.goto('https://www.youtube.com/');
  const searchBox = await page.getByPlaceholder("Search");
  await expect(searchBox).toBeEnabled();

 //verify ,url,title,text
 await searchBox.fill("pavan kalyan");
 await searchBox.press('Enter'); 

 //new another browser
 const context2 = await browser.newContext();
 const page2 = await context2.newPage();
  await page2.goto('https://www.youtube.com/');
  const searchBox2 = await page2.getByPlaceholder("Search");
  await expect(searchBox2).toBeEnabled();
 await searchBox2.fill("pavan kalyan");
 await searchBox2.press('Enter'); 

 //another tab
 const newTab = await context2.newPage();
  await newTab.goto('https://www.youtube.com/');
});
