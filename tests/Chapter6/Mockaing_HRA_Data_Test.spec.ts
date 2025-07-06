// Import playwright module
import { test, expect } from '@playwright/test';


test('Mock API from HAR file in playwright', async ({ page }) => {

    // Recording a HAR file
    await page.routeFromHAR('./har/fruits.har', {
        url: '*/**/api/v1/fruits',
        update: false
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Validate text
    await expect(page.getByText('Strawberry')).toBeVisible();
    await expect(page.getByText('pavan kalyan soppa')).toBeVisible();

await page.waitForTimeout(20000);
});