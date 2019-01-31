module.exports = {
  'PharmGKB Combination Page test': function (browser) {
    browser.url(browser.launchUrl + '/combination/PA451906,PA126');
    browser.waitForElementPresent('span.chemical_icon');
    browser.assert.urlContains(',PA');
    browser.assert.title('warfarin + CYP2C9 - Overview | PharmGKB');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('.fact:nth-of-type(2) > .fact-content a');
    browser.waitForElementPresent('.vip-link');
    browser.assert.urlContains('/gene/');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};