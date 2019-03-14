const helpers = require('../helpers');
module.exports = {
  'PharmGKB Gene Page test': (browser) => {
    helpers.auth(browser);
    const path = '/gene/PA356';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.fact-section-header')
      .assert.title('TPMT - Overview | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('ul.side-nav > :nth-child(2) a')
      .waitForElementPresent('.facts-container > .fact-section:nth-of-type(2) h4')
      .assert.urlContains('/gene/PA356/guideline')
      .assert.containsText('.facts-container > .fact-section:nth-of-type(2) h3', 'Rx Study Annotations')
      .verify.attributeContains('.literatureCitation a', 'href', '/literature/14775937');
    helpers.screenshot(browser, `${path}-2`);

    browser
      .click('ul.side-nav > :last-child a')
      .waitForElementPresent('.link_tab__xrefs > :nth-child(1) a')
      .assert.urlContains('link');
    helpers.screenshot(browser, `${path}-3`);

    browser
      .click('.link_tab__xrefs > :nth-child(9) a')
      .windowHandles(
        (result) => {
          browser.verify.equal(result.value.length, 2, 'There should be 2 windows open');
          browser.switchWindow(result.value[1]);
        })
      .waitForElementPresent('h1.gene-symbol')
      .verify.title('TPMT gene symbol report | HUGO Gene Nomenclature Committee')
      .verify.urlContains('genenames');

    browser.end();
  }
};
