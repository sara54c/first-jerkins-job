import { test } from '@playwright/test';

test('Google test', async ({ page }) => {
  // navigate to https://google.com
    await page.goto('https://google.com');

  // pause for 3 seconds
    await page.waitForTimeout(3000);



});