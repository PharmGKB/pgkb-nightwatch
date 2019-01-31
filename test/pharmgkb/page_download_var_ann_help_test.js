module.exports = {
    'PharmGKB Download Variant Annotations Help Page test': function (browser) {
        browser.url(browser.launchUrl + '/page/downloadVariantAnnotationsHelp');

        browser.waitForElementVisible('.html-container');
        browser.assert.containsText('div.container h1', 'Variant Annotations Help File');
        browser.assert.containsText('.html-container', 'var_pheno_ann.tsv');
        browser.url(function (result) {
            browser.resizeWindow(1280, 800);
            browser.saveScreenshot(process.env.SCREENSHOT_PATH + '/' + result.value.substring(24) + '.png');
        });

        browser.end();
    }
};