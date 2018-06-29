var timeout = 2000;

module.exports = {
	'PharmGKB Chemical Page test': function(browser) {
		browser
			.url(browser.launchUrl + '/chemical/PA449088')
			.pause(timeout)
			.assert.urlContains('/chemical/')
			.execute(function() {
				if (!browser.assert.title('codeine - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('codeine - Overview | PharmGKB')
			}, [])
			.waitForElementPresent('.chemicalStructure div img', timeout)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('.collection-wrapper', timeout)
			.assert.urlContains('guideline')
			.execute(function() {
				document.querySelector('.btn-primary:nth-of-type(1)').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('.genotype-specific-annotations-picker', timeout)
			.assert.urlContains('guideline/PA')
			.click('select:nth-of-type(1) option[value="Normal function"]')
			.click('select:nth-of-type(2) option[value="No function"]')
			.pause(timeout)
			.waitForElementVisible('.genotype-specific-annotations-facts .fact:nth-of-type(1) .fact-content', timeout)
			.assert.containsText('.fact:nth-of-type(1)', 'activity score')
			.end();
	}
};
