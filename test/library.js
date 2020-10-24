var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("mocha");
//   By = webdriver.By,
// until = webdriver.until;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);
var Page = require('../lib/home_page');
var page;

describe("library app scenarios", function() {
  this.timeout(9000);

  beforeEach(async function() {
    page = new Page();
   await page.visit("https://library-app.firebaseapp.com");

  });

  afterEach(function() {
    page.close();
  });

  it('Typing valid email changes button opacity to 1', async function() {
    var button = await page.requestButton();
    button.opacity.should.eventually.equal('1');
  //   let inputElement = (await page.driver).findElement(By.css('input'));
  //  await inputElement.sendKeys('user@username.com');

  //  let requestButton = (await page.driver).findElement(By.css(".btn-primary"));
  //  (await page.driver.wait(async () => {
  //     const result = await requestButton.getCssValue('opacity');
  //    return result == 1;
  //   }, 15000));
  // console.log("hello");
  });

  it('Typing a valid email enables request button', async function() {
    var enableButton = await page.requestButton();
    await enableButton.state.should.eventually.be.true;
  //   let inputElement = (await page.driver).findElement(By.css('input'));
  //  await inputElement.sendKeys('user@username.com');

  //  let requestButton = (await page.driver).findElement(By.css(".btn-primary"));
  //   await requestButton.click();
  //  let alertText = (await (await page.driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
  //  console.log("alert text is : ", alertText);
  });

  it('Clicking Request invitation triggers confirmation box', async function() {
    var alertMsg = page.alertSuccess();
    await alertMsg.should.eventually.contain("Thank you!");
  //   await page.driver.findElements(By.css('nav')).then((result) => {
  //    console.log(result);
  //   });
   });
  // console.log("hello");
});
