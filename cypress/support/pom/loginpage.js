class login {

visitThePage(username, password) {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
             cy.get('[name="username"]').type(username)           
             cy.get('[name="password"]').type(password)  
}

submit() {

    cy.get('[type="submit"]').click() 

    }
}

export default login