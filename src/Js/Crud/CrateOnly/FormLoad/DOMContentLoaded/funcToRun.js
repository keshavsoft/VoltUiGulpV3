import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

let StartFunc = () => {
    // debugger;
    LocalFunc();
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
};

const LocalFunc = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };