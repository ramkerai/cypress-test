/// <reference types="Cypress" />


describe ('My second suite', function () {
    it('My first test', function () {
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //assertions using chai. should is chai
        cy.get('.search-keyword').type('ca')

        //alias
        cy.get('.products').as('productLocator')  //acts like a variable

        //iterate over array.
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){ 
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains("Place Order").click()

    })
})