module.exports = {
	'PharmGKB Drug Class Overview Page test': function(client) {
	    client.url(client.launchUrl + '/chemical/PA133950441');

	    client.waitForElementVisible('.chemical-list-item a');
	    client.assert.title('hmg coa reductase inhibitors - Overview | PharmGKB');
		client.expect.element('.resourceCounts').to.be.visible;
        client.expect.element('ul.side-nav li:nth-child(4) a').text.to.equal('Clinical Annotations');
        client.url(function (result) {
            client.resizeWindow(1280, 800);
            client.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        client.click('ul.side-nav li:nth-child(4) a');
        client.waitForElementVisible('.table-inline');
        client.expect.element('.right-table').to.be.visible;
        client.assert.title('hmg coa reductase inhibitors - Clinical Annotations | PharmGKB');
        client.url(function (result) {
            client.resizeWindow(1280, 800);
            client.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });


        client.click('.right-table .row-color-warning td a');
        client.waitForElementVisible('.clinical-annotation-detail');
        client.assert.urlContains('/clinicalAnnotation/');
        client.url(function (result) {
            client.resizeWindow(1280, 800);
            client.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        client.back().back();

        client.waitForElementVisible('.chemical-list-item a');
        client.click('.chemical-list-item a');
		client.waitForElementVisible('.chemicalStructure div img');
		client.assert.title('atorvastatin - Overview | PharmGKB');
        client.url(function (result) {
            client.resizeWindow(1280, 800);
            client.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

		client.end();
	}
};
