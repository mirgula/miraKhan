/// <reference types="cypress" />

// describe('automation store application', () => {
    
//     it('should verify the url of the application', () => {
        
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy.get('[name="username"]').type('Admin')           // username
//         cy.get('[name="password"]').type('admin123')       //  password
//         cy.get('[type="submit"]').click()                                      // Submit
//         cy.xpath('//span[text()="Admin"]').click()                            // Admin
//         cy.get('[href="/web/index.php/time/viewTimeModule"]').click()        //  Time
//          cy.get('[href="/web/index.php/pim/viewPimModule"]').click()          //  PIM
//          cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()      //  Admin
//          cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click()    //   Leave
//          cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()  //   Recruitment 
//          cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click()          // My Info
// cy.get('a[href="/web/index.php/performance/viewPerformanceModule"]').click() //Performance
//         cy.get('a[href="/web/index.php/dashboard/index"]').click()          //  Dashboard
//         cy.get('a[href="/web/index.php/directory/viewDirectory"]').click()  // Directory
// // cy.get('a[href="/web/index.php/maintenance/viewMaintenanceModule"]').click() //Maintenance
//         cy.get('a[href="/web/index.php/claim/viewClaimModule"]').click()     // Claim
//         cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click()            //  Buzz

//         //  cy.url().should('include','dashboard')
//         //  cy.url().should('include','search')
//         //  cy.get('input[placeholder="Search"]').click()
//     });
// });
//  ````````````````````````````````````````````````````````````````````
    
     describe('automation store app', () => {
        it ('should verify the login of the app',()=>{
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.xpath("//input[@placeholder ='Username']").type('Admin')
    cy.xpath("//input[@placeholder='Password']").type('admin123')
    cy.xpath("//button[@type='submit']").click()

    cy.url().should('include','dashboard')

    cy.xpath("//span[text()='Admin']").click()
    cy.xpath("//h5[text()='System Users']").then((x) =>{
        const expected = "System Users"
        const actual = x.text()
        expect(expected).to.equal(actual)
    });
    cy.xpath("//span[text()='PIM']").click()
    cy.xpath("//span[text()='PIM']").then((fari) =>{
        const expected = "PIM"
        const actualfromthewebsite = fari.text()
        cy.log(actualfromthewebsite)
        expect(expected).to.equal(actualfromthewebsite)
    })
        cy.xpath("//h5[text()='Employee Information']").then((fari) =>{
            const expected = 'Employee Information'
            const actual = fari.text()
            cy.log(actual)
            expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='Leave']").click()
        cy.xpath("//h5[text()='Leave List']").then((fari) =>{
            const expected ='Leave List'
            const actual = fari.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='Time']").click()
        cy.xpath("//h6[text()='Select Employee']").then((fari) =>{
            const expected ='Select Employee'
            const actual = fari.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='Recruitment']").click()
        cy.xpath("//h5[text()='Candidates']").then((fari) =>{
            const expected = 'Candidates'
            const actual = fari.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='My Info']").click()
        cy.xpath("//h6[text()='Personal Details']").then((fari)=>{
            const expected = 'Personal Details'
            const actual = fari.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })  
        cy.xpath("//span[text()='Performance']").click()
        cy.xpath("//h5[text()='Employee Reviews']").then((fari)=>{
            const expected = 'Employee Reviews'
            const actual = fari.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='Dashboard']").click()
        cy.xpath("//p[text()='Time at Work']").then((param)=>{
            const expected = 'Time at Work'
            const actual = param.text()
        cy.log(actual)
            expect(expected).to.equal(actual)
    })
cy.xpath("//span[text()='Directory']").click()
cy.xpath("//h5[text()='Directory']").then((param)=>{
            const expected ='Directory'
            const actual = param.text()
        cy.log(actual)
        expect(expected).to.equal(actual)
    })
        cy.xpath("//span[text()='Claim']").click()
        cy.xpath("//h5[text()='Employee Claims']").then((param)=>{
            const expected = 'Employee Claims'
            const actual = param.text()
        cy.log(actual)
    })
 cy.xpath("//span[text()='Buzz']").click()
 cy.xpath("//a[text()='Buzz Newsfeed']").then((param)=>{
    const expected = 'Buzz Newsfeed'
    const actual = param.text()
cy.log(actual)
 })
cy.xpath("//span[text()='Maintenance']").click()

});
        });
