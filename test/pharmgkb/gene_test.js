var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Gene Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/gene/PA356')
			.pause(5000)
			.waitForElementPresent('.half-width-facts', timeout, false, function () {
				this.refresh();
				browser.pause(5000);
				browser.waitForElementPresent('.half-width-facts', timeout);
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('TPMT - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('TPMT - Overview | PharmGKB')
			}, [])
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(2) a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('guideline')
			.assert.containsText('.facts-container > .fact-section:nth-of-type(2) h4', 'Rx Annotations')
			.pause(1000)
			.execute(function() {
				document.querySelector('.literature-list-item > a.block-link').click();
			}, [])
			.pause(5000)
			.waitForElementPresent('div.resource-detail.literature-detail', timeout, false, function () {
				this.refresh();
				browser.pause(5000);
				browser.waitForElementPresent('div.resource-detail.literature-detail', timeout);
			}, 'Initial test for element')
			.assert.urlContains('/literature/')
			.pause(1000)
			.back()
			.pause(5000)
			.assert.urlContains('guideline')
			.pause(1000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(10) a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('link')
			.waitForElementPresent('.link_tab__xrefs > :nth-child(1) a', timeout, false, function () {
				this.refresh();
				browser.pause(5000);
				browser.waitForElementPresent('.link_tab__xrefs > :nth-child(1) a', timeout);
			}, 'Initial test for element')
			.pause(1000)
			.execute(function() {
				document.querySelector('.link_tab__xrefs > :nth-child(9) a').click();
			}, [])
			.pause(5000)
			.windowHandles(function(result) {
				var newWindow;
				this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
				newWindow = result.value[1];
				this.switchWindow(newWindow);
			})
			.pause(5000)
			.waitForElementPresent('h1.title', timeout, false, function () {
				this.refresh();
				browser.pause(5000);
				browser.waitForElementPresent('h1.title', timeout);
			}, 'Initial test for element')
			.assert.title('TPMT Symbol Report | HUGO Gene Nomenclature Committee')
			.assert.urlContains('genenames')
			.end();
	}
};
