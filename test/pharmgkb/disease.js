const helpers = require('../helpers');
module.exports = {
  'PharmGKB Disease Page test': (browser) => {
    helpers.auth(browser);
    const path = '/disease/PA443635';
    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('.counts')
      .assert.title('Cardiovascular Diseases - Overview | PharmGKB')
      .waitForElementVisible('.counts > a.count-link:nth-of-type(1)');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('.counts > a.count-link:nth-of-type(1)')
      .waitForElementVisible('.table-inline')
      .assert.urlContains('/clinicalAnnotation');
    helpers.screenshot(browser, `${path}-2`);

    browser.end();
  }
};