/// <reference types="cypress" />


describe('practicing eq method', () => {
    
    it('eq method', () => {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
             cy.get('[name="username"]').type('Admin')          
             cy.get('[name="password"]').type('admin123')       
             cy.get('[type="submit"]').click()     
             
             cy.get('.oxd-main-menu li').eq(7).click() // eq() method

             cy.get('.oxd-main-menu li').eq(0).click()

             cy.xpath("//h5[text()='System Users']").then((x) =>{  // assertion promisess
        const expected = "System Users"
        const actual = x.text()
        expect(expected).to.equal(actual)
    })

        cy.get('.oxd-topbar-body-nav-tab').each((x)=>{  // each() method
            if(x.text().includes("Nationalities")) {
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Nationalities")    // assertion with invoke()





        
    });
});