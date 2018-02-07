var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Clinical Annotation Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/clinicalAnnotation/981419260')
			.pause(timeout)
			.assert.urlContains('/clinicalAnnotation/')
			.waitForElementPresent('.clinical-annotation-detail', timeout)
			.execute(function() {
				if (!browser.assert.title('Clinical Annotation for HLA-B*58:01, allopurinol, Arthritis, Gouty, Drug Hypersensitivity, Epidermal Necrolysis, Toxic, Hyperuricemia, Kidney Failure, Chronic and Stevens-Johnson Syndrome (level 1A Toxicity/ADR) | PharmGKB')) {
					this.refresh();
				}
				return (browser.assert.title('Clinical Annotation for HLA-B*58:01, allopurinol, Arthritis, Gouty, Drug Hypersensitivity, Epidermal Necrolysis, Toxic, Hyperuricemia, Kidney Failure, Chronic and Stevens-Johnson Syndrome (level 1A Toxicity/ADR) | PharmGKB'));
			}, [])
			.execute(function() {
				document.querySelector('.compact-facts .fact:nth-of-type(3) .resource-link').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('/gene/')
			.waitForElementPresent('.vip-link', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.vip-link', timeout)
			}, 'Initial test for element')
			.end();
	}
};