const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd418g3',
  e2e: {
    retries: 2,
    defaultCommandTimeout: 60 * 1000,
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
