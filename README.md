# MercadoLibreTesting

Automated testing project using **CodeceptJS**, **Puppeteer**, **Gherkin**, **Page Object Model (POM)**, and **Allure Reports**.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

## Installation

Clone this repository: https://github.com/GoldTryck/MercadoLibreTesting

Move to the project directory:

```bash
cd MercadoLibreTesting
```


### Install Dependencies

```bash
npm install
```

## Usage

### Writing Tests with Gherkin

- Test scenarios are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/), making them easy to read and maintain.
- Feature files are located in the `features/` directory and use the `.feature` extension.
- Example Gherkin scenario:

    ```gherkin
    Feature: MercadoLibre Search

      Scenario: Search for a product
        Given I am on the MercadoLibre homepage
        When I search for "laptop"
        Then I should see a list of results
    ```

    ### Step Definitions Structure

    1. **Location**: Step definitions are stored in the `steps_definitions/` directory.
    2. **Mapping**: Each Gherkin step in a `.feature` file is mapped to a corresponding JavaScript function in the step definitions.
    3. **Usage**: Step definitions use CodeceptJS methods and page objects to perform actions and assertions.
    4. **Example**:

        ```js
        const { Given, When, Then } = require('codeceptjs');
        const HomePage = require('../pages/HomePage');

        Given('I am on the MercadoLibre homepage', async () => {
          await HomePage.open();
        });

        When('I search for {string}', async (product) => {
          await HomePage.search(product);
        });

        Then('I should see a list of results', async () => {
          await HomePage.seeResults();
        });
        ```

### Page Object Model (POM)

- The project uses the **Page Object Model** pattern to organize selectors and actions for each page.
- Page objects are stored in the `pages/` directory.
- Example usage in a step definition:

    ```js
    const HomePage = require('../pages/HomePage');

    Given('I am on the MercadoLibre homepage', async () => {
      await HomePage.open();
    });
    ```

## Running Features

```bash
npm run codeceptjs
```

## Generating Allure Reports

1. Run tests with Allure result output:

    ```bash
    npm run codeceptjs
    ```

2. Generate and serve the Allure report:

    ```bash
    npm run allure:report
    ```

## Configuration

- Test steps are written using **CodeceptJS** with the **Puppeteer** helper.
- Gherkin feature files define scenarios, which are mapped to step definitions.
- Page Object Model is used for reusable and maintainable code.
- Allure results and report are saved in the root directory.

## Useful Commands

- Run a specific tag:  
  `npx codeceptjs run --features --grep "@tag"`
- Run tests in headless mode:  
  `npx codeceptjs run --plugins allure --headless`
---

For more details, see the [CodeceptJS Documentation](https://codecept.io/), [Gherkin Reference](https://cucumber.io/docs/gherkin/), [Allure Documentation](https://docs.qameta.io/allure/), and [Page Object Model Guide](https://codecept.io/pageobjects/).