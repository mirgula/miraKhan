/// <reference types="cypress" />

describe('practicing uploads()', () => {
    
    it.only('upload file png or any other extention', () => {
    
        cy.visit('https://google.com')
 cy.get('#APjFqb').type('A')
// cy.contains('.G43f7e li','Amazon').click()
//cy.get('.G43f7e li').first().click()
cy.get('.G43f7e li').last().click()

    })
})
