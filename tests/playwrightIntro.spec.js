//const {test} = require("@playwright/test"); //require has a warning //File is a CommonJS module; it may be converted to an ES module. This is old version to import.
import {test} from '@playwright/test'; // warning is gone, inside {} you need to specify which
test("Simple google test", async ({page}) => {// we need fixtures for UI testing, we are using {} for setting of fixtures, we use page fixture now. page fixture is the same as driver in Selenium.
    // test codes
   // page.goto("https://google.com");
// there is an error becuase most of the methods in playwright return Promises, we need to use await keyword to wait for the promise to resolve.
   await page.goto("https://google.com");
// page fixture will automatically wait for the page to load. follows global configurations.
    await page.waitForTimeout(3000); // waits for 3 seconds
    // await keyword must use asyncronous functions.

});
// for test function, you require to give 2 arguments: first argument needs to be description of test case, second argument is async call back function which contains the automation scripts
// ai will do first argument