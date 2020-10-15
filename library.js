var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://library-app.firebaseapp.com");

driver.findElements(By.css("input"));

driver.quit();
