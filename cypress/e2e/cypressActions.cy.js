/// <reference types="cypress" />

const user = {
    email: "nikolai.kapitanets@gmail.com",
    password: 'kolya123',
};

describe('Successful login', () => {

    it('Login with valid creds', () => {
        cy.visit('https://dou.ua/');
        cy.get('[id="login-link"]')
            .click();
        cy.get('[id="_loginByMail"]')
            .click();
        cy.get('[name="username"]')
            .type(user.email);
        // cy.get('[id="username"]')
        //     .type('tomsmith');
        // cy.get('[id="password"]')
        //     .type('SuperSecretPassword!');
        // cy.get('.fa')
        //     .click();
        // cy.get('[id="flash"]')
        //     .should('contains.text', 'You logged into a secure area!');
    });
  });
