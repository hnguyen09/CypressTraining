const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://webportal-staging.diag.vn',
    specPattern : 'cypress/API/**/*.cy.{js,jsx,ts,tsx}'
  },
});
