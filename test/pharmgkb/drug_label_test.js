var config = require('../../nightwatch.conf.js');
var timeout = 2000;

module.exports = {
	'PharmGKB Drug Label Page test': function (browser) {
		browser
			.url('https://www.pharmgkb.org/label/PA166104782')
			.pause(timeout)
			.execute(function() {
				if (!browser.assert.title('Annotation of FDA Label for azathioprine and TPMT | PharmGKB')) {
					this.refresh();
					return (browser.assert.title('Annotation of FDA Label for azathioprine and TPMT | PharmGKB'));
				}
			}, [])
			.assert.urlContains('/label/')
			.waitForElementVisible('.label-detail', timeout)
			.execute(function() {
				document.querySelector('.more-info-links div:nth-of-type(1) a').click();
			}, [])
			.pause(timeout)
			.windowHandles(function(result) {
				var newWindow;
				this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
				newWindow = result.value[1];
				this.switchWindow(newWindow);
			})
			.assert.urlContains('/dailymed/')
			.waitForElementVisible('.drug-information:nth-of-type(1)', timeout)
			.end();
	}
};