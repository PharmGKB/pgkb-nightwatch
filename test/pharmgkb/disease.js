const helpers = require('../helpers');
const tab = require('../tab_tester');
module.exports = {
    'PharmGKB Disease Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/disease/PA443635')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('.resourceCounts')
            .assert.urlContains('/disease/')
            .assert.titleEquals('Cardiovascular Diseases')
        tab.testClinicalAnnotations(browser);
        tab.testVariantAnnotations(browser);
        tab.testLiterature(browser);
        tab.testPathway(browser);
        tab.testRelated(browser);
        tab.testLinks(browser);
        browser
            .url(browser.baseUrl + '/disease/PAbadid')
            .assert.titleEquals('PharmGKB')
            .assert.elementPresent('.error-box')
            .end();
    }
};
