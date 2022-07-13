const helpers = require("../helpers");
module.exports = {
    'Announcement dismiss test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl)
            .click('a.stat.dosing')
            .waitForElementVisible('#guidelineAnnotationTable')
            .click('.guidelineItem__text a')
            .assert.urlContains('/guidelineAnnotation/PA')
            .assert.textContains('div.section:nth-of-type(4) > h3', 'Annotation')
            .back()
            .sendKeys('input[name=drug]', 'amikacin')
            .assert.elementPresent('.guidelineItem.CPIC')
            .assert.not.elementPresent('.guidelineItem.DPWG')
        ;
        browser.end();
    }
};
