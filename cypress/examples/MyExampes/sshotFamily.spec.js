import {ApplicationManager} from '../appmanager/ApplicationManager'
import {PathToFile} from "../resources/PathToFile";

describe('Скриншот страницы семьи ->', function () {
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
        app.dB.dropLeadsCollection();
        app.goTo.tasksPage();
    });

    afterEach(() => {
        app.snapShot.attach(
            testName,
            pathToFile.sshot(testName, "base", specName),
            pathToFile.sshot(testName, "diff", specName));
    });

    it('тест #1', () => {
        testName = 'test1';
        app.goTo.menuStudents();
        app.student.selectChild();
        app.student.btnFamily();
        app.student.expandBalanceHistory();
        app.student.hideDynamicElement();
        app.snapShot.takeScreenshot(testName, 0.00);
    });

    it('тест #2', () => {
        testName = 'test2';
        app.goTo.menuStudents();
        app.student.selectChild();
        app.student.btnFamily();
        app.student.expandBalanceHistory();
        app.student.hideDynamicElement();
        app.snapShot.takeScreenshot(testName, 0.00);
    });
});