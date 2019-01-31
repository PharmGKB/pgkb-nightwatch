module.exports = {
	'PharmGKB Dosing Guideline Page test': function (browser) {
		browser.url(browser.launchUrl + '/guidelineAnnotation/PA166105006');

		browser.waitForElementVisible('.guideline-detail');
		browser.assert.urlContains('/guidelineAnnotation/');
		browser.assert.title('Annotation of CPIC Guideline for amitriptyline and CYP2C19,CYP2D6 | PharmGKB');
		browser.url(function (result) {
			browser.resizeWindow(1280, 800);
			browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
		});

		browser.click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(1) option[value="No function"]');
		browser.click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(2) option[value="Decreased function"]');
		browser.click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(1) option[value="No function"]');
		browser.click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(2) option[value="Normal function"]');

		browser.waitForElementVisible('.genotype-specific-annotations-facts');
		browser.url(function (result) {
			browser.resizeWindow(1280, 800);
			browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
		});

		browser.click('#guideline-annotation > div.fact-section-content:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) a');

		browser.windowHandles(function(result) {
			var newWindow;
			this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
			newWindow = result.value[1];
			this.switchWindow(newWindow);
		});

		browser.waitForElementVisible('.post-story');
		browser.assert.urlContains('cpicpgx');
		browser.url(function (result) {
			browser.resizeWindow(1280, 800);
			browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
		});

		browser.end();
	}
};
