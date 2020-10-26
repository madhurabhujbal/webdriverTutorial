var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("mocha");
var Page = require('../lib/home_page');
var page;

describe("library app scenarios", function() {
  this.timeout(9000);

  beforeEach(function(done) {
    page = new Page();
    page.visit("https://library-app.firebaseapp.com");
    done();
  });

  afterEach(function(done) {
    page.close();
    done();
  });

  it('Typing valid email changes button opacity to 1', async function() {
    await page.requestButton();
  });

  it('Typing a valid email enables request button', async function() {
    await page.requestButton();
  });

  it('Clicking Request invitation triggers confirmation box', async function() {
    await page.alertSuccess();
   });
});
