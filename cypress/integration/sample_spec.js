describe('My first test', function() {
    it('Visits the webpage and searches for pikachu', function() {
        cy.visit('http://localhost:3000')
        //Clicar na navbar e escrever pikachu
        cy.get('.input-search-pokemon').click().type('pikachu')
        //Clicar no botão de pesquisa
        cy.get('.search-btn').click()
        //Verifica a URL
        cy.url().should('include', '/pokemon/pikachu')
        //Avançar para o pokemon seguinte
        cy.get('.image-btn').last().should('not.have.value', 'disabled').click()
        //Recuar para o pokemon anterior
        cy.get('.image-btn').first().click()
        //Voltar para a home page
        cy.get('.return-btn').click()
        //Verifica a url
        cy.url().should('include', '/')
    })

    it('User searches for a pokemon that doesnt exist', function() {
        //Clicar na navbar e escrever o nome de um pokemon incorreto
        cy.get('.input-search-pokemon').click().clear().type('pikaxu')
        //Clicar no botão de pesquisa
        cy.get('.search-btn').click()
        //Verifica a URL
        cy.url().should('include', '/pokemon/pikaxu')
        //Verifica se a mensagem de erro está presente
        cy.contains(`Sorry! Couldn't find that Pokemon!`)
        //Voltar para a home page
        cy.get('.return-btn').click()
        //Verifica a url
        cy.url().should('include', '/')
    })
})