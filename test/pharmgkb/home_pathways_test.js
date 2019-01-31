module.exports = {
    'PharmGKB Home Page test(Pathways)': function (browser) {
        browser.url(browser.launchUrl);

        browser.waitForElementPresent('.home-page');

        browser.click('.pathways a');
        browser.waitForElementPresent('.searchableList');
        browser.assert.urlContains('/pathways');
        browser.assert.containsText('.heading-title', 'CATEGORY');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.checkbox:last-of-type');

        browser.click('.searchableList .clickable:last-of-type');
        browser.waitForElementPresent('#pathway-summary');
        browser.assert.urlContains('/pathway/');

        browser.url(function(result){
            console.log(result.value);
        });
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};