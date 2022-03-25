const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
  'PharmGKB Chemical Page test': (browser) => {
    helpers.auth(browser);

    browser
        .url(browser.baseUrl + '/chemical/PA449088')
        .assert.not.elementPresent('.error-box')
        .assert.elementPresent('.chemicalStructure div img')
        .assert.elementPresent('.resourceCounts')
        .assert.urlContains('/chemical/')
        .assert.titleEquals('codeine')
        .saveScreenshot(`screenshots/chemical-overview.png`);
    tab.testPrescribing(browser);
    tab.testDrugLabels(browser);
    tab.testClinicalAnnotations(browser);
    tab.testVariantAnnotations(browser);
    tab.testLiterature(browser);
    tab.testPathway(browser);
    tab.testRelated(browser);
    tab.testAutomated(browser);
    tab.testLinks(browser);
    browser
        .url(browser.baseUrl + '/chemical/PAbadid')
        .assert.titleEquals('PharmGKB')
        .assert.elementPresent('.error-box')
        .end();
  }
};
