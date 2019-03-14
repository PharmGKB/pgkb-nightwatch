const helpers = require('../helpers');
module.exports = {
  'PharmGKB Combination Page test': (browser) => {
    helpers.auth(browser);
    const path = '/combination/PA451906,PA126';
    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('span.chemical_icon')
      .assert.urlContains(',PA')
      .assert.title('warfarin + CYP2C9 - Overview | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .waitForElementPresent('.fact:nth-of-type(2) > .fact-content a')
      .click('.fact:nth-of-type(2) > .fact-content a')
      .waitForElementPresent('.vip-link')
      .assert.urlContains('/gene/');
    helpers.screenshot(browser, `${path}-2`);

    browser.end();
  }
};