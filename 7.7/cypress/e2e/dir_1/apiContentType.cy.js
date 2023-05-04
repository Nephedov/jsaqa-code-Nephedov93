describe("api content-type", () => {
    it("status ok on GET", () => {
        cy.request({
            method: "GET",
            url: "./"
        }).then((response) => {
            expect(response.headers['content-type']).to.eq("text/html; charset=UTF-8");
        });
    });
});