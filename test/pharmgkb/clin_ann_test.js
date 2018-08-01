module.exports = {
	'PharmGKB Clinical Annotation Page test': function (browser) {
		browser.url(browser.launchUrl + '/clinicalAnnotation/981419260');

		browser.waitForElementPresent('.clinical-annotation-detail');
        browser.assert.urlContains('/clinicalAnnotation/');
        //browser.title; //if the below line doesn't work, try to uncomment this line and run it again.
		browser.assert.title('Clinical Annotation for HLA-B*58:01; allopurinol; Arthritis, Gouty, Drug Hypersensitivity, Epidermal Necrolysis, Toxic, Hyperuricemia, Kidney Failure, Chronic and Stevens-Johnson Syndrome (level 1A Toxicity/ADR) | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.click('.compact-facts .fact:nth-of-type(3) .resource-link');
		browser.waitForElementPresent('.vip-link');
		browser.assert.urlContains('/gene/');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		browser.end();
	}
};