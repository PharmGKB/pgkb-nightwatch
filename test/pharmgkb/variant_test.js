module.exports = {
    'PharmGKB Variant Page test': function (browser) {
        browser.url(browser.launchUrl + '/variant/PA166157537');

        browser.waitForElementPresent('.facts-container');
        browser.assert.urlContains('/variant/PA');
        browser.assert.title('rs267606723 - Overview | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('ul.side-nav li:nth-of-type(4) a');
        browser.waitForElementPresent('.table-wrapper');
        browser.assert.urlContains('/variantAnnotation');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });


        browser.click('tbody > tr:nth-child(1) > td:nth-child(1) > a');
        browser.assert.urlContains('/variant/PA');
        browser.assert.urlContains('/variantAnnotation/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};