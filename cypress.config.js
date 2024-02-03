const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    requestTimeout: 20000,
    defaultCommandTimeout: 20000,
    baseUrl: "https://notes-serverless-app.com",
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
