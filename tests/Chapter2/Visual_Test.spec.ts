
import { test, expect } from '../Test.Setup';

test("Visual comparision screenshot in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://github.com/login');
  await expect(page).toHaveScreenshot("github.png");
  await page.locator("#login_field").fill("pavangesture@gmail.com");
  await expect(page).toHaveScreenshot("github.png");
});
test("Visual element screenshot in playwright", async ({ page }) => {
                    test.slow();
                    await page.goto('https://github.com/login');
                    await expect(page).toHaveScreenshot("github.png");
                   const element= page.locator('.auth-form-body.mt-3');
                   await expect(element).toHaveScreenshot("githubeelement.png");
                    await page.locator("#login_field").fill("pavangesture@gmail.com");
                    await expect(page).toHaveScreenshot("githubeelement.png");
                  });

