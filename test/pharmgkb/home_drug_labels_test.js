module.exports = {
    'PharmGKB Home Page test(Drug Labels)': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('.labels a');
        browser.waitForElementPresent('.ReactTable');
        browser.assert.urlContains('/labels');
        browser.assert.attributeContains('.label-status a', 'href', '/label/PA');
        browser.assert.attributeContains('.rt-tr-group:last-of-type a', 'href', '/chemical/PA');

        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};