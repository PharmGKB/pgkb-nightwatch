var timeout = 2000;

module.exports = {
	'PharmGKB Combination Page test': function (browser) {
		browser
			.url(browser.launchUrl + '/combination/PA451906,PA126')
			.assert.urlContains(',PA')
			.waitForElementPresent('.counts', timeout)
			.execute(function() {
				if (!browser.assert.title('warfarin + CYP2C9 - Overview | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('warfarin + CYP2C9 - Overview | PharmGKB'));
				}
			}, [])
			.waitForElementPresent('.fact:nth-of-type(2) > .fact-content a', timeout)
			.execute(function() {
				document.querySelector('.fact:nth-of-type(2) > .fact-content a').click();
			}, [])
			.pause(timeout)
			.assert.urlContains('/gene/')
			.waitForElementPresent('.vip-link', timeout)
			.end();
	}
};