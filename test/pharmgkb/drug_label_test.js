module.exports = {
	'PharmGKB Drug Label Page test': function (browser) {
		browser.url(browser.launchUrl + '/label/PA166104782');

		browser.waitForElementVisible('.label-detail');
        browser.assert.title('Annotation of FDA Label for azathioprine and TPMT | PharmGKB');
        browser.assert.urlContains('/label/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.more-info-links div:nth-of-type(1) a');

        browser.windowHandles(function(result) {
        	var newWindow;
        	this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        	newWindow = result.value[1];
        	this.switchWindow(newWindow);
        });
        browser.waitForElementVisible('.drug-information:nth-of-type(1)');
        browser.assert.urlContains('/dailymed/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};