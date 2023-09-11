/// <reference types="cypress" />


describe('practicing navigation', () => {
    
    it('How to navigate goback, goforward', () => {
    
        cy.visit('https://the-internet.herokuapp.com/windows')
    
            cy.get('.example > a').invoke('removeAttr','target').click()
            cy.url().should('include', 'new')
            cy.go('back')
            cy.get('.example h3').invoke('text').should('include', 'Opening a new window')
            cy.go('forward')
            cy.reload()
            
    })
})