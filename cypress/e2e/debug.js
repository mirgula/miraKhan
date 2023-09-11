/// <reference types="cypress" />


describe('practicing debug method', () => {
    
    it('debug method', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')          
        cy.get('[name="password"]').type('admin123')       
        cy.get('[type="submit"]').click() 

        cy.get(':nth-child(1) > .oxd-main-menu-item').click().debug() // click Admin
        cy.get(':nth-child(2) > .oxd-input').type("Test") // Typing Test on the input Box
            

        })   

    })

