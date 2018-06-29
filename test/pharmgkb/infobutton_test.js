var timeout = 5000;

module.exports = {
	'PharmGKB Infobutton test': function (browser) {
		browser
			.url('https://api.pharmgkb.org/v1/infobutton?mainSearchCriteria.v.c=11289')
			.assert.urlContains('infobutton')
			.waitForElementPresent('section h2', timeout)
			.execute(function() {
				browser.assert.elementPresent('.testing-actionable-pgx', timeout)
			})
			.execute(function() {
				document.querySelector('.testing-actionable-pgx a').click();
			}, [])
			.pause(timeout)
			.windowHandles(function(result) {
				var newWindow;
				this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
				newWindow = result.value[1];
				this.switchWindow(newWindow);
			})
			.pause(timeout)
			.assert.urlContains('/drugLabelLegend')
			.end();
	}
};