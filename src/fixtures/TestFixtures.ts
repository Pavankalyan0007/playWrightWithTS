import { test as base } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { loadTestData } from '../utils/JsonHelper';
import { TestData } from '../interface/Module1TestData.interface';
/**
 * author Testers Talk
 */
export const test = base.extend<{
    saveLogs: void;
    homePage: HomePage;
    testData:TestData;
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
        testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }
});

export { expect } from '@playwright/test';