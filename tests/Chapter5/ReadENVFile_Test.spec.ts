import { test, expect } from "@playwright/test";
// import * as dotenv from 'dotenv';

// dotenv.config();
  test("Read ENV file in playwright", async ({ page }) => {
    test.slow();
     const url = process.env.GLOBAL_LINK;
    await page.goto(`${url}`);
    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill("pavan kalyan");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(
      "https://www.youtube.com/results?search_query=pavan+kalyan");
  });