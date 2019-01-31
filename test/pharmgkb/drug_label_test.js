module.exports = {
  'PharmGKB Drug Label Page test': function (browser) {
    browser.url(browser.launchUrl + '/labelAnnotation/PA166104782');

    browser.waitForElementVisible('.label-detail');
    browser.assert.title('Annotation of FDA Label for azathioprine and TPMT | PharmGKB');
    browser.assert.urlContains('/labelAnnotation/');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('.more-info-links div:nth-of-type(1) a');

    browser.windowHandles(function(result) {
      var newWindow;
      this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
      newWindow = result.value[1];
      this.switchWindow(newWindow);
    });
    browser.waitForElementVisible('div.panel-info');
    browser.assert.urlContains('fda.gov');

    browser.end();
  }
};