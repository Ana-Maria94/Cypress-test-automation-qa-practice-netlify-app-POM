/// <reference types="cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

describe("ecommerce test suite", () => {
    it("submit order test", () =>{
        LeftSideMenuPage.getEcommerceLink().click();
        LoginPage.getEmail().type('admin@admin.com');
        LoginPage.getPassword().type('admin123', {log: false});
        LoginPage.getSubmitBtn().click();
        cy.contains('SHOPPING CART').should('be.visible');
        //cy.get('div.shop-items div.shop-item:first-child button').click(); //div.shop-items div shop-item:nth-child(3) button
        ShoppingCartPage.getAddToCartBtn(0).click();
        ShoppingCartPage.getQuantity().should('be.visible');
        cy.contains('PROCEED TO CHECKOUT').click();
        RegisterPage.getPhone().type('6565446544');
        ShoppingCartPage.getStreet().type('Al. I. Cuza');
        ShoppingCartPage.getCity().type('Roman');
        RegisterPage.getSelectCountry('Australia');
        ShoppingCartPage.getSubmitOrderBtn().click();
        cy.contains('Congrats! Your order of').should('be.visible');
    });
});