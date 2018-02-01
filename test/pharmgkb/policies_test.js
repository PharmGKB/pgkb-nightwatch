var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
  'PharmGKB Policy Page test': function(browser) {
    browser
      .url('https://www.pharmgkb.org')
			.pause(5000)
			.waitForElementPresent('.home-page', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.home-page', timeout)
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('PharmGKB')) {
					this.refresh();
					return browser.assert.title('CYP2D6*2 - Overview | PharmGKB');
				}
			}, [])
			.pause(1000)
			.execute(function() {
				document.querySelector('.page-footer .row > :nth-child(2) > :nth-child(3)').click();
			}, [])
      .pause(5000)
			.waitForElementPresent('.html-container p:nth-of-type(2)', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.html-container p:nth-of-type(2)', timeout)
			}, 'Initial test for element')
			.assert.urlContains('/policies')
      .assert.containsText('.html-container p:nth-of-type(1)', 'read the following policies')
			.pause(1000)
			.execute(function() {
				document.querySelector('.html-container > :nth-child(2) a').click();
			}, [])
			.pause(5000)
      .assert.urlContains('/dataUsagePolicy')
			.waitForElementPresent('#terms-and-conditions-of-use', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('#terms-and-conditions-of-use', timeout)
			}, 'Initial test for element')
      .assert.containsText('.static h1', 'Data Usage Policy')
      .end();
  }
};
