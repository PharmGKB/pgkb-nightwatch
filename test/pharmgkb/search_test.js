var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Search Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org')
			.waitForElementPresent('.home-page', timeout)
			.assert.title('PharmGKB')
			.waitForElementPresent('.animated-line', timeout)
			.setValue('.search-input', [' ', browser.Keys.ENTER])
			.pause(timeout)
			.assert.urlContains('query=%20')
			.waitForElementPresent('.results-list', timeout)
			.assert.containsText('.results-list', 'No results matched your query.')
			.setValue('.search-input', ['warf', browser.Keys.ENTER])
			.pause(timeout)
			.assert.urlContains('query=warf')
			.waitForElementPresent('.results-list', timeout)
			.assert.containsText('.results-list', 'results that have "warf" in the title')
			.waitForElementPresent('.chemical-list-item:nth-of-type(1)', timeout)
			.execute(function() {
				document.querySelector('.chemical-list-item:nth-of-type(1) a').click()
			})
			.pause(timeout)
			.assert.urlContains('chemical')
			.waitForElementPresent('.chemicalStructure div img', timeout)
			.execute(function() {
				if (!browser.assert.title('warfarin - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('warfarin - Overview | PharmGKB')
			}, [])
			.end();
	}
};
