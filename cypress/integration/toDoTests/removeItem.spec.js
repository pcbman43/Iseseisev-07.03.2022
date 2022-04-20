/// <reference types="cypress" />
context('Delete Button', () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Check if items are removable via button', () => {
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('greet people')
    cy.get('.TodoListItem__remove').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').should('not.exist')
  })
})
