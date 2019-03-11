const helpers = require('../helpers');
module.exports = {
  'PharmGKB Drug Label Page test': (browser) => {
    const path = '/labelAnnotation/PA166104782';
    
    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('.label-detail')
      .assert.title('Annotation of FDA Label for azathioprine and TPMT | PharmGKB')
      .assert.urlContains('/labelAnnotation/');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('.more-info-links div:nth-of-type(1) a')
      .windowHandles(function(result) {
        this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        this.switchWindow(result.value[1]);
      })
      .waitForElementVisible('div.panel-info')
      .assert.urlContains('fda.gov');

    browser.end();
  }
};