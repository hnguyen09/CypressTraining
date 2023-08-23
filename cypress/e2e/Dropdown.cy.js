describe('Dropdown', () => {
 
    it('Dropdown selection', () => {
      cy.visit('https://www.zoho.com/commerce/free-demo.html')

      cy.get('#zcf_address_country')
      .select('Vietnam')
      .should('have.value','Vietnam')
      
    })

    it('Auto suggest Dropdown', () => {
        cy.visit('https://vi.wikipedia.org/wiki/Trang_Ch%C3%ADnh')
  
        cy.get('input[placeholder="Tìm kiếm trên Wikipedia"]')
        .type('Chelsea')
        
        cy.get('.cdx-menu.cdx-menu--has-footer > .cdx-menu__listbox [title="Chelsea F.C."]').click()

        cy.get('.mw-page-title-main').should('have.text','Chelsea F.C.')
        
      })
})