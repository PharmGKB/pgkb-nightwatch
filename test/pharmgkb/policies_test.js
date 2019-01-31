module.exports = {
  'PharmGKB Policy Page test': function(browser) {
    browser.url(browser.launchUrl);

    browser.waitForElementPresent('.home-page');
    browser.assert.title('PharmGKB');

    browser.click('.page-footer .row > :nth-child(2) > :nth-child(3)');
    browser.waitForElementPresent('.html-container p:nth-of-type(2)');
    browser.assert.urlContains('/policies');
    browser.assert.containsText('.html-container p:nth-of-type(1)', 'read the following policies');

    browser.click('.html-container > :nth-child(2) a');
    browser.assert.urlContains('/dataUsagePolicy');
    browser.waitForElementPresent('#terms-and-conditions-of-use');
    browser.assert.containsText('div.container h1', 'Data Usage Policy');

    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};
