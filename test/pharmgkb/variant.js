const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Variant Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/variant/PA166155468')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('.resourceCounts')
            .assert.urlContains('/variant/')
            .assert.titleEquals('rs12979860')

            // custom test for prescribing tab
            .click('a.sideNavMenu__item--prescribingInfo')
            .assert.not.elementPresent('.error-box')
            .assert.urlContains('prescribingInfo')
            .assert.textContains('h3.fact-section-header', 'Drug Label Annotations with Genotype-Based Prescribing Information');

        tab.testDrugLabels(browser);
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        tab.testNamedAlleles(browser);
        tab.testLiterature(browser);
        tab.testRelated(browser);
        tab.testAutomated(browser);
        tab.testLinks(browser);
        browser
            // check to make sure RSID redirect works
            .url(browser.baseUrl + '/rsid/rs12979860')
            .assert.urlEquals(browser.baseUrl + '/variant/PA166155468')
            // check bad ID handling
            .url(browser.baseUrl + '/variant/PAbadid')
            .assert.titleEquals('PharmGKB')
            .assert.elementPresent('.error-box')
            .end();
    }
};
