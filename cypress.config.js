const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "f5enmw",
    chromeWebSecurity: false,
  },
});
