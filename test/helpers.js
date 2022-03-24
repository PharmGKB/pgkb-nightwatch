const SCREENSHOT_PATH = browser.globals.screenshotPath || 'screenshots';
module.exports = {
  screenshot: (browser, path) => {
    browser.resizeWindow(1280, 800);
    browser.saveScreenshot(`${SCREENSHOT_PATH}/${path}.png`);
  },
  auth: (browser) => {
    // www doesn't need auth and don't re-auth
    if (browser.launchUrl.startsWith('https://www') || browser.didAuth) return;

    browser
        .url(browser.launchUrl)
        .waitForElementVisible('#email-2')
        .setValue('#email-2', browser.globals.pgkbUser)
        .setValue('#password-3', [browser.globals.pgkbPass, browser.Keys.ENTER])
        .waitForElementVisible('.about-ctn')
        .perform(() => {browser.didAuth = true});
  }
};
