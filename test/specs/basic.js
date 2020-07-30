var LoginPage = require( '../../pageobjects/LoginPage'); //node_modules/pageobjects

var chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Log in Tests', () => {
    it('Successfull Login', () => {
        browser.url("");
        var username = $("#user-name");
        username.setValue("standard_user");
        var password = $("#password");
        password.setValue("secret_sauce");
        var loginButton = $("#login-button");
        loginButton.click();
        var inventoryTitle = $("#inventory_filter_container > div").getText();
        expect(inventoryTitle).to.equals("Products");
    })
    it.skip('Successfull Login with Page object', () => {
        LoginPage.open();
        LoginPage.username.setValue('standard_user');
        LoginPage.password.setValue('secret_sauce');
        LoginPage.submit();
        browser.debug();
        var inventoryTitle = $("#inventory_filter_container > div").getText();
        expect(inventoryTitle).to.equals("Products");
    })

    it('Unsuccessful Login', () => {
        browser.url("");
        var username = $("#user-name");
        username.setValue("pro_user");
        var password = $("#password");
        password.setValue("secret_sauce");
        var loginButton = $("#login-button");
        loginButton.click();     
        var message = $(".login-box > form > h3").getText();
        expect(message).to.contain("Epic sadface");

    })
})