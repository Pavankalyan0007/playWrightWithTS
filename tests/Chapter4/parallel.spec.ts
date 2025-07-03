import { test, expect } from "@playwright/test";

test.describe("playwright parallel test example", () => {
  test("Test1 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
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
    await searchBox.fill("pavan kalyan elakya");
    await searchBox.press("Enter");
    await expect.soft(page).toHaveTitle("pavan kalyan elakya - YouTube");
  });
});

test.describe("playwright parallel test example 2", () => {
  test("Test3 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill("pavan kalyan soppa");
    await searchBox.press("Enter");
    await expect.soft(page).toHaveTitle("pavan kalyan soppa - YouTube");
  });

  test("Test4 in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill("pavan kalyan soppa elakya");
    await searchBox.press("Enter");
    await expect.soft(page).toHaveTitle("pavan kalyan soppa - YouTube");
  });
});
