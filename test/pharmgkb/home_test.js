var config = require('../../nightwatch.conf.js');
var timeout = 60000;

module.exports = {
	'PharmGKB Home Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org')
			.pause(5000)
			.waitForElementPresent('.home-page', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.home-page', timeout)
			}, 'Initial test for element')
			.assert.title('PharmGKB')
			.execute(function() {
				if (!browser.assert.elementPresent('.animated-line')) {
					this.refresh();
					browser.waitForElementPresent('.animated-line', timeout);
				} else {
					return browser.assert.elementPresent('.animated-line');
				}
			}, [])
			.pause(1000)
			.execute(function() {
				if (!browser.assert.elementPresent('.btn-success:nth-of-type(1)')) {
					this.refresh();
					browser.waitForElementPresent('.btn-success:nth-of-type(1)', timeout);
				} else {
					return browser.assert.elementPresent('.btn-success:nth-of-type(1)');
				}
			}, [])
			.execute(function() {
				document.querySelector('.btn-success:nth-of-type(1)').click()
			}, [])
			.pause(5000)
			.assert.urlContains('/whatIsPharmacogenomics')
			.waitForElementPresent('.section-components', timeout, false, function() {
				this.refresh();
				return browser.waitForElementPresent('.section-components', timeout);
			}, 'Initial test for element')
			.execute(function() {
				if (!browser.assert.title('What is Pharmacogenomics? | PharmGKB')) {
					this.refresh();
					browser.pause(5000);
				}
				return browser.assert.title('What is Pharmacogenomics? | PharmGKB')
			}, [])
			.execute(function() {
				if (!browser.assert.elementPresent('.outreachSection:nth-of-type(1) > .outreachContent h3')) {
					this.refresh();
					browser.waitForElementPresent('.outreachSection:nth-of-type(1) > .outreachContent h3', timeout);
				} else {
					return browser.assert.elementPresent('.outreachSection:nth-of-type(1) > .outreachContent h3');
				}
			}, [])
			.assert.containsText('.outreachSection:nth-of-type(1) > .outreachContent h3', 'Genomics?')
			.pause(1000)
			.execute(function() {
				document.querySelector('.outreachSection:nth-of-type(1) .outreachContent__text a[role="button"]').click()
			}, [])
			.pause(5000)
			.assert.cssClassNotPresent('.outreachSection:nth-of-type(1) .rah-static div', 'display')
			.assert.containsText('.outreachSection:nth-of-type(1) .outreachContent', 'Humans have over 20,000 genes')
			.pause(1000)
			.back()
			.pause(5000)
			.assert.urlEquals('https://www.pharmgkb.org/')
			.execute(function() {
				if (!browser.assert.elementPresent('#vips')) {
					this.refresh();
					browser.waitForElementPresent('#vips', timeout);
				} else {
					return browser.assert.elementPresent('#vips');
				}
			}, [])
			.execute(function() {
				document.querySelector('#vips').click()
			}, [])
			.pause(5000)
			.assert.urlContains('/vips')
			.pause(1000)
			.back()
			.pause(5000)
			.execute(function() {
				document.querySelector('.btn-info:nth-of-type(1)').click()
			}, [])
			.pause(1000)
			.assert.urlContains('/cancerPgx')
			.end();
	}
};
