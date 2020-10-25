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

Page.prototype.alertSuccess = function(verifyResult) {
    this.requestButton();
    this.clickSubmit().then( () => {
        console.log("Submit button clicked!!!");
        this.driver.manage().setTimeouts({ implicit: 2000 }).then(()=>
        this.find('.alert-success').then((webElement) => webElement.getText().then((err, alert)=> {
                                                                            console.log("Alert: " + alert);
                                                                            verifyResult(alert);}
                                                                            )
                                        ));
    } );
}

module.exports = Page;