## Automation Task Overview

The automation task is implemented using Playwright with JavaScript. The automated tests cover the following scenarios:

1. ...
2. ...
3. ...
4. ...
5. ...

## Running the Tests

You have several options to run the tests:

1. **Run all tests**: 
   ```bash
   npx playwright test
   ```

2. **Run a specific test file**: 
   ```bash
   npx playwright test <name_of_spec_file>
   ```

3. **Run tests by tag**: 
   ```bash
   npx playwright test --grep '@tag_name'
   ```

**By default the tests are run in headless mode. To change and tun in headed you have two options:**
1. Add '--headed' in the command
2. Modify the playwright.config.js file to set headless: false:
use: {
    headless: false,
  },

## Folder Structure
AutomationTask/
├── pageObject/           # Page Object Model files
│   └── testCasesPage.spec.js
├── fixtures/             # Custom Playwright fixtures
│   └── fixtures.js
├── data/                 # Test data files (e.g., JSON)
│   └── testCasesList.json
├── tests/                # Test specifications
│   └── testCasesPage.spec.js
├── utils/                # Utility functions and helpers
│   └── logger.js
├── .env                  # Environment variables (not committed)
├── .gitignore
├── playwright.config.js  # Playwright configuration
├── package.json
└── README.md

## This project uses a .env file to manage environment variables.
To set it up, please create a .env file in the root directory with the following content:
BASE_URL=https://your-testing-url.com
USERNAME=your-username
PASSWORD=your-password