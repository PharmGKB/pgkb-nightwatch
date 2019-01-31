module.exports = {
	'PharmGKB Pathway Page test': function(browser) {
		browser.url(browser.launchUrl + '/pathway/PA166104634');

        browser.waitForElementPresent('.pathwayDiagram img');
        browser.assert.urlContains('/pathway/');
        browser.assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('ul.side-nav > :nth-child(2) a');
        browser.waitForElementPresent('.fact-section:nth-of-type(1) .fact-section-content.show-not-available-when-empty:nth-of-type(1)');
        browser.assert.urlContains('/components');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('.fact:nth-of-type(1) > .fact-content > .resource-links > :nth-child(4) a');
        browser.waitForElementPresent('ul.side-nav');
        browser.assert.urlContains('gene');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.back();

    	browser.waitForElementPresent('.table-inline');
        browser.assert.urlContains('components');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('ul.side-nav > :nth-child(3) a');
		browser.waitForElementPresent('.searchableList');
		browser.assert.urlContains('/pathways');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.click('.searchableList > :nth-child(2) a');
		browser.waitForElementPresent('.fact-section-content');
		browser.assert.urlContains('pathway/PA');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.end();
	}
};
