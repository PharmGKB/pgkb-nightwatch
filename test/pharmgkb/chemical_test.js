var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Chemical Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/chemical/PA449088')
			.pause(1000)
			.assert.urlContains('/chemical/')
			.execute(function() {
				if (!browser.assert.title('codeine - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(1000);
				}
				return browser.assert.title('codeine - Overview | PharmGKB')
			}, [])
			.waitForElementPresent('.chemicalStructure div img', timeout, false, function() {
				this.refresh();
				browser.waitForElementPresent('.chemicalStructure div img', timeout)
			}, 'Initial test for element')
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(1000)
			.waitForElementPresent('.collection-wrapper', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.collection-wrapper', timeout);
			}, 'Initial test for element')
			.assert.urlContains('guideline')
			.pause(1000)
			.execute(function() {
				document.querySelector('.btn-primary:nth-of-type(1)').click();
			}, [])
			.pause(1000)
			.waitForElementPresent('.genotype-specific-annotations-picker', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.genotype-specific-annotations-picker', timeout);
			}, 'Testing guideline picker display')
			.assert.urlContains('guideline/PA')
			.pause(1000)
			.click('select:nth-of-type(1) option[value="*1"]')
			.pause(1000)
			.click('select:nth-of-type(2) option[value="*3xN"]')
			.pause(1000)
			.waitForElementVisible('.genotype-specific-annotations-facts .fact .fact-content', 2000, 'Test guideline picker results display')
			.assert.containsText('.fact:nth-of-type(1)', 'activity score')
			.end();
	}
};
