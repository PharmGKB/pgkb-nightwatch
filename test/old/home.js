const helpers = require('../helpers');
module.exports = {
  'PharmGKB Home Page test': (browser) => {
    helpers.auth(browser);
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('.home-page')
      .assert.title('PharmGKB')
      .assert.elementPresent('.animated-line');
    helpers.screenshot(browser, `/home-1`);


    browser
      .click('.btn-success:nth-of-type(1)')
      .waitForElementPresent('.section-components')
      .assert.urlContains('/whatIsPharmacogenomics')
      .assert.title('What is Pharmacogenomics? | PharmGKB')
      .assert.elementPresent('.outreachSection:nth-of-type(1) > .outreachContent h3')
      .assert.containsText('.outreachSection:nth-of-type(1) > .outreachContent h3', 'Genetics 101');
    helpers.screenshot(browser, `/home-2`);

    browser
      .click('.outreachSection:nth-of-type(1) .outreachContent__text a[role="button"]')
      .waitForElementPresent('.outreachSection:nth-of-type(1) .rah-static')
      .assert.cssClassNotPresent('.outreachSection:nth-of-type(1) .rah-static div', 'display')
      .assert.containsText('.outreachSection:nth-of-type(1) .outreachContent', 'Humans have over 20,000 genes');
    helpers.screenshot(browser, `/home-3`);

    browser.back()
      .waitForElementPresent('#vips');
    helpers.screenshot(browser, `/home-4`);

    browser
      .click('#vips')
      .waitForElementPresent('.vip-list')
      .assert.urlContains('/vips');
    helpers.screenshot(browser, `/home-5`);

    browser.back()
      .click('.btn-info:nth-of-type(1)')
      .waitForElementPresent('.static')
      .assert.urlContains('/cancerPgx');
    helpers.screenshot(browser, `/home-6`);

    browser.end();
  }
};
