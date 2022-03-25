const helpers = require('../helpers');
module.exports = {
  'PharmGKB Labels List Page': (browser) => {
    helpers.auth(browser);
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .click('.labels a')
      .waitForElementPresent('.ReactTable')
      .assert.urlContains('/labelAnnotations')
      .assert.attributeContains('.label-status a', 'href', '/labelAnnotation/PA')
      .assert.attributeContains('.rt-tr-group:last-of-type a', 'href', '/chemical/PA');

    helpers.screenshot(browser, 'home-labels');
    browser.end();
  }
};
