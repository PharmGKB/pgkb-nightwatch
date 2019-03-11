const helpers = require('../helpers');
module.exports = {
  'PharmGKB Download Page test': (browser) => {
    const path = '/downloads';

    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('div.downloads__card:nth-of-type(1)')
      .assert.urlContains('/downloads')
      .assert.title('Downloads | PharmGKB')
      .assert.containsText('.downloads__card:nth-of-type(1) .downloads__card_text ul li', 'annotations.zip')
      .assert.containsText('.downloads__card:nth-of-type(2) .downloads__card_text ul li', 'relationships.zip')
      .assert.containsText('div.row:nth-of-type(3) .downloads__card:nth-of-type(2) .downloads__card_text ul li', 'drugLabels.zip')
      .assert.containsText('div.downloads div section:nth-of-type(3) div.row .downloads__card_text ul li', 'genes.zip');
    helpers.screenshot(browser, path);

    browser.end();
  }
};