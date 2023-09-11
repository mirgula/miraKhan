import hr from "../support/pom/loginpage"
import srch from "../support/pom/search"

describe('before hooks perform connection with fixtures folder, take data.', () => {

    const login = new hr
  //  const tabs = new tb  // create new variable tb
    const search = new srch

    before(() => {

        cy.fixture('users').then((data) => {
            globalThis.data = data
        })
    })
    
    it('should login the page regular', () => {
    
        login.visitThePage(data.username, data.password) 
        login.submit()

        //    cy.contains('.oxd-main-menu li', 'Admin').click()

    //    tabs.selectCategory('Admin')

//  tabs.selectCategory('Time')

        search.searchCategory('Time')

    })
})