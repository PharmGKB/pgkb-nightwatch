var config = require('../../nightwatch.conf.js');
var timeout = 60000;

module.exports = {
	'PharmGKB Haplotype Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/haplotype/PA165816577')
			.pause(5000)
			.waitForElementVisible('.counts', timeout, false, function() {
				this.refresh();
				return browser.waitForElementVisible('.counts', timeout)
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('CYP2D6*2 - Overview | PharmGKB') || !browser.assert.title('Haplotype PA165816577 - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('CYP2D6*2 - Overview | PharmGKB') || browser.assert.title('Haplotype PA165816577 - Overview | PharmGKB'));
				}
			}, [])
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(6) a').click();
			}, [])
			.pause(5000)
			.waitForElementVisible('div.related-set', timeout, false, function() {
				this.refresh();
				return browser.waitForElementVisible('div.related-set', timeout)
			}, 'Initial test for element')
			.assert.urlContains('related')
			.end();
	}
};