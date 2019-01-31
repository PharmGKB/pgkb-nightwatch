module.exports = {
	'PharmGKB Disease Page test': function (browser) {
		browser.url(browser.launchUrl + '/disease/PA443635');

		browser.waitForElementVisible('.counts');
		browser.assert.title('Cardiovascular Diseases - Overview | PharmGKB');
		browser.waitForElementVisible('.counts > a.count-link:nth-of-type(1)');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.counts > a.count-link:nth-of-type(1)');
        browser.waitForElementVisible('.table-inline');
        browser.assert.urlContains('/clinicalAnnotation');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};