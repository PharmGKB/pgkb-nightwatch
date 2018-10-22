module.exports = {
  'PharmGKB Download Page test': function (browser) {
    browser.url(browser.launchUrl + '/downloads');

    browser.waitForElementVisible('div.downloads__card:nth-of-type(1)');
    browser.assert.urlContains('/downloads');
    browser.assert.title('Downloads | PharmGKB');
    browser.assert.containsText('.downloads__card:nth-of-type(1) .downloads__card_text ul li', 'annotations.zip');
    browser.assert.containsText('.downloads__card:nth-of-type(2) .downloads__card_text ul li', 'relationships.zip');
    browser.assert.containsText('div.row:nth-of-type(3) .downloads__card:nth-of-type(2) .downloads__card_text ul li', 'drugLabels.zip');
    browser.assert.containsText('section:nth-of-type(2) div.row:nth-of-type(2) .downloads__card:nth-of-type(1) .downloads__card_text ul li', 'genes.zip');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};