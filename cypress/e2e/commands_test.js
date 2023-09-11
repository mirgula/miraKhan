/// <reference types="cypress" />

describe('beforeEach hooks perform task inside with every it(/test cases)', () => { 
    beforeEach(() => {    
        cy.visit('/')
    
             cy.get('[name="username"]').type('Admin')           
             cy.get('[name="password"]').type('admin123')       
             cy.get('[type="submit"]').click()                
    });

            it.only('should do all the testing for Admin page',() => {

                cy.viewport(2080,2930) // overrigth change size of screen only for this--> it/test case

                

                cy.selectCategory('Admin')    // custom command

                cy.Admin_products('Nationalities')        // custom command
                cy.Admin_products('Corporate Branding')

    });
            it.only('should do all the testing for PIM page',() => {
                cy.selectCategory('PIM')

                cy.PIM_products('Employee List')
                cy.PIM_products('Add Employee')
                cy.PIM_products('Reports')

    });

    it('should do all the testing for Leave page',() => {
        cy.selectCategory('Leave')

        cy.Leave_products('Apply')
/*        cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').then((x)=>{  // assertion
            const actualtext=x.text()
            const expectedtext='Apply Leave'
            expect(expectedtext).to.equal(actualtext)
            cy.log(actualtext)
*/        
    //    cy.Leave_products('My Leave ')
        cy.Leave_products('Leave List')
        cy.Leave_products('Assign Leave')
        
    });

    it('should do all the testing for Time page',() => {
        cy.selectCategory('Time')
        
});

it('should do all the testing for Recruitment page',() => {
    cy.selectCategory('Recruitment')

    cy.recruitment_products('Candidates')

    cy.xpath("//h5[text()='Candidates']").then((x) =>{  //Assertion
            const expected = 'Candidates'
            const actual = x.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
})

    cy.recruitment_products('Vacancies')

    cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').then((y) =>{
            const expected = 'Vacancies'
            const actual = y.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
})
    //    cy.get('.oxd-label').select('.oxd-select-text-input')


    
});

it('should do all the testing for My Info page',() => {
    cy.selectCategory('My Info')

    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click({ multiple: true })
    
});

})



