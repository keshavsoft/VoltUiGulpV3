import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncFromRowDataFromGet } from "./RowDataFromGet/Entry.js";

let StartFunc = () => {
    LocalFunc();
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
    StartFuncFromRowDataFromGet();
};

const LocalFunc = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };