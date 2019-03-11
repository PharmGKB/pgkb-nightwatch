const helpers = require('../helpers');
module.exports = {
  'PharmGKB Home Page test(VIPs)': function (browser) {
    browser.url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .click('#vips')
      .waitForElementPresent('.vip-list-item:last-of-type')
      .assert.urlContains('/vips')
      .waitForElementPresent('.vip-list')
      .assert.attributeContains('.vip-list-item:first-of-type .vipList-litLink a', 'href','/literature/')
      .assert.attributeContains('.vip-list-item:first-of-type h5 a', 'href', '/vip/PA');
    helpers.screenshot(browser, '/home-vips');

    browser.end();
  }
};
