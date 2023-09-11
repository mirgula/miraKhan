/// <reference types="cypress" />


describe('practicing check method', () => {
    
    it('select method', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get('#checkboxes > :nth-chil(1)').check()

    })
})