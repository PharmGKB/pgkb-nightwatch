var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Drug Class Overview Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/chemical/PA164712445')
			.assert.urlContains('/chemical/')
			.waitForElementPresent('.resourceCounts', timeout)
			.execute(function() {
				if (!browser.assert.title('Antihypertensives - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('Antihypertensives - Overview | PharmGKB')
			}, [])
			.execute(function() {
				document.querySelector('.chemical-list-item:nth-of-type(5) a').click();
			}, [])
			.pause(timeout)
			.execute(function() {
				if (!browser.assert.title('clonidine - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(timeout);
				}
				return browser.assert.title('clonidine - Overview | PharmGKB')
			}, [])
			.waitForElementPresent('.chemicalStructure div img', timeout)
			.back()
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(4) a').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('.table-inline', timeout)
			.assert.urlContains('/clinicalAnnotation')
			.execute(function() {
				document.querySelector('.right-table .row-color-warning:nth-of-type(6) td:nth-of-type(1) a').click();
			}, [])
			.pause(timeout)
			.waitForElementPresent('.clinical-annotation-detail', timeout)
			.assert.urlContains('/clinicalAnnotation/')
			.end();
	}
};