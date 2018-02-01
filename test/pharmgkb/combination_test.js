var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Combination Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/combination/PA451906,PA126')
			.pause(5000)
			.assert.urlContains(',PA')
			.waitForElementPresent('.counts', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.counts', timeout)
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('warfarin + CYP2C9 - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('warfarin + CYP2C9 - Overview | PharmGKB'));
				}
			}, [])
			.waitForElementPresent('.fact:nth-of-type(2) > .fact-content a', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.fact:nth-of-type(2) > .fact-content a', timeout)
			}, 'Initial test for element')
			.execute(function() {
				document.querySelector('.fact:nth-of-type(2) > .fact-content a').click();
			}, [])
			.pause(5000)
			.assert.urlContains('/gene/')
			.waitForElementPresent('.vip-link', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.vip-link', timeout)
			}, 'Initial test for element')
			.end();
	}
};