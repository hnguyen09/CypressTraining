describe('GET_API', ()=>{
    it('check sth',()=>{
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
            //cy.get(response.status).should('eq',200)

            //destructure
            let{status, body} = response
            expect(status).to.equal(200)
            expect(body.length).to.eq(100)
        })

    })
})