export class NavigationsHelper {

    loginPage = () => {
        cy.allure().logStep('перехожу на страницу авторизации');
        cy.visit('/login');
        cy.url().should('eq', 'http://localhost:3000/login');
    }

    tasksPage = () => {
        cy.allure().logStep('перехожу на страницу задач');
        cy.visit('/tasks');
        cy.xpath("//h2[text()='Задачи']").should('be.visible');
        cy.xpath("(//div[@class='user-online-status online'])[1]").should('be.visible');
    }

    menuStudents = () => {
        cy.allure().logStep('перехожу в меню учеников');
        cy.xpath("//a[@href='/childs']").click();
        cy.xpath("//h2[text()='Ученики']").should('be.visible');
        cy.xpath("(//div[@class='user-online-status online'])[1]").should('be.visible');
    }

    menuLeads = () => {
        cy.allure().logStep('перехожу в меню лидов');
        cy.xpath("//a[@href='/leads']").click();
        cy.xpath("//h2[text()='Лиды']").should('be.visible');
        cy.xpath("(//div[@class='user-online-status online'])[1]").should('be.visible');
    }

    menuTests = () => {
        cy.allure().logStep('перехожу в меню тестов');
        cy.xpath("//a[contains(@href, '/tests')]").click();
        cy.xpath("//h2[text()='Тесты']").should('be.visible');
        cy.xpath("(//div[@class='user-online-status online'])[1]").should('be.visible');
    }

    menuTrainers = () => {
        cy.allure().logStep('перехожу в меню тренеров');
        cy.xpath("//a[@href='/trainers']").click();
        cy.xpath("//h2[text()='Тренеры']").should('be.visible');
        cy.xpath("(//div[@class='user-online-status online'])[1]").should('be.visible');
    }
}