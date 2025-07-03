import { test, expect } from "@playwright/test";
import { readExcelFile } from "../../src/utils/ExcelHelper";  // adjust the path as per your structure

// Read the Excel data
const testData = readExcelFile("test-data/qa/Test_Data.xlsx"); // update the path to your actual file

// Loop through the Excel data
for (const data of testData) {
  test(`Search for ${data.Skill1} on YouTube`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill(data.Skill1);
    await searchBox.press("Enter");
     const expectedSearch = data.Skill1.trim().replace(/\s+/g, "+");

    // Validate dynamic URL
    await expect(page).toHaveURL(`https://www.youtube.com/results?search_query=${expectedSearch}`);
   //https://www.youtube.com/results?search_query=Playwright+API
  });
}
