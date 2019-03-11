const helpers = require('../helpers');
module.exports = {
  'PharmGKB Clinical Annotation Page test': (browser) => {
    const path = '/clinicalAnnotation/981419260';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.allele-phenotypes-table')
      .assert.urlContains('/clinicalAnnotation/')
      .assert.title('Clinical Annotation for HLA-B*58:01; allopurinol; Arthritis, Gouty, Drug Hypersensitivity, Epidermal Necrolysis, Toxic, Hyperuricemia, Kidney Failure, Chronic and Stevens-Johnson Syndrome (level 1A Toxicity/ADR) | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('.compact-facts .fact:nth-of-type(3) .resource-link')
      .waitForElementPresent('.vip-link')
      .assert.urlContains('/gene/');
    helpers.screenshot(browser, `${path}-2`);

    browser.end();
  }
};