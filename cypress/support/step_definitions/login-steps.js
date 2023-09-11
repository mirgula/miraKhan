import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('I acess hr', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
When("I enter username {word}", (userName) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)

})
And("I enter password {word}", (password) => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
})
And("I should validate sucessfull login", () => {
    cy.get('.oxd-button').click()
    cy.url().should('include', 'dashboard')
})