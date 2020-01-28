exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    }
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000
  }
};
