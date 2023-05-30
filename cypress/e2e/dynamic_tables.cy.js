/// <reference types="cypress" />

import DynamicTablesPage from "../pages/DynamicTablesPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("handling dynamic tables test suite", () => {
    it("handling dynamic tables test- next()", () =>{
        LeftSideMenuPage.getTables().click();
        LeftSideMenuPage.getDynamicTablesLink().click();
        cy.get('.active > #home').should('be.visible');
        DynamicTablesPage.getTotalNumberOfRowsDynamicTables();
        DynamicTablesPage.getSelectTheColumnElementsDynamicTables();
        DynamicTablesPage.getDynamicValueFromTheTableNext();
    });

    it("handling dynamic tables test- prev()", () =>{
        LeftSideMenuPage.getTables().click();
        LeftSideMenuPage.getDynamicTablesLink().click();
        cy.get('.active > #home').should('be.visible');
        DynamicTablesPage.getTotalNumberOfRowsDynamicTables();
        DynamicTablesPage.getSelectTheColumnElementsDynamicTables();
        DynamicTablesPage.getDynamicValueFromTheTablePrev();
    });
});
