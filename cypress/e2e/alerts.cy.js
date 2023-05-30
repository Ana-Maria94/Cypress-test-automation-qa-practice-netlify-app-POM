/// <reference types="cypress" />

import AlertsPage from "../pages/AlertsPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("handling alerts test suite", () => {
    it("handling alerts test", () =>{
        LeftSideMenuPage.getAlertsLink().click();
        cy.contains('Alerts Example').should('be.visible');
        AlertsPage.getAlertBtn().click();
        cy.on('window:alert', function (alertText){
            expect(alertText).eq('Hello! I am an alert box!!')
        });
    });

    it("handling confirm alerts test", () =>{
        LeftSideMenuPage.getAlertsLink().click();
        cy.contains('Alerts Example').should('be.visible');
        AlertsPage.getConfirmBtn().click();
        cy.on('window:confirm', function (){
            return false;
        });
    });
});
