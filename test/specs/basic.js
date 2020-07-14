var chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Log in Tests', () => {
    it('Successfull Login', () => {
        //browser.url('https://www.saucedemo.com/');
        browser.url("");
        //expect(browser).toHaveTitle('Swag Labs');
        var username = $("#user-name");
        username.setValue("standard_user");
        //var asssert = username.getValue();
        //asssert.should.be.equals("standard_user");
        var password = $("#password");
        password.setValue("secret_sauce");
        var loginButton = $("#login-button");
        loginButton.click();
        //expect(browser).toHaveTitle('Swag Labs');
        var inventoryTitle = $("#inventory_filter_container > div").getText();
        expect(inventoryTitle).to.equals("Products");
    })
    it.only('Unsuccessful Login', () => {
        browser.url("");
        //expect(browser).toHaveTitle('Swag Labs');
        var username = $("#user-name");
        username.setValue("pro_user");
        //var asssert = username.getValue();
        //asssert.should.be.equals("standard_user");
        var password = $("#password");
        password.setValue("secret_sauce");
        var loginButton = $("#login-button");
        loginButton.click();     
        //.login-box > form > h3
        var message = $(".login-box > form > h3").getText();
        expect(message).to.contain("Epic sadface");

    })
})