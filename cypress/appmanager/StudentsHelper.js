export class StudentsHelper {

    hideDynamicElement = () => {
        cy.allure().logStep('скрываю динамические элементы на странице');
        cy.xpath("//span[@class='user-time']").invoke("hide");
    }

    selectChild = () => {
        cy.allure().logStep('выбираю Дефолтного Ребенка');
        cy.xpath("//a[text()='Дефолтный Ребенок']").click();
    }

    btnFamily = () => {
        cy.allure().logStep('кликаю по кнопке Семья');
        cy.xpath("//a[text()='Семья']").click();
    }

    expandBalanceHistory = () => {
        cy.allure().logStep('кликаю по значку Развернуть историю');
        cy.xpath("//img[@class='gena-down-icon']").click().wait(500);
    }
}