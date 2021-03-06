const helpers = require('../helpers');
module.exports = {
  'PharmGKB Guidelines List Page': (browser) => {
    helpers.auth(browser);
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page');

    browser
      .click('.dosing a')
      .waitForElementPresent('.ReactTable', 60000)
      .assert.urlContains('/guidelineAnnotations')
      .assert.attributeContains('.guidelineBox-icon:first-of-type a', 'href', '/guidelineAnnotation/PA')
      .assert.attributeContains('.rt-tr-group:nth-child(3) .guidelineBox-icon a', 'href', '/guidelineAnnotation/PA');
    helpers.screenshot(browser, '/home-dosing-guidelines');

    browser
      .click('.rt-tr-group:nth-child(4) .guidelineBox-icon a')
      .waitForElementPresent('.fact-section:last-of-type')
      .assert.urlContains('/guidelineAnnotation/PA');

    browser.end();
  }
};
