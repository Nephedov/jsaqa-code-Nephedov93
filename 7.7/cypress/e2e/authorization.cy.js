const { email, password, configurations } = require("../fixtures/selectors");
const { valid, empty } = require("../fixtures/auth");

describe("admin authorization", () => {
  it("should login", () => {
    cy.login(valid.email, valid.password);
    cy.get(configurations).should("be.visible");
  });

  it("should be false validation with empty email", () => {
    cy.login(empty.email, valid.password);
    cy.get(email)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("should be false validation with empty password", () => {
    cy.login(valid.email, empty.password);
    cy.get(password)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
