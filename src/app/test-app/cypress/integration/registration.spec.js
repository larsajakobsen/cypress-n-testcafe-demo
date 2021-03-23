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

    cy.wait(1000);

    cy.get('.buttons input')
      .first()
      .click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/registration');
    });
  });

  it('Registration should show alert', () => {
    cy.wait(1000);

    cy.get('.person')
      .children('input')
      .eq('0')
      .type('Lars', {
        force: true,
        delay: 25,
      });

    cy.get('.person')
      .children('input')
      .eq('1')
      .type('Alexander', {
        force: true,
        delay: 25,
      });

    cy.get('.person')
      .children('input')
      .eq('2')
      .type('Jakobsen', {
        force: true,
        delay: 25,
      });

    cy.wait(1000);

    cy.get('#btn-submit').click();

    cy.intercept('GET', 'https://api.chucknorris.io/jokes/random', {
      value: 'Kjedelig vits...',
    });

    cy.get('.complete').should('be.visible');

    cy.get('.complete')
      .children('h1')
      .first()
      .should('contain', 'Kjedelig vits...');

    cy.wait(1000);
  });
});
