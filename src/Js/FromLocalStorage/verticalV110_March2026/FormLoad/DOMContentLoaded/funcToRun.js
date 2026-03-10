import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncToDataList } from "./ToDataList/entryFile.js";

const StartFunc = async () => {
    LocalFunc1();
    StartFuncAddListeners();
    StartFuncToDataList()

};

const LocalFunc1 = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };
