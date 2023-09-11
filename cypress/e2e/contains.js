/// <reference types="cypress" />

describe('practicing contains()', () => {
    
    it.only('contains', () => {
    
    //    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //    cy.contains('Click fo JS Prompt').click()

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Forgot your password').click()

    })



    })
