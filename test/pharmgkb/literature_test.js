const helpers = require('../helpers');
module.exports = {
  'PharmGKB Literature Page test': function (browser) {
    const path = '/literature/15096651';

    browser
      .url(browser.launchUrl + '/literature/15096651')
      .waitForElementVisible('.literature-detail')
      .assert.title('A multi-factorial analysis of response to warfarin in a UK prospective cohort. | PharmGKB')
      .assert.urlContains('/literature/')
      .waitForElementVisible('.compact-facts .fact:nth-of-type(1) a.resource-link');
    helpers.screenshot(browser, `${path}-1`);
    
    browser
      .moveToElement('.literature-detail .rt-td:nth-of-type(3)', 0, 10);
    helpers.screenshot(browser, `${path}-2`);

    browser
      .click('.compact-facts .fact:nth-of-type(1) a.resource-link')
      .waitForElementVisible('.chemicalStructure div img')
      .assert.urlContains('/chemical/');
    helpers.screenshot(browser, `${path}-3`);

    browser.end();
  }
};
