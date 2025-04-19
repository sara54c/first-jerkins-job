import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {

   await page.goto("http://practice.cydeo.com"); // goto method takes a string as argument, when you call any method in the playwright, as long as it returns promises, most likely you need to await keyword.
//pause for three seconds. we dont recommend pause in actual automation tests
   await page.waitForTimeout(3000);
// verify the title
 let actualTitle = await page.title(); // return promise, so need await keyword
 console.log(actualTitle); // print the title
});



test('Getting the current url of the page', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let actualURL = page.url(); // url method does not return promise, so we don't need to use await keyword
    console.log(actualURL); // print the url which is https://practice.cydeo.com/

});

test('Set the window size', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(3000);
    //await page.setViewportSize({ width: 1800, height: 1000 });// set viewport size to 1800x1000 pixels
    //await page.waitForTimeout(3000);
    // you can set window size with global configurations, go playwright.config.js and change use: { ...devices['Desktop Chrome'] },

});