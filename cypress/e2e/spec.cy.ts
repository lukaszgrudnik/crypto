describe('The Home Page', () => {
    beforeEach(() => {
        // Assuming your React app renders the App component at the base URL
        // Adjust this to your app's base URL if it's different
        cy.visit('http://localhost:8080');
    });

    it('successfully loads', () => {
        cy.visit('http://localhost:8080'); // change URL to match your dev URL
    });

    it('should nav be visible and redirect to apps', () => {
        cy.get('[data-cy="app-nav-a-wallet"]')
            .should('have.text', 'Wallet')
            .should('have.attr', 'href', 'wallet')
            .click();

        cy.get('[data-cy="wallet"]').should('be.visible');

        cy.get('[data-cy="app-nav-a-market"]')
            .should('have.text', 'Market')
            .should('have.attr', 'href', 'market')
            .click();

        cy.get('[data-cy="market"]').should('be.visible');
    });
});
