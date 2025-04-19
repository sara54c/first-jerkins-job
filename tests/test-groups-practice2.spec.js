import { test } from '@playwright/test';

test.describe("Test Group", () => {
  test.beforeEach(async({page})=> {
    await page.goto("https://practice.cydeo.com/javascript_alerts")
  });
  test("Regular Alert", async ({ page }) => {
    
    // to handle javascript alert manually, use "on" method.
     await page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`)
      await alert.accept();
    });
    //handling automatically usually 
    let clickForJSAlertButton = page.locator("//button[@class='btn btn-primary' and @onclick='jsAlert()']");
    await clickForJSAlertButton.click();
    //await page.waitForTimeout(3000);
  
  });
  //there is no auto function. you should use on method
  test("Confirmation Alert", async ({ page }) => {
   await page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      //await page.waitForTimeout(3000);
      await alert.dismiss();
    })
    let clickForJSConfirmAlertButton = page.locator("//button[contains(text(), 'Click for JS Alert')]");
    await clickForJSConfirmAlertButton.click();
  });
  test("Prompt Alert", async ({ page }) => {
    await page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      //await page.waitForTimeout(3000);
      await alert.accept("CYDEO");
    });
    let clickForJSPromptAlertButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptAlertButton.click();
  });
});