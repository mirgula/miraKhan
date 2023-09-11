/// <reference types="cypress" />

describe('practicing iframe method', () => {
    
    it('iframe method', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').then(($iframe) => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');
            cy.wrap(iframeDocument).clear().type("Aizatik")
        })
    });
    it.only('another way of iframe', () => {
        cy.visit('https://nxtgenaiacademy.com/iframe/')

        cy.get('[name="iframe_a"]').then(($iframe) => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');
            cy.wrap(iframeDocument).find('#vfb-5').type("Anya")
        });
        cy.get('[name="iframe_a"]').then(($iframe) => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');
            cy.wrap(iframeDocument).find('#vfb-7').type("Sula")
        });

        cy.get('[name="iframe_a"]').then(($iframe) => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');
            cy.wrap(iframeDocument).find('#vfb-31-2').check("female")
        });

    });
});
        

