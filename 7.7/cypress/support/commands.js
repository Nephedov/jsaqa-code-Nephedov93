// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
const { valid } = require("../fixtures/auth.json");
const {
  email,
  password,
  loginButton,
  adminPathUrl,
  listDays,
} = require("../fixtures/selectors.json");

Cypress.Commands.add("login", (log, pass) => {
  cy.visit(adminPathUrl);
  if (log || pass) {
    if (log) {
      cy.get(email).type(log);
    }
    if (pass) {
      cy.get(password).type(pass);
    }
  } else {
    cy.get(email).type(valid.email);
    cy.get(password).type(valid.password);
  }
  cy.get(loginButton).click();
});

Cypress.Commands.add("changeToDay", (day) => {
  if (day > 0) {
    cy.get(listDays)
      .eq(day - 1)
      .click();
  }
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
