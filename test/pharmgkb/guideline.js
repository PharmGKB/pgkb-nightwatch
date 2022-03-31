const helpers = require('../helpers');
module.exports = {
    'PharmGKB Guideline Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/guideline/PA166264281')
            .assert.not.elementPresent('.error-box')
            .assert.urlContains('/guideline/')
            .assert.title('CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins')
            .assert.elementPresent('h3.fact-section-header')
            .assert.textContains('h3.fact-section-header', 'Summary');

        // Publications tab
        browser.click('a.sideNavMenu__item--publication')
            .assert.not.elementPresent('.error-box')
            .assert.urlContains('/publications')
            .assert.elementPresent('div.publicationsTab');
        browser.expect.elements('div.publicationsTab h4.factLabel').count.to.equal(1);

        // Related tab
        browser.click('a.sideNavMenu__item--related')
            .assert.not.elementPresent('.error-box')
            .assert.urlContains('/related')
            .assert.elementPresent('div.sideNav__content');
        browser.expect.elements('div.fact-section h4.factLabel').count.to.equal(2);

        // History tab
        browser.click('a.sideNavMenu__item--history')
            .assert.not.elementPresent('.error-box')
            .assert.urlContains('/history')
            .assert.elementPresent('div.sideNav__content');

        browser.end();
    }
};