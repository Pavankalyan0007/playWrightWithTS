// test-setup.ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  // Override `page` fixture to inject after-test logic
  page: async ({ page }, use) => {
    await use(page);                    // run the test
    await page.waitForTimeout(10000);   // wait after the test
  },
});

export { expect };
