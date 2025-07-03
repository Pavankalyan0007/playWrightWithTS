
import { test, expect } from '../Test.Setup';

test("Alerts tests in playwright", async ({ page,browser }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
   page.once('dialog',dialog=>{
   dialog.accept();
  console.log(`Alert Messeage : ${dialog.message()}`);
  console.log(`dialog type  : ${dialog.type()}`);
  });
  await page.locator("//p/a[text()='See an example alert']").click();
});
test("Alert Confirm box   tests in playwright", async ({ page,browser }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
   page.once('dialog',dialog=>{
   //dialog.accept();
   dialog.dismiss();
  console.log(`Alert Messeage : ${dialog.message()}`);
   console.log(`dialog type  : ${dialog.type()}`);
  });
  //await page.locator("//p/a[text()='See a sample confirm']").click();
  await  page.getByText("See a sample confirm",{exact:true}).click();
});
test("Alert Confirm box See a sample prompt tests in playwright", async ({ page,browser }) => {
  //test.slow();
  test.setTimeout(1 * 60 * 1000);
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
   page.once('dialog',dialog=>{
   dialog.accept("hello");
  console.log(`Alert Messeage : ${dialog.message()}`);
   console.log(`dialog type  : ${dialog.type()}`);
  });
  //await page.locator("//p/a[text()='See a sample confirm']").click();
  await  page.getByText("See a sample prompt",{exact:true}).click();
});