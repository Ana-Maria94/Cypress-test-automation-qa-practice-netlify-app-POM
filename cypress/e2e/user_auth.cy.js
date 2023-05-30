/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import 'cypress-iframe';
import LeftSideMenuPage from '../pages/LeftSideMenuPage';
import RegisterPage from '../pages/RegisterPage';

describe("user auth test suite", () => {
    it("login with valid credentials", () =>{
       cy.login('admin@admin.com', 'admin123');
       //cy.get('#message').should('be.visible');
       //v1
       // cy.get('#message').should('contain', 'admin@admin.com, you have successfully logged in!');
       cy.findByText('admin@admin.com, you have successfully logged in!').should('be.visible');
       //or v2
       // cy.contains('admin@admin.com, you have successfully logged in!').should('be.visible');
    })

    it("login with invalid credentials", () =>{
        cy.login('admin@admin.com', 'parolaGresita');
        cy.get('#message').should('be.visible');
        cy.get('#message').should('contain', "Bad credentials! Please try again! Make sure that you've registered.");
        cy.contains("Bad credentials! Please try again! Make sure that you've registered.").should('be.visible');
    })

    it("register user", () =>{
        const randomLastName = faker.person.lastName();
        LeftSideMenuPage.getForms().click();
        LeftSideMenuPage.getRegisterFormLink().click();
        RegisterPage.getFirstName().type('Predefined value');
        //cy.pause();
        RegisterPage.getFirstName().clear().type(faker.person.firstName());
        RegisterPage.getLastName().type(randomLastName);
        RegisterPage.getPhone().type('0989876546', {delay: 0});
        RegisterPage.getSelectCountry('Australia');
        RegisterPage.getEmail().type(randomLastName+"."+faker.internet.email({firstName: 'Jane'}));
        RegisterPage.getPassword().type(faker.internet.password(), {log: false});
        RegisterPage.getTermsAndConsCheckBox().click();
        RegisterPage.getRegisterBtn().click();
        cy.get('#message').should('be.visible');
        cy.get('#message').should('contain', "The account has been successfully created!");
        cy.contains("The account has been successfully created!").should('be.visible');
    });
});