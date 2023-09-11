// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectCategory', (category) => {
    cy.contains('.oxd-main-menu li', category).click()
})

Cypress.Commands.add('Admin_products', (x) => {
    cy.contains('.oxd-topbar-body-nav li', x).click()
})

Cypress.Commands.add('PIM_products', (x) => {
    cy.contains('a.oxd-topbar-body-nav-tab-item', x).click()
})

Cypress.Commands.add('Leave_products', (x) => {
    cy.contains('.oxd-topbar-body-nav', x).click()
})

Cypress.Commands.add('time_products', (x) => {
    cy.contains('.oxd-topbar-body-nav', x).click()
})

Cypress.Commands.add('recruitment_products', (x) => {
    cy.contains('.oxd-topbar-body-nav-tab-item', x).click()
})



