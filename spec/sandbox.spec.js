const { expect } = require("chai");

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1");

    expect(title).to.equal("Sandbox");
    expect(header.getText()).to.equal("Sandbox");
  });
});
