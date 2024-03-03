/// <reference types="Cypress" />


describe ('My second suite', function () {
    it('My first test', function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //assertions using chai. should is chai

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert  - 
        //on means firing an event - you wont see in the browser but internally it is fired
        //output from firing event in str. you can then compare
        cy.on('window:alert',(str) => { 

            //mocha for assertations.
            //compare strings. is expect
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')

        })

        //mocha for assertations.
        //compare strings. is expect

        //for windows confirm

        cy.on('window:confirm',(str) => { 

            //mocha for assertations.
            //compare strings. is expect
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')

        })


    })
})