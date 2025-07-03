import { Locator, Page } from "playwright";

export class HomePage {
  readonly page: Page;
  readonly searchBox :Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchBox =  page.getByPlaceholder("Search");
  }

  async goToURL(){
   await this.page.goto(`${process.env.GLOBAL_LINK}`);
  }
  async searchKey(keyWord:string){
       await this.searchBox.fill(keyWord);
       await this.searchBox.press("Enter");     
  }
  }


 
//     await page.goto("https://www.youtube.com/");
//     const searchBox = await page.getByPlaceholder("Search");
//     //verify ,url,title,text
//     await searchBox.fill("pavan kalyan");
//     await searchBox.press("Enter");
//     await expect(page).toHaveURL(
//       "https://www.youtube.com/results?search_query=pavan+kalyan"
//     );
//     await expect.soft(page).toHaveTitle("pavan kalyan - YouTube");
//     const text = await page.locator("#original");
//     await expect(text).toHaveText("Search instead for");
//     await expect(text).toHaveCount(1);
