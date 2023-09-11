/// <reference types="cypress" />

describe('practicing uploads()', () => {
    
    it.only('upload file png or any file extention', () => {
    
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile("cypress/fixtures/cat.png")
        cy.get('#file-submit').click()
        cy.get('.example h3').should('have.text','File Uploaded!') // Full text mandatory
        cy.get('.example h3').invoke('text').should('include','Uploaded!') // partial only ok

    })
})