require('env2')('.env'); // optionally store your environment variables in .env
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = process.env.SCREENSHOT_PATH || 'screenshots';

module.exports = {
  "src_folders": [
    "test/pharmgkb"
  ],
  "output_folder": "./node_modules/nightwatch/reports", // reports (test outcome) output by Nightwatch
  "webdriver": {
    "start_process": true,
    "server_path": chromedriver.path,
    "port": 9515,
  },
  "test_workers" : {"enabled" : true, "workers" : 3},
  "test_settings": {
    "default": {
      "launch_url": "https://www.pharmgkb.org",
      "globals": {
        "waitForConditionTimeout": 15000
      },
      "silent": true,
      "screenshots": {
        "enabled": true,
        "on_failure": true,
        "path": SCREENSHOT_PATH
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "headless"
          ]
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "local": {
      "launch_url": "https://localhost.pharmgkb.org:9999",
    },
    "fe-beta": {
      "launch_url": "https://next-beta.pharmgkb.org",
    }
  },
  SCREENSHOT_PATH,
};
