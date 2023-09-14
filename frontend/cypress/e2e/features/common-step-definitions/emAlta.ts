import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Ver a seção de Filmes em alta

// Given: gender.ts

// Given: login.ts

Then("o usuário vê a seção {string}", (value: string) => {
    cy.getDataCy(value).should('exist');
});