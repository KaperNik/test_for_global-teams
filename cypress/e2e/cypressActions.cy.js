/// <reference types="cypress" />

const byClassName = (className) => {
    return `*[class^=${className}]`;
}

const CUP_PRICE = 25;
const precision = 2;

describe('Purchase few items', () => {

    // before(() => {
    //     cy.visit('https://demo.vercel.store');
    //   });

    it('Successful added to card from New Arrivales', () => {
        cy.visit('/search/clothes');
        
        cy.contains(byClassName('ProductCard_name'), 'ACME Cup')
            .click();
        
        cy.get(`${byClassName('ProductView_sidebar')} > :nth-child(4) > ${byClassName('Button_root')}`)
            .click();
        
            cy.multipleClick('.h-9 > :nth-child(4)', 4);
        
        cy.get('.Quantity_input__yBzs3')
            .invoke('val')
            .then((quantity) => {
                const cupsTotal = (quantity * CUP_PRICE).toFixed(precision);
                
                cy.get('.space-x-4 > .justify-between > span').should(($span) => {
                    const total = $span.text()
                        .slice(1);
                    
                    expect(total).to.eql(cupsTotal);
                });
            });
        cy.get('[aria-label="Close"]')
            .click({force: true});

        cy.contains('.Navbar_link__Z6GsF', 'Featured')
            .click();

        cy.get('[aria-label="Quarter Zip"]')
            .click({force: true});
            
        cy.get('[aria-label="size m"]')
            .click();

        cy.get(`${byClassName('ProductView_sidebar')} > :nth-child(4) > ${byClassName('Button_root')}`)
            .click();

        cy.get('.CartItem_productName__RYrlX')
            .should('contains.text', 'Quarter Zip');

        cy.get('.CartItem_productName__RYrlX')
            .should('contains.text', 'ACME Cup');

        cy.get(':nth-child(2) > .mx-2')
            .should('contains.text', 'M');

        cy.get(`.flex-shrink-0 > :nth-child(3) > ${byClassName('Button_root')}`)
            .click();
        
        cy.get('[id="checkout_email_or_phone"]')
            .type('0938885522');

        cy.get('[id="checkout_shipping_address_first_name"]')
            .type('John');
        cy.get('[id="checkout_shipping_address_last_name"]')
            .type('Snow');

        cy.get('[id="checkout_shipping_address_address1"]')
            .type('Westerros');

        cy.get('[id="checkout_shipping_address_address2"]')
            .type('13 Apps');     

        cy.get('[id="checkout_shipping_address_city"]')
            .type('Kyiv');    

        cy.get('[id="checkout_shipping_address_zip"]')
            .type('04114');  
                
        cy.get('[id="continue_button"]')
            .click();    
    });
  });
