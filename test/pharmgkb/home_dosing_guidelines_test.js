module.exports = {
    'PharmGKB Guidelines List Page': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('.dosing a');
        browser.waitForElementPresent('.ReactTable');
        browser.assert.urlContains('/guidelineAnnotations');
        browser.assert.attributeContains('.guidelineBox-icon:first-of-type a', 'href', '/guidelineAnnotation/PA');
        browser.assert.attributeContains('.rt-tr-group:nth-child(3) .guidelineBox-icon a', 'href', '/guidelineAnnotation/PA');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.rt-tr-group:nth-child(4) .guidelineBox-icon a');
        browser.waitForElementPresent('.fact-section:last-of-type');
        browser.assert.urlContains('/guidelineAnnotation/PA');

        browser.end();
    }
};