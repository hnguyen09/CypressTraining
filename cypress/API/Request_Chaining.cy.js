describe('CHAINING API', ()=>{
    it('check sth',()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let createBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let updateBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
            id:101
        }

        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: createBody
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
            cy.request({
                method: 'GET',
                url: url + "/" + (Number(response.body.id)-1).toString(),
                headers: header
            }).then(response =>{
                cy.log(JSON.stringify(response.body))
            })

            cy.request({
                method: 'PUT',
                url: url + "/" + (Number(response.body.id)-1).toString(),
                headers: header,
                body: updateBody
            }).then(response =>{
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'GET',
                    url: url + "/" + Number(response.body.id).toString(),
                    headers: header
                }).then(response =>{
                    cy.log(JSON.stringify(response.body))
                })
            })
        })

    })
})