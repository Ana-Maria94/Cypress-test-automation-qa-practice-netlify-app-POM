class DynamicTablesPage {
    getTotalNumberOfRowsDynamicTables(){
        return cy.get("tr");
    }

    getSelectTheColumnElementsDynamicTables(){
        return cy.get("td");
    }

    getDynamicValueFromTheTableNext(){
        return cy.get("td:nth-child(7)").each(($e1, index, $list) => {
            const dynamicValue = "Jamalpur";
            // cy.get("tr td:nth-child(7)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
            //storing the content in the text variable
            const text = $e1.text();
            //If the content is Google,iteration stops
            if (text.includes(dynamicValue)) {
                 //gets the CSS of the second column
                 cy.get("td:nth-child(7)")
                //grabs the content in the index value
                .eq(index)
                 //grabs the sibling cell CSS
                .next()
                 // promises should be resolved manually since text() is jQuery method
                .then(function (Field) {
                const Fieldtext = Field.text();
                //comparing strings using the jQuery method expect()
                expect(Fieldtext).to.equal("India");
                });
            }
        });
    }

    getDynamicValueFromTheTablePrev(){
        return cy.get("td:nth-child(7)").each(($e1, index, $list) => {
            const dynamicValue = "Almeria";
            // cy.get("tr td:nth-child(7)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
            //storing the content in the text variable
            const text = $e1.text();
            //If the content is Google,iteration stops
            if (text.includes(dynamicValue)) {
                 //gets the CSS of the second column
                 cy.get("td:nth-child(7)")
                //grabs the content in the index value
                .eq(index)
                 //grabs the sibling cell CSS
                .prev()
                 // promises should be resolved manually since text() is jQuery method
                .then(function (Field) {
                const Fieldtext = Field.text();
                //comparing strings using the jQuery method expect()
                expect(Fieldtext).to.equal("martin.nunez@example.com");
                });
            }
        });
    }
}

export default new DynamicTablesPage();
