import testdata from '../fixtures/testdata.json'

describe("Creating new account and log in", () => {
    beforeEach(function () {
        cy.visit("/");
        cy.get('.login-view').should("exist");
    })

    it("Verify User is able to go to the Signup page", () => {
        cy.contains('Signup here').click();
        cy.get('.signup-view').should("exist");
    })

    it("Verify User is able to succesfuly create an account", () => {
        cy.createAccount(testdata.name1, testdata.lastname1, testdata.email1, testdata.password1);
        cy.contains(' Signup ').click();
        cy.contains('Suppliers').should("exist");
    })

    it("Verify User is not able to create an account if he doesn't fill all the input fields", () => {
        cy.contains('Signup here').click();
        cy.get("#first-name").type(testdata.name);
        cy.get("#last-name").type(testdata.lastname);
        cy.contains(' Signup ').should('be.disabled');
    })

    it("Verify User is not able to create an account with existing email", () => {
        /*for now, on this app when user is not able to log in there is no any message why is that happening, 
        and that is the reason why I verified page view*/
        cy.createAccount(testdata.name, testdata.lastname, testdata.email, testdata.password);
        cy.contains(' Signup ').click();
        cy.get('.signup-view').should("exist");
    })

    it("Verify User is able to click on 'Login here' button at the Signup page", () => {
        cy.contains('Signup here').click();
        cy.contains('Login here').click();
        cy.get('.login-view').should("exist");
    })

    it("Verify User is able to log in with right credentials", () => {
        cy.login(testdata.email, testdata.password);
    })

    it("Verify User is not able to log in if he doesn't fill all the required fields", () => {
        cy.get('#user').type(testdata.email);
        cy.contains(' Login ').should('be.disabled');
    })

    it("Verify User is not able to log in with wrong credentials", () => {
        cy.get('#user').type(testdata.email);
        cy.get('#password').type(testdata.wrongpass);
        cy.get('.login-view').should("exist");
    })
})

