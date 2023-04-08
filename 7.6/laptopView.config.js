const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        viewportHeight: 768,
        viewportWidth: 1366,
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
          // implement node event listeners here
        }
      }
});