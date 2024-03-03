const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,  //wait 6 secs
  env :{
    url : "https://rahulshettyacademy.com",
    userId:"rahul",
    password: "pwd"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
