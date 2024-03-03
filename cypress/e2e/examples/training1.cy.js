/// <reference types="Cypress" />


describe ('My first suite', function () {
    it('My first test', function () {
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //assertions using chai. should is chai
        cy.get('.search-keyword').type('ca')
        //cy.wait(2000)
        //:visible only retrieves visible elements, ignores invisible ones.
        cy.get('.product:visible').should('have.length', 4)
        //alias
        cy.get('.products').as('productLocator')  //acts like a variable
        //parent child 
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //manually resolve promise to ensuer console log after below step
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () { 
            //a non cypress command - hence then is required
            console.log('clicked')
        })

        //iterate over array.
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){ 
                cy.wrap($el).find('button').click()
            }
        })

        //assert if logoi is correctly displayed. Should is chai library
        cy.get('.brand').should('have.text', 'GREENKART')

        //need to resolve promise manually as its not all cypress commnds. its js and cyptess so can use then() to manually resolve promise.
        const logo = cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())  //this will print in cypress console
        })

        //cy.log(logo.text()) - this will not work. text() is not cypress command


    })
})