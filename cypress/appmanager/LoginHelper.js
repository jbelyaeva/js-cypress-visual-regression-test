export class LoginHelper {

    loginAsSuperAdmin = () => {
        cy.allure().logStep('авторизуюсь как Суперадмин');
        cy.xpath("//input[@name='username']").type("superadmin");
        cy.xpath("//input[@name='password']").type("111111");
        cy.xpath("//button[contains(@class,'login')]").click();
        cy.url().should('eq', 'http://localhost:3000/tasks');
        cy.saveLocalStorage();
    }

    loginAsAdmin = () => {
        cy.allure().logStep('авторизуюсь как Админ');
        cy.xpath("//input[@name='username']").type("admin");
        cy.xpath("//input[@name='password']").type("111111");
        cy.xpath("//button[contains(@class,'login')]").click();
        cy.url().should('eq', 'http://localhost:3000/tasks');
        cy.saveLocalStorage();
    }

    LoginWithToken = () => {
        cy.allure().logStep('логинюсь через токен');
        cy.restoreLocalStorage();
    }
}