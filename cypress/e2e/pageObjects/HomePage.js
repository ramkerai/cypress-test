class HomePage{

    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }

    getEnterprenuar(){
        return cy.get('#inlineRadio3')

    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }


}

//to expose class to other files in framework
export default HomePage;
