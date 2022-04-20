/// <reference types="cypress" />
context('Drag and Drop Functionality', () => {
beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Check for drag and drop functionality', () => {
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('do this')
    cy.get('.TodoListItem-add > .TodoListItem__inner > .TodoListItem__toggle').click()
    cy.get('.empty-label > .TodoListItem__inner > .TodoListItem__label').type('do that')
    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__label').trigger("mousedown", { button: 0 });
    cy.wait(1000);
    cy.get(':nth-child(2) > .TodoListItem__inner > .TodoListItem__label').trigger("mousemove", 'bottom')
    .trigger('mouseup');

    cy.get(':nth-child(1) > .TodoListItem__inner > .TodoListItem__label').should('have.value', 'do that')
    cy.get(':nth-child(2) > .TodoListItem__inner > .TodoListItem__label').should('have.value', 'do this')
  })
})
