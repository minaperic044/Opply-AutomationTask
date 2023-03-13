const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://main--vermillion-queijadas-1f4ca3.netlify.app/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}"
  },
});
