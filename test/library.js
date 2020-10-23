var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("mocha");
  By = webdriver.By,
until = webdriver.until;
var Page = require('../lib/base_page');
var page;

describe("library app scenarios", function() {
  this.timeout(7000);

  beforeEach(async function() {
    page = new Page();
   await page.visit("https://library-app.firebaseapp.com");

  });

  afterEach(function() {
    page.driver.close();
  });

  it('Changes the button opacity on valid email in input field', async function() {
    let inputElement = (await page.driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await page.driver).findElement(By.css(".btn-primary"));
   (await page.driver.wait(async () => {
      const result = await requestButton.getCssValue('opacity');
     return result == 1;
    }, 15000));
  console.log("hello");
  });

  it('Gives alert message on button clicked', async function() {
    let inputElement = (await page.driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await page.driver).findElement(By.css(".btn-primary"));
    await requestButton.click();
   let alertText = (await (await page.driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
   console.log("alert text is : ", alertText);
  });

  it('Display navbar elements', async function() {
    await page.driver.findElements(By.css('nav')).then((result) => {
     console.log(result);
    });
  });
  console.log("hello");
});
