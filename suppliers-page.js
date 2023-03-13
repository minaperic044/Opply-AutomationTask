import testdata from '../fixtures/testdata.json'

describe("Verify User is navigated to the Suppliers page after Log in", () => {

    beforeEach(function () {
        cy.visit("/");
        cy.get('.login-view').should("exist");
        cy.login(testdata.email, testdata.password);
    })

    it("Log in and navigate to the Suppliers page", () => {
        cy.contains('Suppliers').click();
        cy.get('.suppliers-view').should("exist");
    })

    it("Verify User is able to open details about specific Supplier", () => {
        cy.get('.suppliers > :nth-child(1) > a').click();
        cy.contains('View Supplier').should("exist");
        cy.get('.single-supplier').should("exist");
    })
})