const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Haplotype Page test': (browser) => {
        helpers.auth(browser);

        browser
          .url(browser.baseUrl + '/haplotype/PA165816544')
          .assert.not.elementPresent('.error-box')
          .assert.elementPresent('.resourceCounts')
          .assert.urlContains('/haplotype/')
          .assert.titleEquals('CYP2C9*3')
          .assert.textContains('div.tag', 'CPIC Gene')
          .assert.textContains('div.tag:nth-of-type(2)', 'PharmVar Gene');
        tab.testPrescribing(browser);
        tab.testDrugLabels(browser);
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        tab.testLiterature(browser);
        tab.testRelated(browser);
        tab.testAutomated(browser);
        tab.testLinks(browser);
        browser
          .url(browser.baseUrl + '/haplotype/PAbadid')
          .assert.titleEquals('PharmGKB')
          .assert.elementPresent('.error-box')
          .end();
    }
};
