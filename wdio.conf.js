const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
  },
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
