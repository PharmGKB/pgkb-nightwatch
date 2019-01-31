module.exports = {
	'PharmGKB Haplotype Page test': function (browser) {
		browser.url(browser.launchUrl + '/haplotype/PA165816577');
		browser.waitForElementVisible('.counts');
        browser.assert.title('CYP2D6*2 - Overview | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('ul.side-nav > :nth-child(6) a');
        browser.waitForElementVisible('div.related-set');
        browser.assert.urlContains('related');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};