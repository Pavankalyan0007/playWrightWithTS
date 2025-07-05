// Import playwright module
import { test} from "../../src/fixtures/TestFixtures";

/**
 * author Testers Talk
 */
test('Optimized Page Object Model Test in Playwright', async ({ page, homePage }) => {

    // Go to URL & Search with keywords
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Click on playlist
//     await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)

//     // Validate web page title
//     await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` + '☑️ - YouTube')
});