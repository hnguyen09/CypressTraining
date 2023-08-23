describe('PUT_API', ()=>{
    it('check sth',()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let requestBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }

        let requestObject = {
            method: 'PUT',
            url: url,
            headers: header,
            body: requestBody
        }

        cy.request(requestObject).then(res =>{
            let{status} = res
            let resBody = res.body
            let{id,title,userId} = resBody
            expect(status).to.eq(201)
            expect(id).to.eq(requestBody.id)

        })
        
    })
})