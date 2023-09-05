describe('Verify Flow', ()=>{

    let url = 'https://api.diag.vn/patient/test-result/api/verify'
    let header = {
            'Content-type': 'application/json',
        }

    it('only first name', ()=>{

        let requestBody = {
            access_number: '2320106023',
            first_name: 'HÒA',
            is_skip_recaptcha: true
        }
        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
        
            cy.log(JSON.stringify(response.body.data.key))
            cy.request({
                method: 'GET',
                url: 'https://api.diag.vn/patient/test-result/api/show?key=' + response.body.data.key
            }).then(response =>{
                cy.log(JSON.stringify(response.body.data))
            })
        })
    })

    it('only last name', ()=>{

        let requestBody = {
            access_number: '2320106023',
            first_name: 'NGUYEN',
            is_skip_recaptcha: true
        }
        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
        
            cy.log(JSON.stringify(response.body.data.key))
            cy.request({
                method: 'GET',
                url: 'https://api.diag.vn/patient/test-result/api/show?key=' + response.body.data.key
            }).then(response =>{
                cy.log(JSON.stringify(response.body.data))
            })
        })
    })

    it('full name', ()=>{

        let requestBody = {
            access_number: '2320106023',
            first_name: 'NGUYỄN THÁI HÒA',
            is_skip_recaptcha: true
        }
        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
        
            cy.log(JSON.stringify(response.body.data.key))
            cy.request({
                method: 'GET',
                url: 'https://api.diag.vn/patient/test-result/api/show?key=' + response.body.data.key
            }).then(response =>{
                cy.log(JSON.stringify(response.body.data))
            })
        })
    })
})