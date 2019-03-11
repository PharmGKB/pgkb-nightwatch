const helpers = require('../helpers');
module.exports = {
  'PharmGKB ISPC Page test': (browser) => {
    const path = '/page/ispc';
    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.static')
      .assert.containsText('div.container h1', 'ISPC - International SSRI Pharmacogenomics Consortium');
    browser.expect.element('#ispc-team').to.be.visible;
    helpers.screenshot(browser, path);

    browser.end();
  }
};
