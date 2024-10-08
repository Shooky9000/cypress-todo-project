import { defineConfig } from "cypress";

export default defineConfig({  
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json"
    },
    videoCompression: 15,
  e2e: {
    baseUrl: "https://todo.qacart.com",
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      
    }
  },
});
