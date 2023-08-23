describe('POST_API', ()=>{
    it('check sth',()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody

        }
        cy.request(requestObject).then(response =>{
            let{status, body} = response
            cy.log(JSON.stringify(body))
            expect(status).to.equal(201)

            let {title,userId} = body
            let responseBody = body.body
            expect(title).to.eq(requestBody.title, 'title is not correct')
            expect(userId).to.eq(requestBody.userId, 'Userid is not correct')
            expect(responseBody).to.eq(requestBody.body, 'Body is not correct')
        })

    })
})