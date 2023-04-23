Cypress.Commands.add(
  "createUser",
  (
    username = "",
    password = "",
    id = 0,
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    userStatus = 0
  ) => {
    cy.request({
      method: "POST",
      url: "/",
      body: {
          "id": id,
          "username": username,
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "phone": phone,
          "userStatus": userStatus,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add("login", (username, password) => {
  cy.request({
    url: `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("deleteUser", (username, password) => {
  cy.login(username, password);
  cy.request({
    method: "DELETE",
    url: `/${username}`,
  }).then((resp) => {
    expect(resp.status).to.eq(200);
  });
});
