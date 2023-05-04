describe("api status", () => {
    it("status ok on GET", () => {
        cy.request({
            method: "GET",
            url: "./"
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});