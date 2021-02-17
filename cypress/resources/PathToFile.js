export class PathToFile {

    sshot = (testName, folder, specName) => {
        return "./cypress/snapshots/" + folder + "/"+ specName +"/" + testName + "-" + folder + ".png";
    }
}
