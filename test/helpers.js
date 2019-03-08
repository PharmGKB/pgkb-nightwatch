module.exports = {
  screenshot: (browser, path) => {
    browser.resizeWindow(1280, 800);
    browser.saveScreenshot(`${process.env.SCREENSHOT_PATH}/${path}.png`);
  },
};
