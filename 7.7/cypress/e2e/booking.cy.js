describe("booking to an available hall", () => {
  const { availableFilms, headerHall } = require("../fixtures/selectors.json");

  it("should book a ticket to an available hall for a free seat", () => {
    cy.login();
    cy.get(availableFilms)
      .parent()
      .siblings(headerHall)
      .then(($el) => {
        const hall = $el[0].textContent;
        cy.visit("./");
        cy.fixture("selectors").then((el) => {
          cy.changeToDay(7);
          cy.contains(hall).parent().find(el.availableSeances).click();
          cy.get(el.freeSeat).first().click();
          cy.get(el.freeSeat).first().click();
          cy.contains("Забронировать").click();
          cy.contains("Получить код бронирования").click();
          cy.get(el.qrCode).should("be.visible");
        });
      });
  });

  // const tests = require("../fixtures/booking.json");
  // for (let test of tests) {
  //   it(test.name, () => {
  //     cy.login();
  //     cy.get(availableFilms)
  //       .parent()
  //       .siblings(headerHall)
  //       .then(($el) => {
  //         const hall = $el[0].textContent;
  //         cy.visit("./");
  //         cy.fixture("selectors").then((el) => {
  //           cy.changeToDay(test.day);
  //           cy.contains(hall).parent().find(el.availableSeances).click();
  //           cy.get(
  //             `.buying-scheme__row:nth-of-type(${test.row})>.buying-scheme__chair:nth-of-type(${test.seat})`
  //           ).click();
  //           cy.contains("Забронировать").click();
  //           cy.contains("Получить код бронирования").click();
  //           cy.get(el.qrCode).should("be.visible");
  //         });
  //       });
  //   });
  // }

  /* Не стал добавлять этот тест, так как он хардкодит данные и при повторном запуске зафейлится.
       Хотел для себя убедиться, что правильно реализовал подход.
       */
});
