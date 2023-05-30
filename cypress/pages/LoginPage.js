class LoginPage {
    getEmail(){
        return cy.get('#email');
    }

    getPassword(){
        return cy.get('#password');
    }
    getSubmitBtn(){
        return cy.get('#submitLoginBtn');
    }

}

export default new LoginPage();
