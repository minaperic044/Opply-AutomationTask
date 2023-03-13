import testdata from '../fixtures/testdata.json'

describe("Log in and navigate to the Quotes Page", () => {
    before(function () {
        cy.visit("/");
        cy.get('.login-view').should("exist");
    })
    it("Verify User is able navigate to the Quotes Page and verify that the Quote card has displayed title and amount", () => {
        cy.login(testdata.email, testdata.password);

        cy.contains('Quotes').click();
        cy.get('.quotes-view').should("exist");

        cy.get(':nth-child(1) > .card-body > .card-title').should('have.text', 'Quote for Chocolate by Supplier of Oranges #84126')
        cy.get(':nth-child(1) > .card-body > .list-group-flush > :nth-child(1)').should('have.text', 'Amount: 95.00')
    })
})