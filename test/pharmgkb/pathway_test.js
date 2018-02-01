var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Pathway Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/pathway/PA166104634')
			.pause(5000)
			.assert.urlContains('/pathway/')
			.pause(5000)
			.waitForElementPresent('.pathway-diagram-container img', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.pathway-diagram-container img', timeout);
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB');
			}, [])
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(5000)
			.waitForElementPresent('.fact-section:nth-of-type(1) .fact-section-content.show-not-available-when-empty:nth-of-type(1)', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.fact-section:nth-of-type(1) .fact-section-content.show-not-available-when-empty:nth-of-type(1)', timeout);
			}, 'Initial test for element')
			.assert.urlContains('components')
			.pause(1000)
			.execute(function() {
				document.querySelector('.fact:nth-of-type(1) > .fact-content > .resource-links > :nth-child(4) a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('gene')
			.pause(1000)
			.back()
			.pause(5000)
			.assert.urlContains('components')
			.waitForElementPresent('.table-inline', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.table-inline', timeout);
			}, 'Initial test for element')
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(3) a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('pathways')
			.waitForElementPresent('.searchableList', timeout, false, function() {
				this.refresh();
				browser.pause(5000);
				return browser.waitForElementPresent('.searchableList', timeout);
			}, 'Initial test for element')
			.pause(1000)
			.execute(function() {
				document.querySelector('.searchableList > :nth-child(2) a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('pathway/PA')
			.end();
	}
};
