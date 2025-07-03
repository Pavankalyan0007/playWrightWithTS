import { test, expect } from "@playwright/test";

test("Recorded cursor test ", async ({ page }) => {
  test.slow();
  await page.goto('/');
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  const locator = page.getByRole("link", {
    name: "Playwright by Testers Talk☑️ YouTube · Testers Talk 24.6K+ followers",
  });
  await locator.click();

  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");

  await expect(
    page.getByRole("link", { name: "Playwright Tutorial Full" })
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Playwright API Testing Tutorial Crash Course",
    })
  ).toBeVisible();

  await expect(
    page
      .getByLabel("Playwright Tutorial Full Course 2024")
      .locator("#video-title")
  ).toContainText(
    "Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial"
  );
  await expect(
    page
      .getByLabel(
        "Playwright API Testing Tutorial Crash Course 2024 1 hour, 59 minutes"
      )
      .locator("#video-title")
  ).toContainText("Playwright API Testing Tutorial Crash Course 20244");
});
