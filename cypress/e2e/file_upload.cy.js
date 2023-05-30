/// <reference types="cypress" />

import FileUploadPage from "../pages/FileUploadPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("file upload test suite", () => {
    it("file upload", () =>{
        const fileName = "images.jpg";
        LeftSideMenuPage.getFileUpload().click();
        FileUploadPage.getChooseFile().selectFile('cypress/fixtures/'+fileName);
        FileUploadPage.getSubmitBtn().click();
        cy.contains(`You have successfully uploaded "${fileName}"`).should('be.visible');
    });
});
