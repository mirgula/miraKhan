/// <reference types="cypress" />


describe('practicing each method', () => {
    
it('Recruitment', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get('[name="username"]').type('Admin')           // username
         cy.get('[name="password"]').type('admin123')       //  password
         cy.get('[type="submit"]').click()                 //   Submit 
         
         cy.get('.oxd-main-menu li').each((x)=> {
            if (x.text().includes('Recruitment')) {
                cy.wrap(x).click()
            }
        })
            cy.get('.oxd-topbar-body-nav-tab').each((x)=>{
                if(x.text().includes('Candidates')) {
                    cy.wrap(x).click()
                }
            })
            cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Candidates")

cy.get('.oxd-topbar-body-nav-tab-item').each((x)=>{
    if(x.text().includes('Vacancies')) {
        cy.wrap(x).click()
    }
})
cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').invoke('text').as('temp')
cy.get('@temp').should("include","Vacancies")

})

//````````````````````````````````````````````````

it('Admin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get('[name="username"]').type('Admin')           
         cy.get('[name="password"]').type('admin123')       
         cy.get('[type="submit"]').click()                  

         cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').each((x)=>{
            if(x.text().includes("Admin")) {
                cy.wrap(x).click()
            }
         })

         cy.get('.oxd-topbar-body-nav-tab').each((x)=>{
            if(x.text().includes("Nationalities")) {
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Nationalities")


         cy.get('.oxd-topbar-body-nav-tab-item').each((x)=>{
            if(x.text().includes("Corporate Branding")) {
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Corporate Branding")        

});

//  ````````````````````````````````````````````````````````````

it.only('PIM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get('[name="username"]').type('Admin')          
         cy.get('[name="password"]').type('admin123')       
         cy.get('[type="submit"]').click()                 

         cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').each((x)=>{
            if(x.text().includes("PIM")) {
                cy.wrap(x).click()
            }
         })

         cy.get('.oxd-topbar-body-nav-tab-item').each((x)=>{
            if(x.text().includes("Employee List")) {
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Employee Information")


         cy.get('.oxd-topbar-body-nav-tab-item').each((x)=>{
            if(x.text().includes("Add Employee")) {
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('text').as('temp')
         cy.get('@temp').should("include","Add Employee")

         cy.get('.oxd-topbar-body-nav-tab-item').each((x)=>{
            if(x.text().includes('Reports')){
                cy.wrap(x).click()
            }
         })
         cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').invoke('text').as('temp')
         cy.get("@temp").should("include","Employee Reports")
})
})

