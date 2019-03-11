const helpers = require('../helpers');
module.exports = {
  'PharmGKB Haplotype Page test': function (browser) {
    const path = '/haplotype/PA165816577';
    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('span.resource-header-item span.haplotype_icon')
      .assert.containsText('span.resource-name', 'CYP2D6*2')
      .assert.title('CYP2D6*2 - Overview | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('ul.side-nav > :nth-child(6) a')
      .waitForElementVisible('div.related-set')
      .assert.urlContains('related');
    helpers.screenshot(browser, `${path}-2`);

    browser.end();
  }
};
