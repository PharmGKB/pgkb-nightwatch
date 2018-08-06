module.exports = {
    'PharmGKB Home Page test(VIPs)': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('#vips');
        browser.waitForElementPresent('.vip-list-item:last-of-type');
        browser.assert.urlContains('/vips');
        browser.waitForElementPresent('.vip-list');
        browser.assert.attributeContains('.vip-list-item:first-of-type .vipList-litLink a', 'href','/literature/');
        browser.assert.attributeContains('.vip-list-item:first-of-type h5 a', 'href', '/vip/PA');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};

