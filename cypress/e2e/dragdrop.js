/// <reference types="cypress" />


describe('practicing drug and drop method', () => {
    
    it('drag method', () => {

        const dataTransfer = new DataTransfer() //This is object installed in Cypress and help to make drug&drop
    
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    
       cy.get('#column-a').trigger('dragstart',{dataTransfer})

       cy.get('#column-b').trigger('drop',{dataTransfer})




    })
})