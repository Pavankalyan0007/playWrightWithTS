import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json";
// import * as dotenv from 'dotenv';

// dotenv.config();

type TestData ={
"TestDataSet1":{
                    "Skill1":string,
                    "Skill2":String
},
"TestDataSet2":{
                    "Skill1":string,
                    "Skill2":string
}
}

const typedTestData = testData as TestData;
for(const DatatestName in typedTestData){
const skill= typedTestData[DatatestName as keyof TestData];

 test(`Read ENV file in playwright ${skill.Skill1}`, async ({ page }) => {
    test.slow();
     const url = process.env.GLOBAL_LINK;
    await page.goto(`${url}`);
    const searchBox = await page.getByPlaceholder("Search");
    await searchBox.fill(skill.Skill1);
    await searchBox.press("Enter");
//     await expect(page).toHaveURL(
//       "https://www.youtube.com/results?search_query=pavan+kalyan");
  });

}
 