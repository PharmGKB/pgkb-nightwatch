const helpers = require('../helpers');
module.exports = {
    'PharmGKB Variant Annotation Page test': (browser) => {
        helpers.auth(browser);

        browser
            .url(browser.baseUrl + '/variantAnnotation/1445362018')
            .assert.urlContains('/variantAnnotation/')
            .assert.title('Annotation of HLA-B*58:01')
            .assert.elementPresent('h4.variant-annotation-title')
            .assert.elementPresent('#evidence')
        browser.expect.elements('div.study-parameter').count.to.equal(2);
        browser
            .url(browser.baseUrl + '/variantAnnotation/0000')
            .assert.titleEquals('PharmGKB')
            .assert.elementPresent('.error-box')
            .end();
    }
};