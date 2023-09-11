/// <reference types="cypress" />


describe('practicing select method', () => {

    it('select method',() => {
        cy.visit('https://formstone.it/components/dropdown/demo/')

        cy.get('#demo_basic').select('Two',{force: true})
    })
    
    it('another url / dropdown list / select method', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        
        cy.get("#testingDropdown").select("Manual Testing")

    })

    it.only('dropdown list', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        
        cy.get('h3')

        cy.get('#dropdown').select('Option 1',{force: true})
        cy.get('#dropdown').select('Option 2',{force: true})

    })
})
