class RegisterPage {
    getFirstName(){
        return cy.get('#firstName');
    }

    getLastName(){
        return cy.get('#lastName');
    }

    getPhone(){
        return cy.get('#phone');
    }

    getSelectCountry(countryName){
        return cy.get("select").select(countryName);
    }

    getEmail(){
        return cy.get('input[type="email"]');
    }

    getPassword(){
        return cy.get('input[name="password"]');
    }

    getTermsAndConsCheckBox(){
        return cy.get('#exampleCheck1');
    }

    getRegisterBtn(){
        return cy.get('button').contains('Register');
    }

}

export default new RegisterPage();
