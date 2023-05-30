class StaticTablesPage {
    getTotalNumberOfRows(){
        return cy.get("tr");
    }

    getSelectTheColumnElements(){
        return cy.get("td");
    }
   
    getStaticValueFromTheTable(){
        return cy.get("td:nth-child(3)").each(($e1, index, $list) => {
            const value = "Icarus";
            //storing the content in the text variable
            const text = $e1.text();
            //If the content is bobby_23@gmail.com,iteration stops
            if (text.includes(value)) {
              //gets the CSS of the fourth column
                cy.get("td:nth-child(3)")
                //grabs the content in the index value
                .eq(index)
                // promises should be resolved manually since text() is jQuery method
                .then(function (Field) {
                  const Fieldtext = Field.text();
                  //comparing strings using the jQuery method expect()
                  expect(Fieldtext).to.equal(value);
                });
            }
        });
    }

}

export default new StaticTablesPage();