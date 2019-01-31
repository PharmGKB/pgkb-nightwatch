module.exports = {
  'PharmGKB Home VIP test': function (browser) {
    browser.url(browser.launchUrl + '/vip/PA166171172');

    browser.waitForElementPresent('#vip-main-text');
    browser.assert.title('Very Important Pharmacogene: ABCG2 | PharmGKB');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('ul.side-nav > :nth-child(2) a');
    browser.waitForElementPresent('.icon');
    browser.assert.urlContains('/literature');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};
