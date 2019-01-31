module.exports = {
	'PharmGKB Infobutton test': function (browser) {
		browser.url('https://api.pharmgkb.org/v1/infobutton?mainSearchCriteria.v.c=11289');

		browser.assert.elementPresent('.testing-actionable-pgx');
        browser.waitForElementPresent('section h2');
        browser.assert.urlContains('infobutton');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.testing-actionable-pgx a');
        browser.windowHandles(function(result) {
        	var newWindow;
        	this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        	newWindow = result.value[1];
        	this.switchWindow(newWindow);
        });
        browser.assert.urlContains('/drugLabelLegend');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};