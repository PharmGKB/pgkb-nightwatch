var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Disease Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/disease/PA443635')
			.pause(5000)
			.waitForElementVisible('.counts', timeout, false, function() {
				this.refresh();
				return browser.waitForElementVisible('.counts', timeout)
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('Cardiovascular Diseases - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('Cardiovascular Diseases - Overview | PharmGKB'));
				}
			}, [])
			.waitForElementVisible('.counts > a.count-link:nth-of-type(1)', timeout, false, function() {
				this.refresh();
				return browser.waitForElementVisible('.counts > a.count-link:nth-of-type(1)', timeout)
			}, 'Initial test for element')
			.execute(function() {
				document.querySelector('.counts > a.count-link:nth-of-type(1)').click();
			}, [])
			.pause(5000)
			.assert.urlContains('/clinicalAnnotation')
			.waitForElementVisible('.table-inline', timeout, false, function() {
				this.refresh();
				return browser.waitForElementVisible('.table-inline', timeout)
			}, 'Initial test for element')
			.end();
	}
};