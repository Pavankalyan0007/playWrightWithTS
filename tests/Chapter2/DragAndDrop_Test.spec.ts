
import { test, expect } from "@playwright/test";

test("Drag And in playwright", async ({ page }) => {
  test.slow();
  await page.goto('https://jqueryui.com/droppable/');
  const iframe= await page.frameLocator("[class='demo-frame']");
  const drag=await  iframe.locator("[id='draggable']");        
  const drop =await iframe.locator("[id='droppable']");
  await drag.dragTo(drop);
});
