const helpers = require('../helpers');
module.exports = {
  'PharmGKB Drug-Gene Interaction Form Test': (browser) => {
    helpers.auth(browser);
    const path = '/edit/drug-gene';
    const ssPath = 'dgi';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.btn-drug-interaction-form')
      .assert.title('Drug-Gene Interactions | PharmGKB')
      .assert.urlContains('/drug-gene');
    helpers.screenshot(browser, `${ssPath}1`);

    browser
      .click('.btn-drug-interaction-form')
      .waitForElementPresent('.sourceDrug input')
      .assert.urlContains('/add')
      .setValue('.sourceDrug input', ['warfarin'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .setValue('.targetGene input', ['ABCB1'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .setValue('.geneRole input', ['Inhibitor'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .setValue('.clinicallyRelevant input', ['No'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .click('.btn.btn-primary');
    helpers.screenshot(browser, `${ssPath}2`);

    browser
      .waitForElementPresent('.btn-drug-interaction-form')
      .assert.title('Drug-Gene Interactions | PharmGKB');
    helpers.screenshot(browser, `${ssPath}3`);

    browser.end();
  }
};