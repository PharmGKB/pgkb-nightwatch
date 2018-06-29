var timeout = 2000;

module.exports = {
	'PharmGKB Haplotype Page test': function (browser) {
		browser
			.url(browser.launchUrl + '/haplotype/PA165816577')
			.waitForElementVisible('.counts', timeout)
			.execute(function() {
				if (!browser.assert.title('CYP2D6*2 - Overview | PharmGKB') || !browser.assert.title('Haplotype PA165816577 - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('CYP2D6*2 - Overview | PharmGKB') || browser.assert.title('Haplotype PA165816577 - Overview | PharmGKB'));
				}
			}, [])
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(6) a').click();
			}, [])
			.pause(timeout)
			.waitForElementVisible('div.related-set', timeout)
			.assert.urlContains('related')
			.end();
	}
};