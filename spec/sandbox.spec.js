const { strictEqual } = require("assert");

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1");

    strictEqual(title, "Sandbox");
    strictEqual(header.getText(), "Sandbox");
  });
});
