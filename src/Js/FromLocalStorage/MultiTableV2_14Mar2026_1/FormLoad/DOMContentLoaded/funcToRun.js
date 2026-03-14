import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncForEnterKeyCalculation } from "./ForEnterKeyCalculation/entryFie.js";
import { StartFunc as FetchAsGet } from "./FetchAsGet/entryFile.js";

const getInRowPkFromSearchParams = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("inRowPk"); // string or null
};

const StartFunc = () => {
    const LocalInRowPk = getInRowPkFromSearchParams();
// debugger;
    LocalFunc();
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
    StartFuncForEnterKeyCalculation();

    FetchAsGet();
};

const LocalFunc = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };