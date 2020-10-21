var webdriver = require("selenium-webdriver")
var { describe, it, after, before } = require("mocha");
By = webdriver.By,
assert = require('assert'),
until = webdriver.until;
var driver;

describe("library app scenarios", function() {
  this.timeout(7000);
  beforeEach(async function() {
    driver = new webdriver.Builder().forBrowser("chrome").build();
   await driver.get("https://library-app.firebaseapp.com");

  });

  afterEach(function() {
    driver.close();
  });

  it('Changes the button opacity on valid email in input field', async function() {
    let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
       const result = await requestButton.getCssValue('opacity');
        assert(result === '1');
  });

  it('Gives alert message on button clicked', async function() {
    let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
    await requestButton.click();
   let alertText = (await (await driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
   console.log("alert text is : ", alertText);
   driver.findElements(By.css('.alert-success')).then(function(result) {
     assert(result.length === 1, console.log( result.length + "alert success were found"));
   });
  });

  it('Display navbar elements', async function() {
    await driver.findElement(By.css('nav')).getText().then((text) => {
      console.log(text);
    });
  });

});
