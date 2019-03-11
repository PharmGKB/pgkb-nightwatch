const helpers = require('../helpers');
module.exports = {
    'PharmGKB FAQs Page test': (browser) => {
        const path = '/page/faqs';
        browser
          .url(browser.launchUrl + path)
          .waitForElementPresent('.html-container');
        helpers.screenshot(browser, `${path}-1`);

        browser
          .click('.static ul:nth-child(3) li:nth-child(1) a')
          .assert.urlContains('#what-is-the-pharmgkb');
        helpers.screenshot(browser, `${path}-2`);


        browser
          .url(browser.launchUrl + '/page/faqs')
          .waitForElementPresent('.html-container')
          .click('.static ul:nth-child(5) li:nth-child(1) a')
          .assert.urlContains('#what-kinds-of-data-are-available-at-pharmgkb');
        helpers.screenshot(browser, `${path}-3`);

        browser.end();
    }
};
