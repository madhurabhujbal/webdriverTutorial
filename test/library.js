var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("mocha");
var driver;
var find;
// assert = require('assert');

describe("library app scenarios", function() {
  this.timeout(7000);

  beforeEach(async function() {
     driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(opt).build();
    // driver = new webdriver.Builder(). forBrowser("chrome").build();
   await driver.get("https://library-app.firebaseapp.com");

  });

  afterEach(function() {
    driver.close();
  });

  it('Changes the button opacity on valid email in input field', async function() {
    let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
   (await driver.wait(async () => {
      const result = await requestButton.getCssValue('opacity');
     return result == 1;
    }, 15000));

  //  let requestButton = (await driver).findElement(By.css(".btn-primary"));
  //      const result = await requestButton.getCssValue('opacity');
  //      return result === '1';
  });

  it('Gives alert message on button clicked', async function() {
    let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('user@username.com');

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
    await requestButton.click();
   let alertText = (await (await driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
   console.log("alert text is : ", alertText);

  //  let requestButton = (await driver).findElement(By.css(".btn-primary"));
  //   await requestButton.click();
  //  let alertText = (await (await driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
  //  console.log("alert text is : ", alertText);
  //  driver.findElements(By.css('.alert-success')).then(function(result) {
  //    assert.equal(result.length, 1);
  //  });
  });

  it('Display navbar elements', async function() {
    await driver.findElements(By.css('nav')).then((result) => {
     console.log(result);
    });
  });

});
