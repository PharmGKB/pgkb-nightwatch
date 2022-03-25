module.exports = {
    testPrescribing: (browser) => {
        browser.click('a.sideNavMenu__item--prescribingInfo')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('table.simpleTable')
            .assert.urlContains('prescribingInfo');
    },
    testDrugLabels: (browser) => {
        browser.click('a.sideNavMenu__item--drugLabelAnnotations')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('table.simpleTable')
            .assert.urlContains('labelAnnotation');
    },
    testClinicalAnnotations: (browser) => {
        browser.click('a.sideNavMenu__item--clinicalAnnotations')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('figure.caFigure')
            .assert.elementPresent('table.virtualizedTable')
            .assert.urlContains('clinicalAnnotation');
    },
    testVariantAnnotations: (browser) => {
        browser.click('a.sideNavMenu__item--variantAnnotations')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('figure.vaFigure')
            .assert.elementPresent('div.variantAnnotationsTable')
            .assert.urlContains('variantAnnotation');
    },
    testLiterature: (browser) => {
        browser.click('a.sideNavMenu__item--literature')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.searchableList')
            .assert.urlContains('literature');
    },
    testPathway: (browser) => {
        browser.click('a.sideNavMenu__item--pathways')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.searchableList')
            .assert.elementPresent('div.listItem__thumbnail img')
            .assert.urlContains('pathway');
    },
};
