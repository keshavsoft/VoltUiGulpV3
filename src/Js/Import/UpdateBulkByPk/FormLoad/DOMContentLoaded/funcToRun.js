import { StartFunc as StartFuncSaveButtonId } from "./SaveButtonId/EntryFile.js";
// import { StartFunc as StartFuncFromFromFile } from "./FromFile/entryFile.js";
import { StartFunc as StartFuncFromBuildBsTable } from "./BuildBsTable/entryFile.js";
import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";

let StartFunc = () => {
    StartFuncFromBuildBsTable();
    // StartFuncFromFromFile();
    StartFuncSaveButtonId();
    StartFuncFromAddListeners();
};

export { StartFunc };