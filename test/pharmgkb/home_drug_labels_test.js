module.exports = {
    'PharmGKB Labels List Page': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('.labels a');
        browser.waitForElementPresent('.ReactTable');
        browser.assert.urlContains('/labels');
        browser.assert.attributeContains('.label-status a', 'href', '/labelAnnotation/PA');
        browser.assert.attributeContains('.rt-tr-group:last-of-type a', 'href', '/chemical/PA');

        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};