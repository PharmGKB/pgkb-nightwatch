const helpers = require('../helpers');
module.exports = {
  'PharmGKB Variant Page test': (browser) => {
    const path = '/variant/PA166157537';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.facts-container')
      .assert.urlContains('/variant/PA')
      .assert.title('rs267606723 - Overview | PharmGKB');
    helpers.screenshot(browser, `/${path}-1`);

    browser
      .click('ul.side-nav li:nth-of-type(3) a')
      .waitForElementPresent('div.ReactTable')
      .assert.urlContains('/variantAnnotation');
    helpers.screenshot(browser, `/${path}-2`);

    browser
      .click('.rt-tr-group div.rt-td a')
      .assert.urlContains('/variant/PA')
      .assert.urlContains('/variantAnnotation/');

    browser.end();
  }
};
