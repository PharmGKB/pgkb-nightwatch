const helpers = require('../helpers');
module.exports = {
  'PharmGKB Download Variant Annotations Help Page test': (browser) => {
    helpers.auth(browser);
    browser
      .url(browser.launchUrl + '/page/downloadVariantAnnotationsHelp')
      .waitForElementVisible('.html-container')
      .assert.containsText('div.container h1', 'Variant Annotations Help File')
      .assert.containsText('.html-container', 'var_pheno_ann.tsv');
    helpers.screenshot(browser, '/varAnnHelp');

    browser.end();
  }
};
