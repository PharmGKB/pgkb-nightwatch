module.exports = {
  'PharmGKB Drug Class Overview Page test': function(browser) {
    browser.url(browser.launchUrl + '/chemical/PA133950441');

    browser.waitForElementVisible('.chemical-list-item a');
    browser.assert.title('hmg coa reductase inhibitors - Overview | PharmGKB');
    browser.expect.element('.resourceCounts').to.be.visible;

    browser.assert.containsText('.chemical-list-item', 'atorvastatin');
    browser.assert.containsText('.chemical-list-item:nth-of-type(3)', 'cerivastatin');

    browser.expect.element('ul.side-nav li:nth-child(4) a').text.to.equal('Clinical Annotations');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('ul.side-nav li:nth-child(4) a');
    browser.waitForElementVisible('div.rt-table');
    browser.expect.element('.rt-tbody').to.be.visible;
    browser.assert.title('hmg coa reductase inhibitors - Clinical Annotations | PharmGKB');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });


    browser.click('.rt-tr-group .row-color-warning div a');
    browser.waitForElementVisible('.clinical-annotation-detail');
    browser.assert.urlContains('/clinicalAnnotation/');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(this.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};
