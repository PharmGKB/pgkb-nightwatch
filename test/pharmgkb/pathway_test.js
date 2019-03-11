const helpers = require('../helpers');
module.exports = {
  'PharmGKB Pathway Page test': (browser) => {
    const path = '/pathway/PA166104634';

    browser
      .url(browser.launchUrl + path)
      .waitForElementPresent('.pathwayDiagram img')
      .assert.urlContains('/pathway/')
      .assert.title('Abacavir Pathway, Pharmacokinetics/Pharmacodynamics Overview | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser.click('ul.side-nav > :nth-child(2) a')
      .waitForElementPresent('.fact-section:nth-of-type(1) .fact-section-content.show-not-available-when-empty:nth-of-type(1)')
      .assert.urlContains('/components');
    helpers.screenshot(browser, `${path}-2`);

    browser.click('.fact:nth-of-type(1) > .fact-content > .resource-links > :nth-child(4) a')
      .waitForElementPresent('ul.side-nav')
      .assert.urlContains('gene');
    helpers.screenshot(browser, `${path}-3`);

    browser.back();

    browser.waitForElementPresent('.table-inline')
      .assert.urlContains('components');

    browser.click('ul.side-nav > :nth-child(3) a')
      .waitForElementPresent('.searchableList')
      .assert.urlContains('/pathways');
    helpers.screenshot(browser, `${path}-4`);

    browser.click('.searchableList > :nth-child(2) a')
      .waitForElementPresent('.fact-section-content')
      .assert.urlContains('pathway/PA');
    helpers.screenshot(browser, `${path}-5`);

    browser.end();
  }
};
