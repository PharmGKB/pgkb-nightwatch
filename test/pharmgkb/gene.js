const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Gene Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/gene/PA356')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('.resourceCounts')
            .assert.textContains('div.tag', 'CPIC Gene')
            .assert.urlContains('/gene/')
            .assert.titleEquals('TPMT')
        tab.testPrescribing(browser);
        tab.testDrugLabels(browser);
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        tab.testNamedAlleles(browser);
        // test to see if haplotype download button is present on named allele tab
        browser
            .assert.elementPresent('a.btn-outline-secondary');
        tab.testLiterature(browser);
        tab.testPathway(browser);
        tab.testRelated(browser);
        tab.testAutomated(browser);
        tab.testLinks(browser);
        browser
            .url(browser.baseUrl + '/hgnc/TPMT')
            .assert.urlEquals(browser.baseUrl + '/gene/PA356')
            .url(browser.baseUrl + '/gene/PAbadid')
            .assert.titleEquals('PharmGKB')
            .assert.elementPresent('.error-box')
            .end();
    }
};
