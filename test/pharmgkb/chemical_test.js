module.exports = {
	'PharmGKB Chemical Page test': function(browser) {
		browser.url(browser.launchUrl + '/chemical/PA449088');

    	browser.waitForElementPresent('.chemicalStructure div img');
		browser.assert.urlContains('/chemical/');
		browser.assert.title('codeine - Overview | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.click('ul.side-nav > :nth-child(2) a');
		browser.waitForElementPresent('.collection-wrapper');
		browser.assert.urlContains('guideline');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.click('.btn-primary:nth-of-type(1)');
		browser.waitForElementPresent('.genotype-specific-annotations-picker');
		browser.assert.urlContains('guideline/PA');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('select:nth-of-type(1) option[value="Normal function"]');
        browser.click('select:nth-of-type(2) option[value="No function"]');
        browser.waitForElementVisible('.genotype-specific-annotations-facts .fact:nth-of-type(1) .fact-content');
        browser.assert.containsText('.fact:nth-of-type(1)', 'activity score');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};
