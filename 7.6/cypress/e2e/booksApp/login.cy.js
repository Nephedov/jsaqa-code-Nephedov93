describe.only("Tests from lecture", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should open main page", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("successfully logins with the valid credentials", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("show error message on empty login", () => {
    cy.login(null, "test");
    cy.checkValidity("#mail", "false");
    cy.validationMessage("#mail", "Заполните это поле");
  });

  it("show error message on empty password", () => {
    cy.login("test@test.com", null);
    cy.checkValidity("#pass", "false");
    cy.validationMessage("#pass", "Заполните это поле");
  });
});
