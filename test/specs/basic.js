describe('webdriver.io page', () => {
    it('should have the right title', () => {
        //browser.url('https://www.saucedemo.com/');
        browser.url("");
        expect(browser).toHaveTitle('Swag Labs');
    })
})