const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Combination Page test': (browser) => {
        helpers.auth(browser);

        browser
          .url(browser.baseUrl + '/combination/PA451906,PA126')
          .assert.not.elementPresent('.error-box')
          .assert.elementPresent('.resourceCounts')
          .assert.urlContains('/combination/')
          .assert.titleEquals('CYP2C9 + warfarin')
        tab.testPrescribing(browser);
        tab.testDrugLabels(browser);
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        // tab.testLiterature(browser); TODO: disabled temporarily, until index is rebuilt
        // tab.testPathway(browser); TODO: disabled temporarily, until index is rebuilt
        // tab.testAutomated(browser);  TODO: disabled temporarily, until index is rebuilt
        browser
          .url(browser.baseUrl + '/combination/PA0,PA00')
          // this "bad ID" handling is different than the other pages
          .waitForElementPresent('div.errorDisplay')
          .assert.titleEquals('Combination PA0,PA00')
          .assert.elementPresent('div.alert-danger')
          .end();
    }
};
