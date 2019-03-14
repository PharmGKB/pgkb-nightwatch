const helpers = require('../helpers');
module.exports = {
  'PharmGKB Policy Page test': (browser) => {
    helpers.auth(browser);
    browser.url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .assert.title('PharmGKB');

    browser.click('.page-footer .row > :nth-child(2) > :nth-child(3)')
      .waitForElementPresent('.html-container p:nth-of-type(2)')
      .assert.urlContains('/policies')
      .assert.containsText('.html-container p:nth-of-type(1)', 'read the following policies');

    browser.click('.html-container > :nth-child(2) a')
      .assert.urlContains('/dataUsagePolicy')
      .waitForElementPresent('#terms-and-conditions-of-use')
      .assert.containsText('div.container h1', 'Data Usage Policy');

    helpers.screenshot(browser, '/policies');

    browser.end();
  }
};
