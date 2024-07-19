import { defineConfig } from "cypress";

export default defineConfig({  
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json"
},
  e2e: {
    baseUrl: "https://todo.qacart.com",
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    env: {
      
    }
  },
});
