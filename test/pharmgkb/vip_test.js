const helpers = require('../helpers');
module.exports = {
  'PharmGKB Home VIP test': (browser) => {
    const path = '/vip/PA166171172';
    
    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('#vip-main-text')
      .assert.title('Very Important Pharmacogene: ABCG2 | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('ul.side-nav > :nth-child(2) a')
      .waitForElementPresent('.icon')
      .assert.urlContains('/literature');
    helpers.screenshot(browser, `${path}-2`);

    browser.end();
  }
};
