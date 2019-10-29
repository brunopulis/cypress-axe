/* eslint-disable eol-last */
/* eslint-disable no-undef */

// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('Home Spec', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('Verifica falhas de acessibilidade', () => {
    cy.checkA11y();
  });
});