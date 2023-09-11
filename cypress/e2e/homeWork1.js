/// <reference types="cypress" />

describe('beforeEach hooks perform task inside with every it(/test cases)', () => {
    
    beforeEach(() => {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
             cy.get('[name="username"]').type('Admin')           
             cy.get('[name="password"]').type('admin123')       
             cy.get('[type="submit"]').click()                
    })
            it('Land on Admin search Chiku and verify',() => {
                cy.contains('.oxd-main-menu li', 'Admin').click()
    cy.get('i.oxd-icon.bi-pencil-fill').click()
    cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('Edit User').as('temp')
    cy.get('@temp').should('include', 'Edit User')
cy.get('div.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active').then((x)=>{
    const actualtext=x.text()
    const expectedtext='Paul Collings'
    expect(expectedtext).to.equal(actualtext)
    cy.log(actualtext)
})
    });
            
            it('Land on Pim add employee and verify', () => {
                cy.contains(':nth-child(2) > .oxd-main-menu-item', 'PIM').click()
                cy.get('i.oxd-icon.bi-plus.oxd-button-icon').click()
                cy.get('i.oxd-icon.bi-caret-down-fill').click()

    cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title').then((x)=>{
        const actualtext = x.text()
        const expectedtext = 'Add Employee'
        expect(expectedtext).to.equal(actualtext)
            cy.log(actualtext)   
    })
            });

            it('Click on Profile and verify support page', () => {
                cy.contains('.oxd-main-menu li', 'Leave').click()


            });
})
