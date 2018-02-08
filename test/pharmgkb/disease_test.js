var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Disease Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/disease/PA443635')
			.waitForElementVisible('.counts', timeout)
			.execute(function() {
				if (!browser.assert.title('Cardiovascular Diseases - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('Cardiovascular Diseases - Overview | PharmGKB'));
				}
			}, [])
			.waitForElementVisible('.counts > a.count-link:nth-of-type(1)', timeout)
			.execute(function() {
				document.querySelector('.counts > a.count-link:nth-of-type(1)').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('/clinicalAnnotation')
			.waitForElementVisible('.table-inline', timeout)
			.end();
	}
};