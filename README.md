## Automation Task Overview

The automation task is implemented using Playwright with JavaScript. The automated tests cover the following scenarios:

1. Register User
2. Login User with correct email and password
3. Login User with incorrect email and password - TBD
4. Logout User
5. Register User with existing email
6. Verify Test Cases Page

## Installing Dependencies

Before running the tests, ensure you have Node.js installed.

1. **Install project dependencies**  
   ```bash
   npm install

2. **Install Playwright browsers**
   ```bash
   npx playwright install

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

**Tests run in parallel using 2 workers by default. To run tests sequentially, you can either:**
1. Add '--workers=1' in the command
2. Modify the playwright.config.js file to set workers: 1:
```js
workers: process.env.CI ? 2 : 1,
```

**By default the tests are run in headless mode. To change and run in headed you have two options:**
1. Add '--headed' in the command
2. Modify the playwright.config.js file to set headless: false:
```js
use: {
    headless: false,
     },
```

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
│   ├── login.spec.js
│   ├── logout.spec.js
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
