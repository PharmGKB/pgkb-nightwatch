var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Gene Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/gene/PA356')
			.waitForElementPresent('.half-width-facts', timeout)
			.execute(function() {
				if (!browser.assert.title('TPMT - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('TPMT - Overview | PharmGKB')
			}, [])
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('guideline')
			.assert.containsText('.facts-container > .fact-section:nth-of-type(2) h4', 'Rx Annotations')
			.execute(function() {
				document.querySelector('.literature-list-item > a.block-link').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('div.resource-detail.literature-detail', timeout)
			.assert.urlContains('/literature/')
			.back()
			.assert.urlContains('guideline')
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(10) a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('link')
			.waitForElementPresent('.link_tab__xrefs > :nth-child(1) a', timeout)
			.execute(function() {
				document.querySelector('.link_tab__xrefs > :nth-child(9) a').click();
			}, [])
			.pause(timeout)
			.windowHandles(function(result) {
				var newWindow;
				this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
				newWindow = result.value[1];
				this.switchWindow(newWindow);
			})
			.pause(timeout)
			.waitForElementPresent('h1.title', timeout)
			.assert.title('TPMT Symbol Report | HUGO Gene Nomenclature Committee')
			.assert.urlContains('genenames')
			.end();
	}
};
