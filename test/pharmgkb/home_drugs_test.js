module.exports = {
    'PharmGKB Home Page test(Drugs)': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('.drugs a');
        browser.waitForElementPresent('div.resource-list');
        browser.assert.urlContains('/annotatedDrugs');
        browser.assert.attributeContains('.letter-filter li:nth-of-type(20) a', 'href', '?t');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.letter-filter li:nth-of-type(13) a');
        browser.waitForElementPresent('.pagination:first-of-type');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.pagination__arrow a');
        browser.waitForElementPresent('.resource-list');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.chemical-list-item:nth-of-type(16)');
        browser.waitForElementPresent('.fact-section:last-of-type');
        browser.assert.urlContains('/chemical/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};