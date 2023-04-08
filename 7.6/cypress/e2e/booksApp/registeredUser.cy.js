beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
});

it("should add a book", () => {
  cy.get("button").contains("Add new").click();
  cy.get("#title").type("TestBook");
  cy.get("#description").type("TestDescription");
  cy.get("#authors").type("TestAuthor");
  cy.get("button").contains("Submit").click();
  cy.contains("TestBook").should("be.visible");
});

context("with checkbox to favorite", () => {
  it("should add a book to favorite", () => {
    cy.get("button").contains("Add new").click();
    cy.get("#title").type("TestFavoriteBook");
    cy.get("#description").type("TestFavoriteDescription");
    cy.get("#authors").type("TestFavoriteAuthor");
    cy.get("#favorite").check();
    cy.get("button").contains("Submit").click();
    cy.contains("Favorites").click();
    cy.get(".card-title").contains("TestFavoriteBook").should("be.visible");
  });
});

it("should logout", () => {
  cy.contains("Log out").click();
  cy.contains("Log in").should("be.visible");
  cy.contains("Добро пожаловать").should("not.exist");
});
