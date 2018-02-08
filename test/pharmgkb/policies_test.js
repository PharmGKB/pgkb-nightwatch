var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Policy Page test': function(browser) {
    browser
      .url('https://www.pharmgkb.org')
			.pause(timeout)
			.waitForElementPresent('.home-page', timeout)
			.execute(function() {
				if (!browser.assert.title('PharmGKB')) {
					this.refresh();
					return browser.assert.title('CYP2D6*2 - Overview | PharmGKB');
				}
			}, [])
			.pause(timeout)
			.execute(function() {
				document.querySelector('.page-footer .row > :nth-child(2) > :nth-child(3)').click();
			}, [])
      .pause(timeout)
			.waitForElementPresent('.html-container p:nth-of-type(2)', timeout)
			.assert.urlContains('/policies')
      .assert.containsText('.html-container p:nth-of-type(1)', 'read the following policies')
			.pause(timeout)
			.execute(function() {
				document.querySelector('.html-container > :nth-child(2) a').click();
			}, [])
			.pause(timeout)
      .assert.urlContains('/dataUsagePolicy')
			.waitForElementPresent('#terms-and-conditions-of-use', timeout)
      .assert.containsText('.static h1', 'Data Usage Policy')
      .end();
  }
};
