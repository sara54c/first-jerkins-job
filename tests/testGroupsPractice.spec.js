import {test} from "@playwright/test";

test.describe("Practice.cydeo",()=>{
    test.beforeEach(async({page})=> {
        await page.goto("https://practice.cydeo.com/"); // if a method return promise, you should have await keyword.
    });

    test.afterEach(async({page})=> {
        await page.waitForTimeout(3000);
    });
    test("title of page", async ({ page }) => {
        console.log(await page.title());
    });

    test("url of page", async ({ page }) => {
        console.log(await page.url());        

    });

});