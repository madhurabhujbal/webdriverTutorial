var Page = require('./base_page');

Page.prototype.requestButton = function() {
    this.write('input', 'user@username.com');
    return{
        opacity: this.find('.btn-primary').getCssValue('opacity'),
        state: this.find('.btn-primary').isEnabled()
    }
}

Page.prototype.clickSubmit = function() {
    return this.find('.btn-primary').click();
}

Page.prototype.alertSuccess = function() {
    this.requestButton();
    this.clickSubmit();
    this.driver.manage().setTimeouts({ implicit: 20000 });
    return this.find('.alert-success').getText();
}

module.exports = Page;