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
            .click('.banner__close') // dismiss the banner
            .click('.stat.pathways') // go to the pathways list page
            .click('.listItem__name__title a'); // go to the first pathway page
        browser
            .expect.element('.banner__close').to.not.be.present; // the banner should not be there
        browser.end();
    }
};
