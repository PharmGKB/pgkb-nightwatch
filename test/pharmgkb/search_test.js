const helpers = require('../helpers');
module.exports = {
  'PharmGKB Search Page test': (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .assert.title('PharmGKB')
      .waitForElementPresent('.animated-line');

    browser
      .setValue('.search-input', [' ', browser.Keys.ENTER])
      .waitForElementPresent('.results-list')
      .assert.urlContains('query=%20')
      .assert.containsText('.results-list', 'No results matched your query.');
    helpers.screenshot(browser, '/search-1');

    browser
      .setValue('.search-input', ['warf', browser.Keys.ENTER])
      .waitForElementPresent('.results-list')
      .assert.urlContains('query=warf')
      .assert.containsText('.results-list', 'results that have "warf" in the title')
      .waitForElementPresent('.chemical-list-item');
    helpers.screenshot(browser, '/search-2');

    browser
      .click('.chemical-list-item a')
      .waitForElementPresent('.chemicalStructure div img')
      .assert.urlContains('chemical')
      .assert.title('warfarin - Overview | PharmGKB');
    helpers.screenshot(browser, '/search-3');

    browser.end();
  }
};
