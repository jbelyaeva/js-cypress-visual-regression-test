export class LeadsHelper {

    hideDynamicElement = () => {
        // cy.xpath("//span[@class='user-time']").then(($elem) => {
        //     $elem.hide()
        // });
        cy.allure().logStep('скрываю динамические элементы на странице')
        cy.xpath("//span[@class='user-time']").invoke("hide");
        cy.xpath("//span[@class='time']").invoke("hide");
        cy.xpath("//span[@class='date']").invoke("hide");
    }
}