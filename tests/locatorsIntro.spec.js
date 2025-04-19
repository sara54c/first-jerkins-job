// web element in selenium means locators in playwright.
import {test} from "@playwright/test";

test("Simple google test", async ({page}) => {
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);

    let searchBox = await page.locator("//textarea[@class='gLFyf']"); // you dont need to give await keyword
    // besides locator method, you can use another method searchBo
    //locator method is superior because autowaiting functionality, and you do not have to give await keyword
    //let searchBox = page.$$(); // this method return the element handle not the locator that is web element, to interacting the web element,
    //await searchBox.type("CYDEO"); // type method is depricated, and typing character one by one
    searchBox.fill("CYDEO"); // fill the character at once.
     await page.waitForTimeout(3000);

     searchBox.press("Enter"); // to press the enter key

     await page.waitForTimeout(3000);
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="true" 
aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwiF5qmN8s2LAxWEmIkEHVL3B9cQ39UDCAY" aria-activedescendant="" style=""></textarea>
*/

//textarea[@class='gLFyf'] // to avoid escape sequencence use single quotation other than double quaotation