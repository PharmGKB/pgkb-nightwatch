module.exports = {
	'PharmGKB Variant Annotation Page test': function (browser) {
		browser.url(browser.launchUrl + '/variantAnnotation/1445362018');

		browser.waitForElementVisible('#variant-ann-publication');
        browser.assert.urlContains('/variantAnnotation/');
        browser.assert.title('Annotation of HLA-B*58:01 | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.click('#variant-ann-publication :nth-child(1) a');
        browser.waitForElementVisible('.literature-detail');
        browser.assert.urlContains('/literature/');
        browser.assert.title('HLA-B*58:01 is strongly associated with allopurinol-induced severe cutaneous adverse reactions in Han Chinese patients: a multicentre retrospective case-control clinical study. | PharmGKB');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.back();
        browser.waitForElementVisible('.study-parameters .row:nth-of-type(1) .inline-facts');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
	}
};