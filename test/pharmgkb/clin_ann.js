const helpers = require('../helpers');
module.exports = {
  'PharmGKB Clinical Annotation Page test': (browser) => {
    helpers.auth(browser);

    browser
        .url(browser.baseUrl + '/clinicalAnnotation/981419260')
        .waitForElementPresent('.allele-phenotypes-table')
        .assert.urlContains('/clinicalAnnotation/')
        .assert.title('Clinical Annotation for HLA-B*58:01; allopurinol; Drug Hypersensitivity, drug reaction with eosinophilia and systemic symptoms, Epidermal Necrolysis, Toxic, severe cutaneous adverse reactions and Stevens-Johnson Syndrome (level 1A Toxicity)')
        .saveScreenshot('screenshots/clinicalAnnotation.png')
        .click('.compact-facts .fact:nth-of-type(3) .resource-link')
        .waitForElementPresent('.vip-summary-more a')
        .assert.urlContains('/gene/')
        .end();
  }
};