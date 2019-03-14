module.exports = {
  screenshot: (browser, path) => {
    browser.resizeWindow(1280, 800);
    browser.saveScreenshot(`${process.env.SCREENSHOT_PATH}/${path}.png`);
  },
  auth: (browser) => {
    // www doesn't need auth and don't re-auth
    if (browser.launchUrl.startsWith('https://www') || browser.didAuth) return;

    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#email')
      .setValue('#email', process.env.PGKB_USER)
      .setValue('#password', [process.env.PGKB_PASS, browser.Keys.ENTER])
      .waitForElementVisible('.about-ctn')
      .perform(() => {browser.didAuth = true});
  }
};
