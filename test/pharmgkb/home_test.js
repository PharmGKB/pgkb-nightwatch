module.exports = {
  'PharmGKB Home Page test': function(browser) {
    browser.url(browser.launchUrl);

    browser.waitForElementPresent('.home-page');
    browser.assert.title('PharmGKB');
    browser.assert.elementPresent('.animated-line');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });


    browser.click('.btn-success:nth-of-type(1)');
    browser.waitForElementPresent('.section-components');
    browser.assert.urlContains('/whatIsPharmacogenomics');
    browser.assert.title('What is Pharmacogenomics? | PharmGKB');
    browser.assert.elementPresent('.outreachSection:nth-of-type(1) > .outreachContent h3');
    browser.assert.containsText('.outreachSection:nth-of-type(1) > .outreachContent h3', 'Genetics 101');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('.outreachSection:nth-of-type(1) .outreachContent__text a[role="button"]');
    browser.waitForElementPresent('.outreachSection:nth-of-type(1) .rah-static');
    browser.assert.cssClassNotPresent('.outreachSection:nth-of-type(1) .rah-static div', 'display');
    browser.assert.containsText('.outreachSection:nth-of-type(1) .outreachContent', 'Humans have over 20,000 genes');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.back();
    browser.waitForElementPresent('#vips');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.click('#vips');
    browser.waitForElementPresent('.container');
    browser.assert.urlContains('/vips');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.back();
    browser.click('.btn-info:nth-of-type(1)');
    browser.waitForElementPresent('.static');
    browser.assert.urlContains('/cancerPgx');
    browser.url(function (result) {
      browser.resizeWindow(1280, 800);
      browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
    });

    browser.end();
  }
};
