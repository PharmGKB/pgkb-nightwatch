const helpers = require('../helpers');
module.exports = {
  'PharmGKB Variant Annotation Page test': function (browser) {
    const path = '/variantAnnotation/1445362018';

    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('#variant-ann-publication')
      .assert.urlContains('/variantAnnotation/')
      .assert.title('Annotation of HLA-B*58:01 | PharmGKB');
    helpers.screenshot(browser, `/${path}-1`);

    browser.click('#variant-ann-publication :nth-child(1) a')
      .waitForElementVisible('.literature-detail')
      .assert.urlContains('/literature/')
      .assert.title('HLA-B*58:01 is strongly associated with allopurinol-induced severe cutaneous adverse reactions in Han Chinese patients: a multicentre retrospective case-control clinical study. | PharmGKB');
    helpers.screenshot(browser, `/${path}-2`);

    browser.back()
      .waitForElementVisible('.study-parameters .row:nth-of-type(1) .inline-facts');
    helpers.screenshot(browser, `/${path}-3`);

    browser.end();
  }
};
