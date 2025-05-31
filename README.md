## Automation Task Overview

The automation task is implemented using Playwright with JavaScript. The automated tests cover the following scenarios:

1. Register User
2. Login User with correct email and password - TBD
3. Login User with incorrect email and password - TBD
4. Logout User - TBD
5. Register User with existing email
6. Verify Test Cases Page

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

**By default the tests are run in headless mode. To change and run in headed you have two options:**
1. Add '--headed' in the command
2. Modify the playwright.config.js file to set headless: false:
use: {
    headless: false,
  },

## Folder Structure

```
AutomationTask/            # Root directory
├── pageObject/            # Page Object Model files
│   ├── basePage.js
│   ├── loginPage.js
│   ├── signUpPage.js
│   └── testCasesPage.spec.js
├── fixtures/              # Custom Playwright fixtures
│   └── fixtures.js
├── data/                  # Test data files
│   └── testCasesList.json
├── tests/                 # Test specifications
│   ├── signUp.spec.js
│   └── testCases.spec.js
├── utils/                 # Utility functions
│   ├── logger.js
│   └── rndGenerator.js
├── .env                   # Environment variables (not committed)
├── .gitignore
├── package.json
├── playwright.config.js   # Playwright configuration
└── README.md
```


## This project uses a .env file to manage environment variables.
To set it up, please create a .env file in the root directory with the following content:
BASE_URL=https://www.automationexercise.com/
EMAIL=your-email
PASSWORD=your-password
