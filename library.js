var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.get("https://library-app.firebaseapp.com");
driver.findElement(By.css("input")).then((el) => {
    console.log("found input box", el);
});

driver
  .findElement(By.css(".btn-primary"))
  .getText()
  .then((el) => {
  console.log("found button element with text : ", el);
});

   driver.findElements(By.css("nav li")).then((elements) => {
      elements.map((el) => {
        el.getText().then((text) => {
          console.log("Navbar element text : " + text);
        });
      });
    });

// driver.sleep(1000);
// driver.quit();
