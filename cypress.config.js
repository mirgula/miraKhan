const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },

    projectId: "5b9ps8",

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    baseUrl: "https://opensource-demo.orangehrmlive.com/",

    viewportHeight: 1080,
    viewportWidth: 1630,

    retries: {          // perform only when test case fail
      openMode: 2,      // npx cypress open ---> in terminal put / run cypress runner

      runMode: 1        // npx cypress run --spec cypress/e2e/tabs.js

    },

    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
    
  },

  reporter: 'mochawesome'


});
