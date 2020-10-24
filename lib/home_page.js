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

Page.prototype.alertSuccess = async function() {
    await this.requestButton();
    await this.clickSubmit();
    this.driver.manage().setTimeouts({ implicit: 2000 });
    var alert = await this.find('.alert-success').getText();
    return alert;
}

module.exports = Page;