export class SnapShotHelper {

    takeScreenshot = (name, errorThreshold) => {
        cy.allure().logStep('делаю скриншот страницы и сравниваю с эталоном');
        cy.compareSnapshot(name, errorThreshold);
    }

    attach = (testName, pathBase, pathDiff) => {
        cy.allure().logStep('прикрепляю скриншоты в отчет');
        cy.allure().fileAttachment(testName + "-base", pathBase, "image/png");
        cy.allure().fileAttachment(testName + "-diff", pathDiff, "image/png");
    }
}