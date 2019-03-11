const helpers = require('../helpers');
module.exports = {
  'PharmGKB Home Page test(Pathways)': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .click('.pathways a')
      .waitForElementPresent('.searchableList')
      .assert.urlContains('/pathways')
      .assert.containsText('.heading-title', 'CATEGORY');
    helpers.screenshot(browser, "/home-pathways-1");

    browser
      .click('.checkbox:last-of-type')
      .click('.searchableList .clickable:last-of-type')
      .waitForElementPresent('#pathway-summary')
      .assert.urlContains('/pathway/');
    helpers.screenshot(browser, "/home-pathways-2");

    browser.end();
  }
};
