/// <reference types="Cypress" />


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
        

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        //select[id="exampleFormControlSelect1"]
        
        //check value attribute is equal to date.name
        //jQuiery has ability to get text present in the elemeny with 'value' attribute
        //or you can use .text() method but will need to resolve promise
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        //verify mini length is 2. check attribute is equal to minlength
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        //check  element is deisabled
        cy.get('#inlineRadio3').should('be.disabled')

        //-----
        //click shop button and select product
        cy.get(':nth-child(2) > .nav-link').click()

        //loop through all 'h4.card-title' elements.search for 'Blackberry' and click on button for it
/*             cy.get('h4.card-title').each(($el, index, $list) => {
                if($el.text().includes('Blackberry')){
                    cy.get('button.btn.btn-info').eq(index).click()
                }

            }) */

        //use customize command to select blackberry and click to add to cart
        //no need to import file as its in support folder


        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')

        //iterate through fixture 'productName' and execure selectProduct
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)

        });


    })
})