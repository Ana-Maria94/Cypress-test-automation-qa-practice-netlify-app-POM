class FileUploadPage {
    getChooseFile(){
        return cy.get('#file_upload');
    }

    getSubmitBtn(){
        return cy.get('button').contains('Submit');
    }

}

export default new FileUploadPage();