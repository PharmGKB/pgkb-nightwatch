module.exports = {
	'PharmGKB Literature Page test': function (browser) {
		browser.url(browser.launchUrl + '/literature/15096651');

		browser.waitForElementVisible('.literature-detail');
        browser.assert.title('A multi-factorial analysis of response to warfarin in a UK prospective cohort. | PharmGKB');
        browser.assert.urlContains('/literature/');
        browser.waitForElementVisible('.compact-facts .fact:nth-of-type(1) a.resource-link');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.compact-facts .fact:nth-of-type(1) a.resource-link');
		browser.waitForElementVisible('.chemicalStructure div img');
		browser.assert.urlContains('/chemical/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.end();
	}
};