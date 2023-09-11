/// <reference types="cypress" />


describe('beforeEach hooks perform task inside with every it(/test cases)', () => {
    
    beforeEach(() => {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
             cy.get('[name="username"]').type('Admin')           
             cy.get('[name="password"]').type('admin123')       
             cy.get('[type="submit"]').click()                
    })
            it('should do all the testing for admin page',() => {
                cy.contains('.oxd-main-menu li', 'Admin').click()
            });
            
            it('should do all the testing for leave page', () => {
                cy.contains('.oxd-main-menu li', 'Leave').click()
            });
})
