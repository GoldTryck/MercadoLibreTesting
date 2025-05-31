exports.config = {
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://www.mercadolibre.com",
      show: false,
      windowSize: "1200x900",
      waitForNavigation: ["networkidle0", "domcontentloaded"],
      waitForAction: 2000,
      browserOptions: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  mocha: {
    retries: 2,
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/steps.js"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      resultsDir: "allure-results",
      require: "allure-codeceptjs",
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.js",
  name: "MercadoLibreTesting",
};