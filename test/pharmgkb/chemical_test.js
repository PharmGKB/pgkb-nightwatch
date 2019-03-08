const helpers = require('../helpers');
module.exports = {
  'PharmGKB Chemical Page test': (browser) => {
    const path = '/chemical/PA449088';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.chemicalStructure div img')
      .assert.urlContains('/chemical/')
      .assert.title('codeine - Overview | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('ul.side-nav > :nth-child(2) a')
      .waitForElementPresent('.collection-wrapper')
      .assert.urlContains('guideline');
    helpers.screenshot(browser, `${path}-2`);

    browser
      .click('.btn-primary:nth-of-type(1)')
      .waitForElementPresent('.genotype-specific-annotations-picker')
      .assert.urlContains('guidelineAnnotation/PA');
    helpers.screenshot(browser, `${path}-3`);

    browser
      .click('select:nth-of-type(1) option[value="Normal function"]')
      .click('select:nth-of-type(2) option[value="No function"]')
      .waitForElementVisible('.genotype-specific-annotations-facts .fact:nth-of-type(1) .fact-content')
      .assert.containsText('.genotype-specific-annotations-facts .fact:nth-of-type(1)', 'activity score');
    helpers.screenshot(browser, `${path}-4`);

    browser.end();
  }
};
