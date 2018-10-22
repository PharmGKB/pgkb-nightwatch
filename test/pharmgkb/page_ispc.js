module.exports = {
  'PharmGKB ISPC Page test': function (browser) {
    browser.url(browser.launchUrl + '/page/ispc');

    browser.waitForElementPresent('.static');
    browser.assert.containsText('div.container h1', 'ISPC - International SSRI Pharmacogenomics Consortium');
    browser.expect.element('#ispc-team').to.be.visible;
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};