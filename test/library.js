var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("mocha");
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
  });

  it('Typing a valid email enables request button', async function() {
    var enableButton = await page.requestButton();
    await enableButton.state.should.eventually.be.true;
  });

  it('Clicking Request invitation triggers confirmation box', async function() {
    var alertMsg = page.alertSuccess();
    await alertMsg.should.eventually.contain("Thank you!");
   });
});
