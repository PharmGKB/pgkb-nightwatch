var config = require('../../nightwatch.conf.js');
var timeout = 60000;

module.exports = {
	'PharmGKB Drug Class Overview Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org/chemical/PA164712445')
			.pause(5000)
			.assert.urlContains('/chemical/')
			.pause(5000)
			.waitForElementPresent('.resourceCounts', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.resourceCounts', timeout);
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('Antihypertensives - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('Antihypertensives - Overview | PharmGKB')
			}, [])
			.pause(1000)
			.execute(function() {
				document.querySelector('.chemical-list-item:nth-of-type(5) a').click();
			}, [])
			.pause(5000)
			.execute(function() {
				if (!browser.assert.title('clonidine - Overview | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('clonidine - Overview | PharmGKB')
			}, [])
			.waitForElementPresent('.chemicalStructure div img', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.chemicalStructure div img', timeout)
			}, 'Initial test for element')
			.pause(1000)
			.back()
			.pause(5000)
			.execute(function() {
				document.querySelector('ul.side-nav > :nth-child(4) a').click();
			}, [])
			.pause(5000)
			.waitForElementPresent('.table-inline', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.table-inline', timeout)
			}, 'Initial test for element')
			.assert.urlContains('/clinicalAnnotation')
			.pause(1000)
			.execute(function() {
				document.querySelector('.right-table .row-color-warning:nth-of-type(6) td:nth-of-type(1) a').click();
			}, [])
			.pause(5000)
			.waitForElementPresent('.clinical-annotation-detail', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.clinical-annotation-detail', timeout)
			}, 'Initial test for element')
			.assert.urlContains('/clinicalAnnotation/')
			.end();
	}
};