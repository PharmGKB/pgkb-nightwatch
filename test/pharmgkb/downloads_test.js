var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Download Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/downloads')
			.pause(timeout)
			.assert.urlContains('/downloads')
			.waitForElementVisible('section.fact-section:nth-of-type(1)', timeout)
			.assert.title('Downloads | PharmGKB')
			.assert.containsText('section:nth-of-type(2) > div.row:nth-of-type(2) > .col-sm-6:nth-of-type(1) > .downloads__card_text ul', 'dosingGuidelines.json.zip')
			.end();
	}
};