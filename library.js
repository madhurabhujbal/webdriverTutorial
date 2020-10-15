var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

async function findElementOnWebsite() {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://library-app.firebaseapp.com");
  await driver.findElement(By.css("input")).then((el) => {
    console.log("found input box", el);
  });
  await driver.findElement(By.css(".btn-primary")).then((el) => {
    console.log("found button element", el);
  });
  await driver.findElements(By.css("nav li")).then((array) => {
    console.log("found the navbar elements", array);
  });

  (await driver).sleep(1000);
  driver.quit();
}

findElementOnWebsite();
