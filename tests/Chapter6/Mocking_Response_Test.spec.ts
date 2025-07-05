// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Mock API Response in playwright', async ({ page }) => {

    // Mock API request
    await page.route('*/**/api/v1/fruits', async route => {
           const response = await route.fetch();
           const json = await response.json();         
        
           json.push({ name: 'playwright typescript by testers talk123', id: 12 }),
           json.push( { name: 'playwright javascript by testers talk', id: 13 })
      //const data = 'pavan soppa';
        await route.fulfill({json});
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Validate text
    await expect(page.getByText('playwright typescript by testers talk123')).toBeVisible();
    await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
    await page.waitForTimeout(10000);
});