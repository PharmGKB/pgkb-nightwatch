const helpers = require('../helpers');
module.exports = {
  'PharmGKB Drug Class Overview Page test': (browser) => {
    helpers.auth(browser);
    const path = '/chemical/PA133950441';
    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('.chemical-list-item a')
      .assert.title('hmg coa reductase inhibitors - Overview | PharmGKB');
    browser.expect.element('.resourceCounts').to.be.visible;

    browser
      .assert.containsText('.chemical-list-item', 'atorvastatin')
      .assert.containsText('.chemical-list-item:nth-of-type(3)', 'cerivastatin');
    browser.expect.element('ul.side-nav li:nth-child(4) a').text.to.equal('Clinical Annotations');
    helpers.screenshot(browser, `${path}-class1`);

    browser
      .click('ul.side-nav li:nth-child(4) a')
      .waitForElementVisible('div.rt-table');
    browser.expect.element('.rt-tbody').to.be.visible;
    browser
      .assert.title('hmg coa reductase inhibitors - Clinical Annotations | PharmGKB');
    helpers.screenshot(browser, `${path}-class2`);


    browser
      .click('.rt-tr-group .row-color-warning div a')
      .waitForElementVisible('.clinical-annotation-detail')
      .assert.urlContains('/clinicalAnnotation/');
    helpers.screenshot(browser, `${path}-class3`);

    browser.end();
  }
};
