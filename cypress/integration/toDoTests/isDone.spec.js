/// <reference types="cypress" />
context("'isDone' Button", () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it("Check for clickable 'isDo' button, should be invisible if the item is empty", () => {
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('test string')
    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get(':nth-child(2) > .TodoListItem__inner > .TodoListItem__toggle').should('not.visible')
  })

})
