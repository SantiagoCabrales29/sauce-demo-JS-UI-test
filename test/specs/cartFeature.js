const chai = require('chai');
const should = chai.should();
const expect =  chai.expect;

describe('Test cases for the Cart functionality', () => {
    it('Check item add to cart was successfully added', () =>{
        browser.url("inventory");
        var inventoryItem = $$('.inventory_item');
        var numberItems = inventoryItem.length;
        var indexOfItems = Math.floor(Math.random() * 6);

        var item = $$('.inventory_item')[indexOfItems];
        var nameOfItem = item.$('.inventory_item_name').getText();
        var addToCartButton = item.$('.btn_primary');
        console.log("HELLO HELLO BABY " + addToCartButton.getText());
        addToCartButton.click();

        //.header_container > div > a > span
        var numberItemsInCart = $('.header_container > div > a > span').getText();
        expect(numberItemsInCart).to.equals('1');

        var shoppingCart = $('.shopping_cart_container > a');
        shoppingCart.click();
        //.inventory_item_name
        var nameItemInCart = $('.inventory_item_name').getText();
        expect(nameItemInCart).to.equals(nameOfItem);
        //browser.debug();

    })

    it('Test continue Shopping button', () => {
        browser.url("cart");
        var keepShoppingButton = $('.btn_secondary');
        keepShoppingButton.click();
        var label = $('.product_label').getText();
        label.should.be.equals('Products');
    })

    it('Test Continue button', () => {
        browser.url("cart");
        var keepShoppingButton = $('.btn_action');
        keepShoppingButton.click();
        var label = $('.subheader').getText();
        label.should.be.equals('Checkout: Your Information');
    })

})