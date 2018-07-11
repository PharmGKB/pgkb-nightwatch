const timeout = 1000;

module.exports = {
	'PharmGKB Drug Class Overview Page test': function(client) {
		client
      .url(client.launchUrl + '/chemical/PA133950441')
      .pause(timeout);
		client.assert.title('hmg coa reductase inhibitors - Overview | PharmGKB');
		client.expect.element('.resourceCounts').to.be.visible;
		client.expect.element('.chemical-list-item a').to.be.visible;

    client.expect.element('ul.side-nav li:nth-child(4) a').text.to.equal('Clinical Annotations');
    client.click('ul.side-nav li:nth-child(4) a')
      .pause(timeout);

    client.click('ul.side-nav li:nth-child(4) a')
      .pause(timeout);
    client.assert.title('hmg coa reductase inhibitors - Clinical Annotations | PharmGKB');
    client.expect.element('.table-inline').to.be.visible;
    client.expect.element('.right-table').to.be.visible;
    client.click('.right-table .row-color-warning td a')
      .pause(timeout);
    
    client.assert.urlContains('/clinicalAnnotation/');
    client.expect.element('.clinical-annotation-detail').to.be.visible;
    client.back().pause(timeout);
    client.back();
    client.click('ul.side-nav li a');

		client.click('.chemical-list-item a')
      .pause(timeout);
		client.assert.title('atorvastatin - Overview | PharmGKB');
		client.expect.element('.chemicalStructure div img').to.be.visible;

		client.back()
      .pause(timeout);
    client.assert.title('hmg coa reductase inhibitors - Overview | PharmGKB');

		client.end();
	}
};
