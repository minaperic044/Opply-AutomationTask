import testdata from '../fixtures/testdata.json'

describe("Verify User is able navigate to the Home Page", () => {
    before(function () {
        cy.visit("/");
        cy.get('.login-view').should("exist");
    })

    it("Log in and navigate to the Home Page", () => {
        cy.login(testdata.email, testdata.password);
        cy.contains('Home').click();
        cy.contains('Welcome to the Opply Assignment').should("exist");
    })
})
