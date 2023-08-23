
describe('template spec', () => {
 
      it('radio and check box', () => {

        cy.visit('https://staging.diag.vn/danh-muc-san-pham/goi-xet-nghiem/')
        
        //Radio
        cy.get('input#test-package').should('be.visible')
        cy.get('input#test-package').check().should('be.checked')
        cy.get('input#test-menu').check().should('be.checked')
        cy.get('input#test-package').should('not.be.checked')
  
        //Check box
        cy.get('ul.testcat-list--menu li:nth-child(1) input.filter-chk').should('be.visible')
        cy.get('ul.testcat-list--menu li:nth-child(1) input.filter-chk').check().should('be.checked')
        cy.get('ul.testcat-list--menu li:nth-child(1) input.filter-chk').uncheck().should('not.be.checked')
  
        //Select all check box
        //cy.get('ul.testcat-list--menu input.filter-chk').check().should('be.checked')

        cy.get('ul.testcat-list--menu input.filter-chk').first().check().should('be.checked')
        cy.get('ul.testcat-list--menu input.filter-chk').last().check().should('be.checked')
        
      })
  })