var webdriver = require("selenium-webdriver")
By = webdriver.By,
until = webdriver.until;
chrome = require('selenium-webdriver/chrome'),
opt = new chrome.Options();
opt.addArguments('disable-infobars');


var Page = function() {

    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(opt).build();
    var driver = this.driver;

    this.visit = function(theUrl) {
        return driver.get(theUrl);
    }

    this.close = function() {
        return driver.close();
    }

    this.find = function(el) {
        driver.wait(until.elementLocated(By.css(el)), 5000);
        return driver.findElement(By.css(el));
    }

    this.findAll = function(el) {
        driver.wait(until.elementLocated(By.css(el)), 5000);
        return driver.findElements(By.css(el));
    }

    this.write = function(el, txt) {
        return this.find(el).sendKeys(txt);
    }
}

module.exports = Page;