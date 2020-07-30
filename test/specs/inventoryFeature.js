var chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Inventory Tests', () => {
    it.only('Add Product to Cart', () => {
        browser.url("inventory");
        var inventoryItem = $$('.inventory_item');
        var numberItems = inventoryItem.length;
        var indexOfItems = Math.floor(Math.random() * numberItems);
        console.log("El numero random fue: " + indexOfItems);

        var item = $$('.inventory_item')[indexOfItems];
        var nameOfItem = item.$('.inventory_item_name').getText();
        
        var addToCartButton = item.$('.btn_primary');
        addToCartButton.click();

        //.header_container > div > a > span
        var numberItemsInCart = $('.header_container > div > a > span').getText();
        expect(numberItemsInCart).to.equals('1');

    })

    it.only('Remove Product from Cart', () => {
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

        var addRemoveButton = item.$('.btn_secondary');
        console.log("HELLO HELLO BABY " + addRemoveButton.getText());
        addRemoveButton.click();

        var numberItemsInCart = $('.header_container > div > a > span').getText();
        expect(numberItemsInCart).to.equals('0');
        
    })


})