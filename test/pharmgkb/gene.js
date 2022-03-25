const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Gene Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/gene/PA356')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('.resourceCounts')
            .assert.urlContains('/gene/')
            .assert.titleEquals('TPMT')
        tab.testPrescribing(browser);
        tab.testDrugLabels(browser);
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        tab.testLiterature(browser);
        tab.testPathway(browser);
        browser
            .url(browser.baseUrl + '/gene/PAbadid')
            .assert.titleEquals('PharmGKB')
            .assert.elementPresent('.error-box')
            .end();
    }
};
