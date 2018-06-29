var timeout = 2000;

module.exports = {
	'PharmGKB Variant Annotation Page test': function (browser) {
		browser
			.url(browser.launchUrl + '/variantAnnotation/1445362018')
			.pause(timeout)
			.assert.urlContains('/variantAnnotation/')
			.waitForElementVisible('#variant-ann-publication', timeout)
			.execute(function() {
				if (!browser.assert.title('Annotation of HLA-B*58:01 | PharmGKB')) {
					this.refresh();
				}
				return (browser.assert.title('Annotation of HLA-B*58:01 | PharmGKB'));
			}, [])
			.execute(function() {
				document.querySelector('#variant-ann-publication :nth-child(1) a').click();
			}, [])
			.pause(timeout)
			.waitForElementVisible('.literature-detail', timeout)
			.assert.urlContains('/literature/')
			.execute(function() {
				if(!browser.assert.title('HLA-B*58:01 is strongly associated with allopurinol-induced severe cutaneous adverse reactions in Han Chinese patients: a multicentre retrospective case-control clinical study | PharmGKB')) {
					this.refresh();
				}
				return (browser.assert.title('HLA-B*58:01 is strongly associated with allopurinol-induced severe cutaneous adverse reactions in Han Chinese patients: a multicentre retrospective case-control clinical study | PharmGKB'))
			})
			.back()
			.waitForElementVisible('.study-parameters .row:nth-of-type(1) .inline-facts', timeout)
			.end();
	}
};