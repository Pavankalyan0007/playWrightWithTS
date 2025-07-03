//import { test, expect } from "@playwright/test";
import { test, expect } from '../Test.Setup';

test("ReRun tests in playwright", async ({ page,browser }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
  await page.goto('https://www.youtube.com/');
  const searchBox = await page.getByPlaceholder("Search");
  await expect(searchBox).toBeEnabled();

});
test("test2 tests in playwright", async ({ page,browser }) => {
  //test.slow();
 await expect(true).toBe(false);

});
test("test3 tests in playwright", async ({ page,browser }) => {
await expect(true).toBe(false);


});