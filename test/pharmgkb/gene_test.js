module.exports = {
  'PharmGKB Gene Page test': function(browser) {
    browser.url(browser.launchUrl + '/gene/PA356');

    browser.waitForElementPresent('.fact-section-header');
    browser.assert.title('TPMT - Overview | PharmGKB');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('ul.side-nav > :nth-child(2) a');
    browser.waitForElementPresent('.facts-container > .fact-section:nth-of-type(2) h4');
    browser.assert.urlContains('/gene/PA356/guideline');
    browser.expect.element('.facts-container > .fact-section:nth-of-type(2) h3').text.to.equal('Rx Study Annotations');
    browser.verify.attributeContains('.literatureCitation a', 'href', '/literature/14775937');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('ul.side-nav > :last-child a');
    browser.waitForElementPresent('.link_tab__xrefs > :nth-child(1) a');
    browser.assert.urlContains('link');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('.link_tab__xrefs > :nth-child(9) a');
    browser.windowHandles(
      function(result) {
        var newWindow;
        this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        newWindow = result.value[1];
        this.switchWindow(newWindow);
      });
    browser.waitForElementPresent('h1.gene-symbol');
    browser.verify.title('TPMT gene symbol report | HUGO Gene Nomenclature Committee');
    browser.verify.urlContains('genenames');

    browser.end();
  }
};
