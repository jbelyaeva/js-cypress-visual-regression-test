import {NavigationsHelper} from './NavigationsHelper'
import {LoginHelper} from './LoginHelper'
import {StudentsHelper} from './StudentsHelper'
import {SnapShotHelper} from './SnapShotHelper'
import {LeadsHelper} from "./LeadsHelper";
import {DbHelper} from "./DbHelper";
import {TestHelper} from "./TestHelper";

export class ApplicationManager {

    #navigationsHelper = new NavigationsHelper();
    #loginHelper = new LoginHelper();
    #studentsHelper = new StudentsHelper();
    #snapShotHelper = new SnapShotHelper();
    #leadsHelper = new LeadsHelper();
    #dbHelper = new DbHelper();
    #testHelper = new TestHelper();


    get goTo() {
        return this.#navigationsHelper;
    }

    get auth() {
        return this.#loginHelper;
    }

    get student() {
        return this.#studentsHelper;
    }

    get snapShot() {
        return this.#snapShotHelper;
    }

    get lead() {
        return this.#leadsHelper;
    }

    get dB() {
        return this.#dbHelper;
    }

    get test() {
        return this.#testHelper;
    }
}