import { test, expect } from "@playwright/test";

test.beforeAll("Before All Test Cases in playwright", async () => {
  console.log("Before All Test Cases");
});
test.afterEach("after Each Test Cases in playwright", async () => {
                    console.log("after Each Test Cases");
  });

test("Tes1 in playwright", async ({ page }) => {
          console.log("Test 1 Excuted started");        
  test.slow();
    
  
  await page.getByTestId('repositories /Pavankalyan0007?tab=repositories').first().click();
  //await page.getByText('Packages').first().click();
});

test("Locators in playwright", async ({ page }) => {
                    console.log("Test 2 Excuted started"); 
  test.slow();
  //await page.goto('https://github.com/Pavankalyan0007');
  //await page.getByTestId('i1repositories-tab').first().click();
  await page.getByText('Packages').first().click();
});
test.afterAll("after All Test Cases in playwright", async () => {
                    console.log("after  All Test Cases");
  });
  test.beforeEach("beforeEach Test Cases in playwright", async ({page}) => {
                    console.log("before Each Test Cases");
                    await page.goto('https://github.com/Pavankalyan0007');
  });