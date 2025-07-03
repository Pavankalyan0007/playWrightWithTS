//import { test, expect } from "@playwright/test";
import { test, expect } from "../Test.Setup";

test.describe("playwright", async () => {
  test("Test1 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    //verify ,url,title,text
    await searchBox.fill("pavan kalyan");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(
      "https://www.youtube.com/results?search_query=pavan+kalyan"
    );
    await expect.soft(page).toHaveTitle("pavan kalyan - YouTube");
    const text = await page.locator("#original");
    await expect(text).toHaveText("Search instead for");
    await expect(text).toHaveCount(1);
  });
  test("Test2 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    //verify ,url,title,text
    await searchBox.fill("pavan kalyan elakya");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(
      "https://www.youtube.com/results?search_query=pavan+kalyan"
    );
    await expect.soft(page).toHaveTitle("pavan kalyan - YouTube");
    const text = await page.locator("#original");
    await expect(text).toHaveText("Search instead for");
    await expect(text).toHaveCount(1);
  });
  test("Test 3 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    //verify ,url,title,text
    await searchBox.fill("pavan kalyan soppa");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(
      "https://www.youtube.com/results?search_query=pavan+kalyan"
    );
    await expect.soft(page).toHaveTitle("pavan kalyan - YouTube");
    const text = await page.locator("#original");
    await expect(text).toHaveText("Search instead for");
    await expect(text).toHaveCount(1);
  });
});
