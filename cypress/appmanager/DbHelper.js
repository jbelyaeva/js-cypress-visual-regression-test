export class DbHelper {

    createLead = () => {
        cy.allure().logStep('создаю тестового лида через БД');
        cy.exec('node ./cypress/transaction/createLead.js');
        cy.allure().endStep();
    }

    createTest = () => {
        cy.allure().logStep('создаю тест через БД');
        cy.exec('node ./cypress/transaction/createTest.js');
        cy.allure().endStep();
    }

    dropLeadsCollection = () => {
        cy.allure().logStep('дропаю коллекцию лидов через БД');
        cy.exec('node ./cypress/transaction/dropLeadsCollection.js');
        cy.allure().endStep();
    }

    dropChildTestsCollection = () => {
        cy.allure().startStep('дропаю коллекцию child-tests через БД');
        cy.exec('node ./cypress/transaction/dropChildTestsCollection.js');
        cy.allure().endStep();
    }

}