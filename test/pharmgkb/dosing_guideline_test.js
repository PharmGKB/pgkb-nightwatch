var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Dosing Guideline Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/guideline/PA166105006')
			.pause(timeout)
			.assert.urlContains('/guideline/')
			.waitForElementVisible('.genotype-specific-annotations', timeout)
			.execute(function() {
				if (!browser.assert.title('Annotation of CPIC Guideline for amitriptyline and CYP2C19, CYP2D6 | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('Annotation of CPIC Guideline for amitriptyline and CYP2C19, CYP2D6 | PharmGKB'));
				}
			}, [])
			.click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(1) option[value="*3"]')
			.pause(1000)
			.click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(2) option[value="*10"]')
			.pause(1000)
			.click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(1) option[value="*6xN"]')
			.pause(1000)
			.click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(2) option[value="*17x2"]')
			.pause(timeout)
			.waitForElementVisible('.genotype-specific-annotations-facts', timeout)
			.execute(function() {
				document.querySelector('.complete-text > p:nth-of-type(1) a').click();
			})
			.windowHandles(function(result) {
				var newWindow;
				this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
				newWindow = result.value[1];
				this.switchWindow(newWindow);
			})
			.pause(timeout)
			.assert.urlContains('cpicpgx')
			.waitForElementVisible('.post-story', timeout)
			.end();
	}
};