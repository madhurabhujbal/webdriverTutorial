var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

async function findElementOnWebsite() {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://library-app.firebaseapp.com");
  await driver.findElements(By.css("input"));
  driver.quit();
}

findElementOnWebsite();
