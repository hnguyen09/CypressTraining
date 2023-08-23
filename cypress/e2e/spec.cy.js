describe('template spec', () => {
  context('mobile resolution', () => {
    beforeEach(() => {
      // run these tests as if in a mobile
      cy.viewport(480, 720)
    })
    it.only('implicit assertion', {defaultCommandTimeout: 50000},() => {
      cy.visit('/individual/result?lang=vi&key=mfB9yk95zVWHEqRLuepjRw==')
      cy.url().should('eq','https://webportal-staging.diag.vn/individual/result?lang=vi&key=mfB9yk95zVWHEqRLuepjRw==')
      cy.title().should('contain','Kết quả xét nghiệm')
      cy.get('i.psc-rotate-180',{timeout:10000}).click()
      cy.get('div.sc-p-3 div:nth-child(1) .sc-shadow  [class="dgic-chevron-down-thin"]').click()
      cy.get('canvass').should('be.visible').and('exist')
      cy.get('div.psc-text-green-darken-1 span').should('have.text','Bạn đã có kết quả xét nghiệm')
      
    })
    it('explicit assertion', () => {
      cy.visit('https://webportal-staging.diag.vn/individual/result?lang=vi&key=mfB9yk95zVWHEqRLuepjRw==')
      
      let expTitle = 'Kết quả xét nghiệm'
      let expTitle2 = 'Kết quả mẫu'
      
      cy.title().then( (x)=>{
        let actTitle = x

        //BDD style
        expect(actTitle).to.equal(expTitle)
        expect(actTitle).to.not.equal(expTitle2)

        //TDD style
        assert.equal(actTitle,expTitle)
        assert.notEqual(actTitle,expTitle2)

      })
    })
  })
})