/// <reference types="cypress" />
context('LocalStorage', () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Checking for LS functionality', () => {
    cy.contains('Add new item').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('hello world').should('have.value', 'hello world').reload()
    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__label').should('exist').and('have.value', 'hello world')
  })
})
