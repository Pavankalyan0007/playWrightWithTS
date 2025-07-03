import { test, expect } from "@playwright/test";
//import { HomePage } from "../../src/pages/HomePage";
import { HomePage } from "../../src/pages/HomePage";
test("page object model in playwright", async ({ page }) => {
    test.slow();
    const homePage= new HomePage(page);
    await homePage.goToURL();
    await homePage.searchKey(`${process.env.SEARCH_KEYWORD}`);
  });