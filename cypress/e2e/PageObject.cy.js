import diagHomePage from "../model/pages/diagHomePage"

describe('template spec', () => {
 
      it.only('page object',()=>{
        let diag = new diagHomePage()

        cy.visit('https://staging.diag.vn/danh-muc-san-pham/goi-xet-nghiem/')

        diag.selPack.should('be.visible')
        diag.selInv.should('be.visible')

      })
  })