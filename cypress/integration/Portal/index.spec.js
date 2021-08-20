/// <reference types="cypress" />

describe('Open page initial project', () => {
  it('Should open success', () => {
    cy.visit('/');
    cy.title().should('eq', 'Ponto Eletrônico');
  });
});

describe('Open page create new user', () => {
  it('Should open check is page create user is open', () => {
    cy.get('a').click();
  });

  it('Should page create user is open, back to home', () => {
    cy.get('a').click();
    cy.title().should('eq', 'Ponto Eletrônico');
  });
});

describe('Login in platform', () => {
  it('Should page open include values for login', () => {
    cy.get(':nth-child(1) > .ui > input').type('Galdino');
    cy.get(':nth-child(2) > .ui > input').type('123456');

    cy.get(':nth-child(1) > .ui > input').should('have.value', 'Galdino');
    cy.get(':nth-child(2) > .ui > input').should('have.value', '123456');
    cy.get('.segment > .blue').click();
  });
});

describe('Logout platform', () => {
  it('Should logout in platform', () => {
    cy.get('.ui > .dropdown').click();
    cy.get('.right > .ui > .menu > .item').click();
  });

  it('Should logout ERROR platform', () => {
    cy.get('.ui > .dropdown').click();
    cy.get('.right > .ui > .item').click();
  });
});
