var webdriver = require("selenium-webdriver"),
By = webdriver.By,
until = webdriver.until;

async function findElementOnWebsite() {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://library-app.firebaseapp.com");
  // implicit wait : (await driver).manage().setTimeouts({ implicit:5000 });

   let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('us@h.com');

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
    (await driver.wait(async () => {
       const result = await requestButton.getCssValue('opacity');
      return result == 1;
     }, 15000));
   await requestButton.click();

   let alertText = (await (await driver.wait(until.elementLocated(By.css('.alert-success')),4000)).getText());
   console.log("alert text is : ", alertText);

  driver.close();
}

findElementOnWebsite();