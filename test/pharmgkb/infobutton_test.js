const helpers = require('../helpers');
module.exports = {
  'PharmGKB Infobutton test': function (browser) {
    browser.url('https://api.pharmgkb.org/v1/infobutton?mainSearchCriteria.v.c=11289')
      .assert.elementPresent('.testing-actionable-pgx')
      .waitForElementPresent('section h2')
      .assert.urlContains('infobutton');
    helpers.screenshot(browser, 'infobutton-output');

    browser
      .click('.testing-actionable-pgx a')
      .windowHandles(function(result) {
        this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        this.switchWindow(result.value[1]);
      })
      .assert.urlContains('/drugLabelLegend');
    
    browser.url('https://api.pharmgkb.org/infobutton.html')
      .assert.elementPresent('#pharmgkb-infobutton-service');
    helpers.screenshot(browser, 'infobutton-docs');

    browser.end();
  }
};
