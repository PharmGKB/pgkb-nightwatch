var timeout = 2000;

module.exports = {
	'PharmGKB Literature Page test': function (browser) {
		browser
			.url(browser.launchUrl + '/literature/15096651')
			.pause(timeout)
			.execute(function() {
				if (!browser.assert.title('A multi-factorial analysis of response to warfarin in a UK prospective cohort | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('A multi-factorial analysis of response to warfarin in a UK prospective cohort | PharmGKB'));
				}
			}, [])
			.assert.urlContains('/literature/')
			.waitForElementVisible('.literature-detail', timeout)
			.waitForElementVisible('.compact-facts .fact:nth-of-type(1) a.resource-link', timeout)
			.execute(function() {
				document.querySelector('.compact-facts .fact:nth-of-type(1) a.resource-link').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('/chemical/')
			.waitForElementVisible('.chemicalStructure div img', timeout)
			.end();
	}
};