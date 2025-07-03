import { test, expect } from "@playwright/test";

test.describe("playwright parallel test example", () => {
  test("Iterating matching elements in playwright", async ({ page }) => {
    test.slow();
    await page.goto("https://github.com/BakkappaN");
   const repoLinks= await page.$$('.repo');

  // for of loop
  for(const repoLoop of repoLinks){
  const text =await repoLoop.textContent();
  console.log(`text repo :${text}`);
  }
  //for loop
  for(let index=0;index<=repoLinks.length;index++){
                    const text =await repoLinks[index].textContent();
                    console.log(`text repo :${text}`);
  }
const repoLinks2 = await page.locator('.repo');
const count = repoLinks2.count();
for (let index = 0; index < await count; index++) {
  const text = await repoLinks2.nth(index).innerText();
  console.log(`text repo ${index + 1}: ${text}`);
}
  });
});
