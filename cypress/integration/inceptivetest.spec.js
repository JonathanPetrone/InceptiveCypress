describe('Testing Inceptive DREAM TEAM', () => {
    it('Testing DREAM TEAM', () => {
      // gå till inceptive.se
      cy.visit('https://inceptive.se')

      // tittar på charset och ser att vi använder oss av utf-8
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

      // fånga och klicka DREAM TEAM fliken
      cy.contains('THE DREAM TEAM').click()

      // Verifiera att URL:n innehåller /dream-team
      cy.url().should('include', '/dream-team') 

      // Ser så att det står Management team
      cy.get(':nth-child(3) > #ux-team')
      .should('have.text', 'MANAGEMENT TEAM')

      // Fångar containern under där Management teamet har sina bilder
      cy.get('.body-2 > :nth-child(4)')

      // Letar efter Martins bild
      .find(':nth-child(5) > .video-div')
      .find('.image-72').should('be.visible')

      // Fångar texten under Martins bild och ser så att den har hans namn
      cy.get('.body-2 > :nth-child(4) > :nth-child(5) > .name-div > .text-block-37 > .text-span-7')
      .should('have.text', 'MARTIN Jansson')

      // Minskar fönstrets storlek
      cy.viewport(320, 480)

      // Fångar containern under där Management teamet har sina bilder
      cy.get('.body-2 > :nth-child(4)')

      // Letar efter Martins bild
      .find(':nth-child(5) > .video-div')
      .find('.image-72').should('be.visible')

      // Fångar texten under Martins bild och ser så att den har hans namn
      cy.get('.body-2 > :nth-child(4) > :nth-child(5) > .name-div > .text-block-37 > .text-span-7')
      .should('have.text', 'MARTIN Jansson')
    })
  })