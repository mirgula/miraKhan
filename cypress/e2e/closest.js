/// <reference types="cypress" />

describe('beforeEach hooks perform task inside with every it(/test cases)', () => { 
    beforeEach(() => {    
        cy.visit('/')
    
             cy.get('[name="username"]').type('Admin')           
             cy.get('[name="password"]').type('admin123')       
             cy.get('[type="submit"]').click()                
    });

            it.only('should do all the testing for Admin page',() => {

 //               cy.viewport(2080,2930) // overrigth change size of screen only for this--> it/test case
 
cy.get('[href="/web/index.php/leave/viewLeaveModule"]').closest('ul').should('have.class', 'oxd-main-menu')        

            })
        })








