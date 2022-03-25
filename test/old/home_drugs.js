const helpers = require('../helpers');
module.exports = {
  'PharmGKB Home Page - Chemicals': (browser) => {
    helpers.auth(browser);
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .click('.drugs a')
      .waitForElementPresent('div.resource-list')
      .assert.urlContains('/annotatedDrugs')
      .assert.attributeContains('.letter-filter li:nth-of-type(20) a', 'href', '?t');
    helpers.screenshot(browser, 'home-chemicals-1');

    browser
      .click('.letter-filter li:nth-of-type(13) a')
      .waitForElementPresent('.pagination:first-of-type');
    helpers.screenshot(browser, 'home-chemicals-2');

    browser
      .click('.pagination__arrow a')
      .waitForElementPresent('.chemical-list-item a');
    helpers.screenshot(browser, 'home-chemicals-3');

    browser
      .click('.chemical-list-item:nth-of-type(2) a')
      .waitForElementPresent('.fact-section')
      .assert.urlContains('/chemical/');

    browser.end();
  }
};
