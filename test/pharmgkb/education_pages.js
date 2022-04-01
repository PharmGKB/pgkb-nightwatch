const helpers = require('../helpers');
module.exports = {
    'PharmGKB Variant Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl)
            .assert.not.elementPresent('.error-box')
            .click('.what-is a.link.btn')
            .assert.urlContains('whatIsPharmacogenomics')
            .assert.not.elementPresent('.error-box')
            .assert.textContains('.outreachSection button.btn-link', 'More')
            .assert.not.visible('.outreachContent .rah-static div')
            .click('.outreachSection button.btn-link')
            .assert.textContains('.outreachSection button.btn-link', 'Less')
            .assert.visible('.outreachContent .rah-static div')

            .click('.sideNavMenu__item:nth-of-type(2)')
            .assert.not.elementPresent('.error-box')
            .assert.textContains('.outreachSection button.btn-link', 'More')
            .assert.not.visible('.outreachContent .rah-static div')
            .click('.outreachSection button.btn-link')
            .assert.textContains('.outreachSection button.btn-link', 'Less')
            .assert.visible('.outreachContent .rah-static div')
            .assert.not.visible('.question .rah-static div')
            .click('.question h5')
            .assert.visible('.question .rah-static div')

            .click('.sideNavMenu__item:nth-of-type(3)')
            .assert.not.elementPresent('.error-box')
            .assert.textContains('.outreachSection button.btn-link', 'More')
            .assert.not.visible('.outreachContent .rah-static div')
            .click('.outreachSection button.btn-link')
            .assert.textContains('.outreachSection button.btn-link', 'Less')
            .assert.visible('.outreachContent .rah-static div')
            .assert.not.visible('.question .rah-static div')
            .click('.question h5')
            .assert.visible('.question .rah-static div')

            .click('.sideNavMenu__item:nth-of-type(4)')
            .assert.not.elementPresent('.error-box')
            .assert.textContains('.outreachSection button.btn-link', 'More')
            .assert.not.visible('.outreachContent .rah-static div')
            .click('.outreachSection button.btn-link')
            .assert.textContains('.outreachSection button.btn-link', 'Less')
            .assert.visible('.outreachContent .rah-static div')

            .click('a.brand')
            .click('.about a.link.btn')
            .assert.urlContains('whatIsPharmgkb')
            .assert.not.elementPresent('.error-box')

            .click('.sideNavMenu__item:nth-of-type(2)')
            .assert.not.elementPresent('.error-box')
            .click('.sideNavMenu__item:nth-of-type(3)')
            .assert.not.elementPresent('.error-box')
            .click('.sideNavMenu__item:nth-of-type(4)')
            .assert.not.elementPresent('.error-box')
            .click('.sideNavMenu__item:nth-of-type(5)')
            .assert.not.elementPresent('.error-box')
            .click('.sideNavMenu__item:nth-of-type(6)')
            .assert.not.elementPresent('.error-box')
            .end;
    }
};
