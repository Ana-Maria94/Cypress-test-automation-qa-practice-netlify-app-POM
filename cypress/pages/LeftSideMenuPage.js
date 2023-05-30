class LeftSideMenuPage {
    getForms(){
        return cy.get('#forms');
    }

    getTables(){
        return cy.get('a[href="#tables"]');
    }

    getStaticTablesLink(){
        return cy.get('a[href="web-table.html"]');
    }

    getDynamicTablesLink(){
        return cy.get('a[href="dynamic-table.html"]');
    }

    getFileUpload(){
        return cy.get('#file-upload-item');
    }

    getLoginFormLink(){
        return cy.get('a[href="login.html"]');
    }

    getRegisterFormLink(){
        return cy.get('#register');
    }

    getIframeLink(){
        return cy.get('#iframes');
    }

    getEcommerceLink(){
        return cy.get('a[href="auth_ecommerce.html"]');
    }

    getAlertsLink(){
        return cy.get('#alerts');
    }
}

export default new LeftSideMenuPage();