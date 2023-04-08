const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        viewportHeight: 1600,
        viewportWidth: 720,
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
          // implement node event listeners here
        }
      }
});