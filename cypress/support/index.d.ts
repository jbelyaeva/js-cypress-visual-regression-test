///<reference types="cypress"/>
declare namespace Cypress {
    interface Chainable {
        compareSnapshot(name: string, errorThreshold?: number): void
    }
}