import {ApplicationManager} from '../appmanager/ApplicationManager'
import {PathToFile} from "../resources/PathToFile";

describe('Скриншот страницы добавления английского теста тайпформ ->', function () {
    const app = new ApplicationManager();
    const pathToFile = new PathToFile();
    const specName = __filename.slice(__dirname.length + 1);
    let testName;

    before(() => {
        app.goTo.loginPage();
        app.auth.loginAsSuperAdmin();
    });

    beforeEach(() => {
        app.auth.LoginWithToken();
        app.dB.dropChildTestsCollection();
        app.dB.createTest();
        app.goTo.tasksPage();
    });

    afterEach(() => {
        app.snapShot.attach(
            testName,
            pathToFile.sshot(testName, "base", specName),
            pathToFile.sshot(testName, "diff", specName));
    });

    it('Скриншот страницы добавления английского теста тайпформ', () => {
        testName = 'test1';
        app.goTo.menuTests();
        app.test.btnEditTest();
        app.test.btnAddTab();
        app.test.selectFirstLangInList();
        app.test.fillFormAddLang();
        app.test.btnSave();
        app.snapShot.takeScreenshot(testName, 0.00);
    });
});