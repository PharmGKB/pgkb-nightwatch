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
    testNamedAlleles: (browser) => {
        browser.click('a.sideNavMenu__item--namedAlleles')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('table.table--nonFluid')
            .assert.urlContains('haplotype');
    },
    testLiterature: (browser) => {
        browser.click('a.sideNavMenu__item--literature')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.searchableList')
            .assert.not.textContains('div.searchableList', 'No publications.')
            .assert.urlContains('literature');
    },
    testPathway: (browser) => {
        browser.click('a.sideNavMenu__item--pathways')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.searchableList')
            .assert.elementPresent('div.listItem__thumbnail img')
            .assert.urlContains('pathway');
    },
    testRelated: (browser) => {
        browser.click('a.sideNavMenu__item--relatedTo')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.resourceCounts')
            .assert.elementPresent('div.resultHit')
            .assert.urlContains('related');
    },
    testAutomated: (browser) => {
        browser.click('a.sideNavMenu__item--automatedAnnotations')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('section.nlp-set')
            .assert.elementPresent('div.nlp')
            .assert.urlContains('automatedAnnotation');
    },
    testLinks: (browser) => {
        browser.click('a.sideNavMenu__item--linksDownloads')
            .assert.not.elementPresent('.error-box')
            .assert.elementPresent('div.linksTab__xrefs')
            .assert.urlContains('/link');
    },
};
