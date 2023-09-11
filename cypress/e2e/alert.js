/// <reference types="cypress" />


describe('practicing eq method', () => {
    
    it('How to click new tab:opening a new window', () => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:confirm', ()=>{ })
cy.get('#result').invoke('text').should('include', 'You successfully clicked an alert')

// ```````````````````````````````

cy.get('button[onclick="jsConfirm()"]').click()
cy.on('window:confirm', ()=>{
    return true
})
cy.get('#result').invoke('text').should('include', 'You clicked: Ok ')

cy.get('button[onclick="jsConfirm()"]').click()
cy.on('window:confirm', ()=>{
    return fauls
})
cy.get('#result').invoke('text').should('include', 'You clicked: Cancel ')

//``````````````````````````````


cy.get('#result').invoke('text').should('include', 'You clicked: Cancel ')



    })
})
