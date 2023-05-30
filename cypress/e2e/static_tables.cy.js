/// <reference types="cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import StaticTablesPage from "../pages/StaticTablesPage";

describe("handling static tables test suite", () => {
    it("handling static tables test", () =>{
        LeftSideMenuPage.getTables().click();
        LeftSideMenuPage.getStaticTablesLink().click();
        cy.contains('Table Example').should('be.visible');
        StaticTablesPage.getTotalNumberOfRows();
        StaticTablesPage.getSelectTheColumnElements();
        StaticTablesPage.getStaticValueFromTheTable();
    });
});
