/// <reference types="Cypress" />


describe ('My second suite', function () {
    it('My first test', function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //assertions using chai. should is chai

        //checkl check box is checked AND text for box is 'option1
        //check behaviour so use 'be' AND with value Option1
        //for property 'value' in dom we can use 'have.value'. use 'have' for all properties.
        //behaviour use be. and comparison use have.
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //check its unchcked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //select multiple check box and provide VALUE property and chec them.
        //selector COMMON to all 
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //static
        //can pass value text or value attribut
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropwdown
        //type text and check all common tags and then loop
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => { 
            if($el.text() === 'India'){ 
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')
        

        //visible and invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        //use attribute , no need for tag
        cy.get('[value="radio2"]').check().should('be.checked')



    })
})