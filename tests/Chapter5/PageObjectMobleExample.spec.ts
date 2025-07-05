// import { test, expect } from "@playwright/test";
//import { HomePage } from "../../src/pages/HomePage";
import { test} from "../../src/fixtures/TestFixtures";
test("page object model in playwright", async ({ page,homePage }) => {
    test.slow();
    // const homePage= new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);
  });