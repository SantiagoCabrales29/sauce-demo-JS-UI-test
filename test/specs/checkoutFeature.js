const chai = require('chai');
const should = chai.should();
const expect =  chai.expect;

describe('Test cases for the Checkout functionality', () => {
    it('Test Successful Checkout', () =>{
        browser.url("checkout-step-one");
        var firstName = $('#first-name');
        var lastName = $('#last-name');
        var postalCode = $('#postal-code');

        firstName.setValue('Santiago');
        lastName.setValue('Cabrales');
        postalCode.setValue('110111');

        //.checkout_buttons > input
        var continueButton = $('.checkout_buttons > input');
        continueButton.click();
        //.subheader
        var checkoutHeader = $('.subheader').getText();
        expect(checkoutHeader).to.equals('Checkout: Overview');        
        })

    it('Test unsuccessfull Checkout functionality, Missing LastName', () => {
        browser.url("checkout-step-one");
        var firstName = $('#first-name');
        var lastName = $('#last-name');
        var postalCode = $('#postal-code');

        firstName.setValue('Santiago');
        postalCode.setValue('110111');

        //.checkout_buttons > input
        var continueButton = $('.checkout_buttons > input');
        continueButton.click();

        var errorMessage = $('.checkout_info_wrapper > form > h3').getText();
        expect(errorMessage).to.include('Error: Last Name');        
        })

        it.only('Test unsuccessfull Checkout functionality, Missing FirstName', () => {
            browser.url("checkout-step-one");
            var firstName = $('#first-name');
            var lastName = $('#last-name');
            var postalCode = $('#postal-code');
    
            lastName.setValue('Cabrales');
            postalCode.setValue('110111');
    
            //.checkout_buttons > input
            var continueButton = $('.checkout_buttons > input');
            continueButton.click();
    
            var errorMessage = $('.checkout_info_wrapper > form > h3').getText();
            expect(errorMessage).to.include('Error: First Name');        
        })
        
        it.only('Test unsuccessfull Checkout functionality, Missing Zip Code', () => {
            browser.url("checkout-step-one");
            var firstName = $('#first-name');
            var lastName = $('#last-name');
            var postalCode = $('#postal-code');
    
            lastName.setValue('Cabrales');
            firstName.setValue('Santiago');
    
            //.checkout_buttons > input
            var continueButton = $('.checkout_buttons > input');
            continueButton.click();
    
            var errorMessage = $('.checkout_info_wrapper > form > h3').getText();
            expect(errorMessage).to.include('Error: Postal Code');        
        })
    })