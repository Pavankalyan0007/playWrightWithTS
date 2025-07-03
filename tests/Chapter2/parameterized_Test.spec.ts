// 
import { test, expect } from "../Test.Setup";

const searchKeyWords = ["pavan kalyan", "pavan elakya", "pavan kalyan soppa"];

for (const searchKeyWord of searchKeyWords) {
  test(`Parameterized in playwright: ${searchKeyWord}`, async ({ page }) => {
    test.slow();
    await page.goto("https://www.youtube.com/");

    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill(searchKeyWord);
    await searchBox.press("Enter");

    // Encode the keyword for URL (space becomes +)
    const encodedKeyword = searchKeyWord.trim().replace(/\s+/g, "+");
    const expectedUrl = `https://www.youtube.com/results?search_query=${encodedKeyword}`;

    await expect(page).toHaveURL(expectedUrl);
    await expect.soft(page).toHaveTitle(new RegExp(`${searchKeyWord}.*YouTube`, "i"));
  });
}
