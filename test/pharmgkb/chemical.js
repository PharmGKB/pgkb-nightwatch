const helpers = require('../helpers');
module.exports = {
  'PharmGKB Chemical Page test': (browser) => {
    helpers.auth(browser);

    browser
        .url(browser.baseUrl + '/chemical/PA449088')
        .waitForElementPresent('.chemicalStructure div img')
        .assert.urlContains('/chemical/')
        .assert.titleEquals('codeine')
        .saveScreenshot(`screenshots/chemical-overview.png`)
        .click('a.sideNavMenu__item--prescribingInfo')
        .waitForElementPresent('table.simpleTable')
        .saveScreenshot(`screenshots/chemical-prescribingInfo.png`)
        .assert.urlContains('prescribingInfo')
        .click('.btn-primary:nth-of-type(1)')
        .assert.urlContains('guidelineAnnotation/PA')
        .assert.textContains('h3', 'Annotation of CPIC Guideline for codeine')
        .saveScreenshot(`screenshots/chemical-guidelineAnnotation.png`)
        .end();
  }
};
