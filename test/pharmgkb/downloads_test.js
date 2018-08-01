module.exports = {
	'PharmGKB Download Page test': function (browser) {
		browser.url(browser.launchUrl + '/downloads');

		browser.waitForElementVisible('section.fact-section:nth-of-type(1)');
        browser.assert.urlContains('/downloads');
        browser.assert.title('Downloads | PharmGKB');
        browser.assert.containsText('section:nth-of-type(2) > div.row:nth-of-type(2) > .col-sm-6:nth-of-type(1) > .downloads__card_text ul', 'dosingGuidelines.json.zip');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};