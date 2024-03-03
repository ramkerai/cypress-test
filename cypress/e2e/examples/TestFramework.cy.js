/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";


describe ('Second test suite', function () {


    before(function () {
        //load fixtures here
        //fixtire returns promise so we resolve using  then and stores data returned in data
        cy.fixture('example').then(function (data) {
            //this is for entire class
            //data variable not avaiolable globally buit this.data is so need to assign to it
            this.data = data;

        })

    })

    it('First test case', function () {
        //only applies to this test. can set it after a certain step. explicit timeout
        Cypress.config('defaultCommandTimeout', 8000)

        const homepage = new HomePage()
        const productPage = new ProductPage()

        //get env variables

        cy.visit(Cypress.env('url') +"/angularpractice/")

        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        //select[id="exampleFormControlSelect1"]

        //check value attribute is equal to date.name
        //jQuiery has ability to get text present in the elemeny with 'value' attribute
        //or you can use .text() method but will need to resolve promise
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)

        //verify mini length is 2. check attribute is equal to minlength
        homepage.getEditBox().should('have.attr', 'minlength', '2')
        //check  element is deisabled
        homepage.getEnterprenuar().should('be.disabled')

        //-----
        //click shop button and select product
        homepage.getShopTab().click()


        //iterate through fixture 'productName' and execure selectProduct
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)

        });

        //click checkout button
        productPage.checkOutButton().click()

        var sum = 0
        //get prices and sum and assert
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
    
            sum = Number(sum) + Number(res)
            cy.log(res)

        }).then(function() {
            cy.log(sum)   //need this as this JS hence need to resolve promise...hence will not wait after loop

        })

        cy.get('h3 strong').then(function(element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.be.equal(sum)

        })

        ///-------
       
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        //get dynamic dropdown value shown as 'India
        //takes 5-7 secs. so may need to change default timeout in settings
        cy.get('.suggestions > ul > li > a').click()
        
        cy.get('#checkbox2').click({force: true} )
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element) {
            const actualText = element.text()

            expect(actualText.includes("Success")).to.be.true
 
        });



    })
})