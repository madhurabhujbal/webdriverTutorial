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

  beforeEach(function(done) {
    page = new Page();
    page.visit("https://library-app.firebaseapp.com");
    done();
  });

  afterEach(function(done) {
    page.close();
    done();
  });

  // it('Typing valid email changes button opacity to 1', function(done) {
  //   var button = page.requestButton();
  //   button.opacity.should.eventually.equal('1').then(()=>done());
  // });

  // it('Typing a valid email enables request button', function(done) {
  //   var enableButton = page.requestButton();
  //  enableButton.state.should.eventually.be.true.then(()=>done());
  // });

  it('Clicking Request invitation triggers confirmation box', function(done) {
    page.alertSuccess( function verifyResult(alertMsg) {
          alertMsg.should.eventually.contain("Thank you!").then(()=>done())
        });
   });
});
