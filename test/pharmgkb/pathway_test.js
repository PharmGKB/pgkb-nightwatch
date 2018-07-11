var timeout = 2000;

module.exports = {
	'PharmGKB Pathway Page test': function(browser) {
		browser
			.url(browser.launchUrl + '/pathway/PA166104634')
			.assert.urlContains('/pathway/')
			.waitForElementPresent('.pathwayDiagram img', timeout)
			.execute(function() {
				if (!browser.assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB');
			}, [])
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('.fact-section:nth-of-type(1) .fact-section-content.show-not-available-when-empty:nth-of-type(1)', timeout)
			.assert.urlContains('components')
			.execute(function() {
				document.querySelector('.fact:nth-of-type(1) > .fact-content > .resource-links > :nth-child(4) a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('gene')
			.back()
			.assert.urlContains('components')
			.waitForElementPresent('.table-inline', timeout)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(3) a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('pathways')
			.waitForElementPresent('.searchableList', timeout)
			.execute(function() {
				document.querySelector('.searchableList > :nth-child(2) a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('pathway/PA')
			.end();
	}
};
