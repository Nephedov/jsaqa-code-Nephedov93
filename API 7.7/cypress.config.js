const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8nkxm7",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/user",
  },
});
