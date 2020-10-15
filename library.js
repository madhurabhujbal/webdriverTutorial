var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

async function findElementOnWebsite() {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://library-app.firebaseapp.com");
  await driver.findElement(By.css("input"));
  await driver.findElement(By.css(".btn-primary"));

  (await driver).sleep(1000);
  driver.quit();
}

findElementOnWebsite();
