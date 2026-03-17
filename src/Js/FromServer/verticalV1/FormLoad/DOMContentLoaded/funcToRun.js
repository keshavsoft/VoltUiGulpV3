import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncFetchAsGetForDatalist } from "./FetchAsGetForDatalist/entryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncFetchAsGetForDatalist();
    LocalFunc1();


};

const LocalFunc1 = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };
