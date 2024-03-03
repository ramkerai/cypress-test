/// <reference types="Cypress" />


describe ('Handling child window', function () {
    it('should handle child winodow', function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //show method in jquery
        //how to invoke show method in jquery - this will ensue all hidden elements are available
        cy.get('div.mouse-hover-content').invoke('show')  //if uses this then dont use force
        //seartch for Top. both Top & Reload is in hidden mode
        cy.contains('Top').click({force: true})//use force to click on hidden element
        //check url contains top 
        cy.url().should('include', 'top')

        //click has functionality to inytracdt with hidden elements



    })
})