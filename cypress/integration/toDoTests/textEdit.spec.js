/// <reference types="cypress" />
context('Edit Text', () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Check if text is editable; edited text should not be left empty', () => {
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('hello').should('have.value', 'hello')
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__label').clear().type('world').should('have.value', 'world').clear()
    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__label').should('not.have.value', '')
  })
})
