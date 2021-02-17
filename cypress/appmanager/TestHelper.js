export class TestHelper {

    addEnglishTest = () => {
        this.btnEditTest();
        this.btnAddTab();
        this.selectFirstLangInList();
        this.fillFormAddLang();
        this.btnSave();
    }

    btnEditTest = () => {
        cy.allure().logStep('нажимаю на значек редактирования теста');
        cy.xpath("(//div[@class='test-buttons']/*)[1]").click();
    }

    btnAddTab = () => {
        cy.allure().logStep('нажимаю на значек добавления языка');
        cy
            .xpath("//span[text()='Русский']")
            .should('be.visible');
        cy.xpath("//div[@class='add-tab-btn']").click();
    }

    selectFirstLangInList = () => {
        cy.allure().logStep('выбираю первый язык по списку (английский)');
        cy.xpath("//li[@id-qa='new-lang'][1]").click();
    }

    fillFormAddLang = () => {
        cy.allure().logStep('заполняю форму добавления языка');

        cy.xpath("//div[@id-qa='title']//input").type("Scratch");
        cy.xpath("(//div[@id-qa='description']//textarea)[1]").type("Test for new direction");
        cy.xpath("//div[@id-qa='rootFormId']//input").type("11-33");

        // проверить, что выбран чек-бокс
        cy.xpath("//button[@id-qa='skills']").click();
        cy
            .xpath("//input[@id='checkbox-id-1']")
            .should('have.attr', 'checked');
        cy.xpath("//button[@id-qa='skills']").click();

        // проверить, что общие поля заполнены
        cy
            .xpath("//div[@id-qa='maxScore']//input")
            .should('not.contain.value', null);
        cy
            .xpath("//div[@id-qa='minScore']//input")
            .should('not.contain.value', null);
        cy
            .xpath("//div[@id-qa='timeForPassing']//input")
            .should('not.contain.value', null);
    }

    btnSave = () => {
        cy.allure().logStep('нажимаю кнопку сохранить');
        cy.xpath("//div[contains(@class,'inputs')]/following-sibling::*").click();
    }
}