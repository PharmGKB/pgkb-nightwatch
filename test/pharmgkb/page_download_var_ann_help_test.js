module.exports = {
    'PharmGKB Download Variant Annotations Help Page test': function (browser) {
        browser.url(browser.launchUrl + '/page/downloadVariantAnnotationsHelp');

        browser.waitForElementVisible('.dropup');
        browser.assert.containsText('section h1','Variant Annotations Help File');
        browser.assert.elementPresent('.html-container');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};