const helpers = require('../helpers');
module.exports = {
  'PharmGKB Dosing Guideline Page test': (browser) => {
    const path = '/guidelineAnnotation/PA166105006';
    browser
      .url(browser.launchUrl + path)
      .waitForElementVisible('.guideline-detail')
      .assert.urlContains('/guidelineAnnotation/')
      .assert.title('Annotation of CPIC Guideline for amitriptyline and CYP2C19,CYP2D6 | PharmGKB');
    helpers.screenshot(browser, `${path}-1`);

    browser
      .click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(1) option[value="No function"]')
      .click('.genotype-specific-annotations-picker:nth-of-type(1) > select:nth-of-type(2) option[value="Decreased function"]')
      .click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(1) option[value="No function"]')
      .click('.genotype-specific-annotations-picker:nth-of-type(2) > select:nth-of-type(2) option[value="Normal function"]')
      .waitForElementVisible('.genotype-specific-annotations-facts');
    helpers.screenshot(browser, `${path}-2`);

    browser
      .click('#guideline-annotation > div.fact-section-content:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) a')
      .windowHandles(function(result) {
        this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
        this.switchWindow(result.value[1]);
      })
      .waitForElementVisible('.post-story')
      .assert.urlContains('cpicpgx');
    helpers.screenshot(browser, `${path}-3`);

    browser.end();
  }
};
