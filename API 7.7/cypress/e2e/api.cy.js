describe("petsore user api", () => {
  const user = "Nephedov";
  const password = "password";
  const putBody = require("../fixtures/api.json");

  beforeEach("create new User", () => {
    cy.createUser(user, password);
  });

  afterEach("delete user", () => {
    cy.deleteUser(user, password);
  });

  it("should create user", () => {
    cy.request(`./${user}`).then((response) => {
      expect(response.body.username).to.eq(user);
    });
  });

  it("should update user", () => {
    cy.login(user, password);
    cy.request({
      method: "PUT",
      url: `/${user}`,
      body: putBody,
    });
    cy.request(`/${putBody.username}`).then((response) => {
      cy.log(response.body);
      expect(response.body.firstName).to.eq(putBody.firstName);
    });
  });
});
