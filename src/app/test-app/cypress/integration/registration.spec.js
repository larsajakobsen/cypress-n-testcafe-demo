describe('Login', () => {
  it('Should end up at registration', () => {
    cy.visit('http://localhost:8080');

    cy.wait(1000);

    cy.get('#email').type(Cypress.env('auth_username'), {
      force: true,
      delay: 25,
    });
    cy.get('#pass').type(Cypress.env('auth_password'), {
      force: true,
      delay: 25,
    });

    cy.get('.buttons input')
      .first()
      .click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/registration');
    });
  });
});
