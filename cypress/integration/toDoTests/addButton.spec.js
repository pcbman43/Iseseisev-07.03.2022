/// <reference types="cypress" />
context('Add Button', () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Button, empty list item testing', () => {
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click().click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').should('have.length', 1).type('hello')
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').should('have.length', 1)
  })
})
