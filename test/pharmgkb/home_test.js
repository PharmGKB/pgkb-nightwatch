var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Home Page test': function(browser) {
		browser
			.url('https://www.pharmgkb.org')
			.waitForElementPresent('.home-page', timeout)
			.assert.title('PharmGKB')
			.execute(function() {
				if (!browser.assert.elementPresent('.animated-line')) {
					this.refresh();
					browser.waitForElementPresent('.animated-line', timeout);
				} else {
					return browser.assert.elementPresent('.animated-line');
				}
			}, [])
			.execute(function() {
				document.querySelector('.btn-success:nth-of-type(1)').click()
			}, [])
			.pause(timeout)
			.assert.urlContains('/whatIsPharmacogenomics')
			.waitForElementPresent('.section-components', timeout)
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
			.execute(function() {
				document.querySelector('.outreachSection:nth-of-type(1) .outreachContent__text a[role="button"]').click()
			}, [])
			.pause(timeout)
			.assert.cssClassNotPresent('.outreachSection:nth-of-type(1) .rah-static div', 'display')
			.assert.containsText('.outreachSection:nth-of-type(1) .outreachContent', 'Humans have over 20,000 genes')
			.back()
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
			.pause(timeout)
			.assert.urlContains('/vips')
			.back()
			.execute(function() {
				document.querySelector('.btn-info:nth-of-type(1)').click()
			}, [])
			.pause(timeout)
			.assert.urlContains('/cancerPgx')
			.end();
	}
};
