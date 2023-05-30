/// <reference types="cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("iframe test suite", () => {
    it("iframe test", () =>{
       LeftSideMenuPage.getIframeLink().click();
       cy.frameLoaded('#iframe-checkboxes');
       cy.iframe().find('#learn-more').click();
       cy.iframe().find('#show-text').should('be.visible');
    });
});
