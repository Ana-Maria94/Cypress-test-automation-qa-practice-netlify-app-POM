class ShoppingCartPage {
    getChooseFile(){
        return cy.get('#file_upload');
    }

    getAddToCartBtn(index){
        return cy.get('div.shop-items button').eq(index);
    }

    getQuantity(){
        return cy.get('input.cart-quantity-input');
    }

    getStreet(){
        return cy.get('input[name="street"]');
    }

    getCity(){
        return cy.get('input[name="city"]');
    }

    getSubmitOrderBtn(){
        return cy.get('#submitOrderBtn');
    }

}

export default new ShoppingCartPage();
