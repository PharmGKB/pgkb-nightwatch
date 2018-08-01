module.exports = {
	'PharmGKB Search Page test': function(browser) {
		browser.url(browser.launchUrl);
		browser.waitForElementPresent('.home-page');
		browser.assert.title('PharmGKB');
		browser.waitForElementPresent('.animated-line');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.setValue('.search-input', [' ', browser.Keys.ENTER]);
    	browser.waitForElementPresent('.results-list');
    	browser.assert.urlContains('query=%20');
    	browser.assert.containsText('.results-list', 'No results matched your query.');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.setValue('.search-input', ['warf', browser.Keys.ENTER]);
    	browser.waitForElementPresent('.results-list');
    	browser.assert.urlContains('query=warf');
    	browser.assert.containsText('.results-list', 'results that have "warf" in the title');
    	browser.waitForElementPresent('.chemical-list-item:nth-of-type(1)');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.chemical-list-item:nth-of-type(1) a');
        browser.waitForElementPresent('.chemicalStructure div img');
        browser.assert.urlContains('chemical');
        browser.assert.title('warfarin - Overview | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};
