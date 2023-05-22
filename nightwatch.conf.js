//
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//
module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test/pharmgkb'],

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://beta.pharmgkb.org',
      globals: {
        pgkbUser: '${PGKB_USER}',
        pgkbPass: '${PGKB_PASS}',
      },

      screenshots: {
        enabled: true,
        path: '${SCREENSHOT_PATH}' || 'screenshots',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    "local": {
      "launch_url": "https://localhost.pharmgkb.org:9999",
    },

    "www": {
      "launch_url": "https://www.pharmgkb.org",
    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: ['--headless']
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: 'node_modules/geckodriver/.bin/geckodriver'
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    edge: {
      desiredCapabilities : {
        browserName : 'MicrosoftEdge',
        'ms:edgeOptions' : {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using cucumber-js (https://cucumber.io)                |
    //                                                                               |
    // It uses the bundled examples inside the nightwatch examples folder; feel free |
    // to adapt this to your own project needs                                       |
    //////////////////////////////////////////////////////////////////////////////////
    'cucumber-js': {
      src_folders: ['examples/cucumber-js/features/step_definitions'],

      test_runner: {
        // set cucumber as the runner
        type: 'cucumber',

        // define cucumber specific options
        options: {
          //set the feature path
          feature_path: 'node_modules/nightwatch/examples/cucumber-js/*/*.feature',

          // start the webdriver session automatically (enabled by default)
          // auto_start_session: true

          // use parallel execution in Cucumber
          // parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
        }
      }
    },
  }
};
