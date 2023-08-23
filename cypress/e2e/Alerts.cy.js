describe('Alerts', () => {
 
    it('JS Alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window.alert', (t)=>{
            expect(t).to.equal('I am a JS Alert');

        })
        //cypress automatically close aler window
    })

    it('JS Confirm Alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window.confirm', (t)=>{
            expect(t).to.equal('I am a JS Confirm');

        })
        //cypress automatically close aler window by using ok button-default

    })

    it('JS Confirm Alert - Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window.confirm', ()=>(false))
        //cypress automatically close aler window by using cancel 

    })

    it('JS Prompt Alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        //cy.get('button[onclick="jsPrompt()"]').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get('button[onclick="jsPrompt()"]').click()
        //cypress automatically close aler window by using OK

    })

    it.only('JS Prompt Alert - Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        //cy.get('button[onclick="jsPrompt()"]').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        
        cy.get('button[onclick="jsPrompt()"]').click()
        //cypress automatically close aler window by using OK

        cy.on('window.prompt', ()=>(false))

    })
})