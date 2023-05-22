const helpers = require('../helpers');
module.exports = {
  'PharmGKB Clinical Annotation Page test': (browser) => {
    helpers.auth(browser);

    browser
      .url(browser.baseUrl + '/clinicalAnnotation/981419260')
      .assert.urlContains('/clinicalAnnotation/')
      .assert.title('Clinical Annotation for HLA-B*58:01; allopurinol; Drug Hypersensitivity, drug reaction with eosinophilia and systemic symptoms, Epidermal Necrolysis, Toxic, severe cutaneous adverse reactions and Stevens-Johnson Syndrome (level 1A Toxicity)')
      .assert.elementPresent('.allele-phenotypes-table')
      .assert.textContains('div.tag', 'Level 1A');

    // expect to find a couple of other tags on the page besides the level tag
    browser.expect
      .elements('div.clinical-annotation-detail div.row > div:nth-of-type(1) div.tag')
      .count.to.equal(2)

    browser
      .assert.elementPresent('svg.fa-child-reaching')
      .assert.elementPresent('#ca-level-section')
      .assert.elementPresent('.evidence-section')
      .assert.elementPresent('.variant-annotation-detail')
      .saveScreenshot('screenshots/clinicalAnnotation.png')
      .click('link text', 'HLA-B')
      .waitForElementPresent('.vip-summary-more a')
      .assert.urlContains('/gene/')
      .end();
  }
};