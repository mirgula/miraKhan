/// <reference types="cypress" />


describe('practicing eq method', () => {
    
    it('How to click new tab:opening a new window', () => {
    
        cy.visit('https://the-internet.herokuapp.com/windows')
    
            cy.get('.example').invoke('removeAttr','target').click()

/* In order to handle multiple tabs I will use invoke method
  to remove target attribute so that it can open on the same page -->
  --> : how to click button 'Click Here'for opening a new window in app
   by automation Robot */
             

    })
})