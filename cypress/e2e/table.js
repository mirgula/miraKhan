/// <reference types="cypress" />

describe('practicing table, contains,filter,each() works as Loop for', () => {
    
    it.only('table', () => {
    
        cy.visit('https://tablepress.org/demo/')

// cy.get('#tablepress-demo tbody tr td').filter('Average').should('contain', '0.3')

 cy.contains('#tablepress-demo tbody tr td', 'Gloria').should('have.text', 'Gloria')

 cy.contains('#tablepress-demo tbody tr td', 'Zena').should('have.text', 'Zena')

 cy.contains('#tablepress-demo tbody tr td', 'Hale').should('have.text', 'Hale')

 cy.get('#tablepress-demo tbody tr td').first().should('contain', 'Gloria')
 cy.get('#tablepress-demo tbody tr td').last().should('contain', '$20')


    })

})








