/** Скриншот страницы с учениками. База изначально должна быть пустая. Тест создает ученика, делает снимок,
 * сравнивает его с эталонным.
 */

import {ApplicationManager} from '../appmanager/ApplicationManager'
import {PathToFile} from "../resources/PathToFile";

describe('Скриншот страницы учеников ->', function () {
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
        app.goTo.tasksPage();
    });

    afterEach(() => {
        app.snapShot.attach(
            testName,
            pathToFile.sshot(testName, "base", specName),
            pathToFile.sshot(testName, "diff", specName));
    });

    it('Скриншот страницы учеников', () => {
        testName = 'test1';
        app.goTo.menuStudents();
        app.snapShot.takeScreenshot(testName, 0.00);
    });
});