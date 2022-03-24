const helpers = require('../helpers');
module.exports = {
  'PharmGKB Drug-Drug Interaction Form Test': (browser) => {
    helpers.auth(browser);
    const path = '/edit/drug-drug';
    const ssPath = 'ddi';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.btn-drug-interaction-form')
      .assert.title('Drug-Drug Interactions | PharmGKB')
      .assert.urlContains('/drug-drug');
    helpers.screenshot(browser, `${ssPath}1`);

    browser
      .click('.btn-drug-interaction-form')
      .waitForElementPresent('.sourceDrug input')
      .assert.urlContains('/add')
      .setValue('.sourceDrug input', ['warfarin'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .setValue('.targetDrug input', ['abacavir'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .setValue('.clinicallyRelevant input', ['no'])
      .waitForElementPresent('[id^=react-select][id*=-option-]')
      .keys(browser.Keys.ENTER)
      .click('.btn.btn-primary');
    helpers.screenshot(browser, `${ssPath}2`);

    browser
      .waitForElementPresent('.btn-drug-interaction-form')
      .assert.title('Drug-Drug Interactions | PharmGKB');
    helpers.screenshot(browser, `${ssPath}3`);

    browser.end();
  }
};