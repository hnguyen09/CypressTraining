const select_Test_Package = 'input#test-package'
const select_Test_Menu = 'input#test-menu'

class diagHomePage {
    get selPack(){
        return cy.get(select_Test_Package)
    }
    get selInv(){
        return cy.get(select_Test_Package)
    }
}

module.exports = diagHomePage