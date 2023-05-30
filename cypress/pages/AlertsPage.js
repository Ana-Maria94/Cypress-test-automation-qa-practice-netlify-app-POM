class AlertsPage {
    getAlertBtn(){
        return cy.get('#alert-btn');
    }

    getConfirmBtn(){
        return cy.get('#confirm-btn');
    }

}

export default new AlertsPage();
