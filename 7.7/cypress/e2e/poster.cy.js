describe("the main page should be visible", () => {
  it("days of the week and movies should be visible", () => {
    cy.visit("./");
    cy.fixture("selectors").then((el) => {
      cy.get(el.header).should("have.text", "Идёмвкино").should("be.visible");
      cy.get(el.listDays).should("have.length", "7").should("be.visible");
    });
  });
});
