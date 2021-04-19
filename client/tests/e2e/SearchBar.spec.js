/// <reference types="Cypress"/>

describe("SearchBar Component E2E tested", () => {
  const DROPDOWN_COMPETENCE_FIELD = '[data-testid="competence-input"]';
  const SEARCH_INPUT_FIELD = '[data-testid="search-input"]';
  const MENTOR_CARD = '[data-testid="mentor-card"]';

  beforeEach(() => {
    cy.visit("/search-mentors");
  });

  it("renders the input field", () => {
    cy.get(SEARCH_INPUT_FIELD).should("be.visible");
  });

  it("it renders all mentors if the input field is empty and no competence field is choosen", () => {
    cy.get(SEARCH_INPUT_FIELD);
    cy.get(MENTOR_CARD).should("have.length", 13);
  });

  it("renders all mentors those skills are matching the search input field", () => {
    cy.get(SEARCH_INPUT_FIELD).type("self employment");
    cy.get(MENTOR_CARD).should("have.length", 3);
  });

  it("renders all mentors matching the field of competence choosen in the dropdown", () => {
    cy.get(DROPDOWN_COMPETENCE_FIELD).select("Arts and Entertainment");
    cy.get(MENTOR_CARD).should("have.length", 2);
  });

  it("renders all mentors matching the search query input OR field of competence dropdown", () => {
    cy.get(DROPDOWN_COMPETENCE_FIELD).select("Health and Medicine");
    cy.get(SEARCH_INPUT_FIELD).type("self employment");
    cy.get(MENTOR_CARD).should("have.length", 4);
  });
});
