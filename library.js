var webdriver = require("selenium-webdriver"),
By = webdriver.By,
until = webdriver.until;

async function findElementOnWebsite() {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://library-app.firebaseapp.com");

   let inputElement = (await driver).findElement(By.css('input'));
   await inputElement.sendKeys('username@user.com');
    (await driver).sleep(1000);

   let requestButton = (await driver).findElement(By.css(".btn-primary"));
   await requestButton.click();

  driver.close();
}

findElementOnWebsite();