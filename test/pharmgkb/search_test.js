var config = require('../../nightwatch.conf.js');
var timeout = 60000;

module.exports = {
	'PharmGKB Search Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org')
			.pause(5000)
			.waitForElementPresent('.home-page', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.home-page', timeout);
			}, 'Initial test for element')
			.assert.title('PharmGKB')
			.waitForElementPresent('.animated-line', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.animated-line', timeout);
			}, 'Initial test for element')
			.pause(1000)
			.setValue('.search-input', [' ', browser.Keys.ENTER])
			.pause(5000)
			.assert.urlContains('query=%20')
			.waitForElementPresent('.results-list', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.results-list', timeout);
			}, 'Initial test for element')
			.assert.containsText('.results-list', 'No results matched your query.')
			.pause(1000)
			.setValue('.search-input', ['warf', browser.Keys.ENTER])
			.pause(5000)
			.assert.urlContains('query=warf')
			.waitForElementPresent('.results-list', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.results-list', timeout);
			}, 'Initial test for element')
			.assert.containsText('.results-list', 'results that have "warf" in the title')
			.pause(5000)
			.waitForElementPresent('.chemical-list-item:nth-of-type(1)', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.chemical-list-item:nth-of-type(1)', timeout);
			}, 'Initial test for element')
			.execute(function() {
				document.querySelector('.chemical-list-item:nth-of-type(1) a').click()
			})
			.pause(5000)
			.assert.urlContains('chemical')
			.waitForElementPresent('.chemicalStructure div img', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.chemicalStructure div img', timeout);
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('warfarin - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('warfarin - Overview | PharmGKB')
			}, [])
			.end();
	}
};
