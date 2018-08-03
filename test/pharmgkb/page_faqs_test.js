module.exports = {
    'PharmGKB FAQs Page test': function (browser) {
        browser.url(browser.launchUrl + '/page/faqs');

        browser.waitForElementPresent('.html-container');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.static ul:nth-child(3) li:nth-child(1) a');
        browser.assert.urlContains('#what-is-the-pharmgkb');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });


        browser.url(browser.launchUrl + '/page/faqs');
        browser.waitForElementPresent('.html-container');
        browser.click('.static ul:nth-child(5) li:nth-child(1) a');
        browser.assert.urlContains('#what-kinds-of-data-are-available-at-pharmgkb');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};