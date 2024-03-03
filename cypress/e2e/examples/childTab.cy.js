/// <reference types="Cypress" />


describe ('Handling child window', function () {
    it('should handle child winodow', function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    

        //invoke a function using jQuery. opens in same tab
        //we modifyg the target attrubute.
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //below opens in separate tab which cypress cant deal with
        //cy.get('#opentab').click()

        //need origin as we going to another domain i.e its not https://rahulshettyacademy.com//
        //new domain link
        cy.origin("https://www.qaclickacademy.com", ()  => {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
        })

    


    })
})