import testdata from '../fixtures/testdata.json'

describe("Log out", () => {
    before(function () {
        cy.visit("/");
        cy.get('.login-view').should("exist");
    })
    it("Verify User is able to Log out", () => {
        cy.login(testdata.email, testdata.password);
        cy.contains('Logout').click();

        cy.get('.login-view').should("exist");
    })
})