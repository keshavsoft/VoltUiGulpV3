import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncFetchAsGetForDatalist } from "./FetchAsGetForDatalist/entryFile.js";
import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncFetchAsGetForDatalist();
    LocalFunc1();
    StartFuncFromFetchAsGet();


};

const LocalFunc1 = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };
