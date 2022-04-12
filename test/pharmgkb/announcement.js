const helpers = require('../helpers');

/**
 * Test that the tour banner appears at the top of the homepage, then once dismissed it stays dismissed even when
 * navigating to other pages.
 */
module.exports = {
    'Announcement dismiss test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl)
            .waitForElementVisible('.banner__close')
            .click('.banner__close')                        // dismiss the banner
            .waitForElementNotPresent('.banner')      // wait for the banner to go away
            .click('.stat.pathways')                        // go to the pathways list page
            .click('a.brand')                               // navigate back to homepage
            .assert.not.elementPresent('.banner')  // banner should not show again
            .click('.stat.pathways')                        // go to pathway list
            .click('.listItem__name__title a')              // go to the first pathway page
            .assert.elementPresent('.banner');     // this banner will show because there are multiple tour
                                                            // banners and this is a different one than the one that
                                                            // was dismissed
        browser.end();
    }
};
