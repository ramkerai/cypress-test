/// <reference types="Cypress" />



describe ('basic page check', function () {


    it('verify superuser menu items', function () {

        cy.visit('https://s64-altoflex-uat.azurewebsites.net/login#/');
        cy.get('#email').type('ramji.kerai@s64capital.com')
        cy.get('#password').type('Welcome123!');
        cy.contains("Login").click()
        cy.get('h1').contains('Products')
    
     
        //check menu items
        cy.get('#menu').find(".md\\:px\\-2").should('have.length', 6)

        const menuHeadings = ["Clients","Products","Tasks", "Distributor Overview", "Inducement Fee Calculator", 
        "Fund Raising", "Fund Dashboard", "Documents", "Subscriptions", "User Management", "Profile Management", 
        "Product Management", "Booking Centre Management", "Application Settings", "Preference Settings","Prospective Investors","Event Simulator"];

        const secondMenuHeadings =["Tools", "Admin"]
        cy.log(menuHeadings);

        //check 1st set of menu items
        cy.get('#menu').find(".md\\:px\\-2 a")
        .then((items) => {
            const list = Array.from(items, (item) => item.outerText.toString().trim());
            list.forEach((x, i) => cy.log(x));
            
            expect(list).have.length(menuHeadings.length)

            if( list.toString() === menuHeadings.toString()) {
                cy.log("two arrays match")
                assert.isOk('everything', 'everything is ok')
                
            }
            else {
                cy.log("two arrays do not match")
                assert.isOk(false, 'failed')
            }
        })
        

        //check 2nd set of menu items
        cy.get('#menu').find(".md\\:px\\-2 p")
        .then((items) => {
            const list = Array.from(items, (item) => item.outerText.toString().trim());
            list.forEach((x, i) => cy.log(x));
            
            expect(list).have.length(secondMenuHeadings.length)

            if( list.toString() === secondMenuHeadings.toString()) {
                cy.log("two arrays match")
                assert.isOk('everything', 'everything is ok')
                
            }
            else {
                cy.log("two arrays do not match")
                assert.isOk(false, 'failed')
            }
        })
        

        cy.wait(2000)
        
        cy.get('#menu-button').click()
        cy.get('.bg-white > .flex > .mr-2').click();


    })
})